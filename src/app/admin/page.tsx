'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Submission {
  _id: string;
  serviceRequest: string;
  prefix?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  additionalNotes?: string;
  discovery: string;
  consent: boolean;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  submittedAt: string;
}

interface Stats {
  total: number;
  byStatus: {
    new: number;
    contacted: number;
    qualified: number;
    closed: number;
  };
  byPeriod: {
    today: number;
    thisWeek: number;
    thisMonth: number;
  };
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchStats();
      fetchSubmissions();
    }
  }, [isAuthenticated, currentPage, statusFilter, searchQuery]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/submissions?page=1&limit=1');
      if (response.ok) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    if (!username || !password) {
      setLoginError('Please enter both username and password');
      return;
    }

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        fetchStats();
        fetchSubmissions();
      } else {
        // Show detailed error message
        const errorMsg = data.details 
          ? `${data.error}: ${data.details}` 
          : data.error || 'Login failed. Please check your credentials.';
        setLoginError(errorMsg);
        console.error('Login error:', data);
      }
    } catch (error: any) {
      console.error('Login network error:', error);
      setLoginError(`Network error: ${error.message || 'Please check your connection and try again.'}`);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setUsername('');
      setPassword('');
      router.push('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchSubmissions = async () => {
    setIsLoadingData(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '50',
        ...(statusFilter !== 'all' && { status: statusFilter }),
        ...(searchQuery && { search: searchQuery }),
      });

      const response = await fetch(`/api/admin/submissions?${params}`);
      const data = await response.json();

      if (data.success) {
        setSubmissions(data.data);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setIsLoadingData(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await response.json();

      if (data.success) {
        fetchSubmissions();
        fetchStats();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'qualified':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-[#6f7074]">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <Image
              src="/Logo_Revised(Grey).png"
              alt="EscaBiz Logo"
              width={200}
              height={73}
              className="h-auto w-auto mx-auto mb-4"
            />
            <h1 className="text-2xl font-semibold text-[#6f7074]">Admin Login</h1>
            <p className="text-sm text-[#a9a9a9] mt-2">Enter your credentials to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-[#6f7074] mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 text-sm text-[#6f7074] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#6f7074] mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 text-sm text-[#6f7074] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] transition-all duration-300 outline-none"
                placeholder="Enter password"
              />
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#1c75c0] hover:bg-[#1565a0] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/Logo_Revised(Grey).png"
                alt="EscaBiz Logo"
                width={150}
                height={55}
                className="h-auto w-auto"
              />
              <h1 className="text-xl font-semibold text-[#6f7074]">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-[#6f7074] hover:text-[#1c75c0] transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="text-sm text-[#a9a9a9] mb-1">Total Submissions</div>
              <div className="text-3xl font-bold text-[#6f7074]">{stats.total}</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="text-sm text-[#a9a9a9] mb-1">New</div>
              <div className="text-3xl font-bold text-blue-600">{stats.byStatus.new}</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="text-sm text-[#a9a9a9] mb-1">This Week</div>
              <div className="text-3xl font-bold text-[#6f7074]">{stats.byPeriod.thisWeek}</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="text-sm text-[#a9a9a9] mb-1">This Month</div>
              <div className="text-3xl font-bold text-[#6f7074]">{stats.byPeriod.thisMonth}</div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#6f7074] mb-2">Search</label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search by name, email, company, or phone..."
                className="w-full px-4 py-2 text-sm text-[#6f7074] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#6f7074] mb-2">Status Filter</label>
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 text-sm text-[#6f7074] border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c75c0] focus:border-[#1c75c0] outline-none"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="qualified">Qualified</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6f7074] uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6f7074] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6f7074] uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6f7074] uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6f7074] uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6f7074] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-[#6f7074] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {isLoadingData ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-[#a9a9a9]">
                      Loading...
                    </td>
                  </tr>
                ) : submissions.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-8 text-center text-[#a9a9a9]">
                      No submissions found
                    </td>
                  </tr>
                ) : (
                  submissions.map((submission) => (
                    <tr key={submission._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6f7074]">
                        {new Date(submission.submittedAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6f7074]">
                        {submission.prefix ? `${submission.prefix} ` : ''}{submission.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6f7074]">
                        {submission.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6f7074]">
                        {submission.phone}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6f7074]">
                        {submission.serviceRequest}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                          {submission.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="px-2 py-1 text-xs font-semibold text-[#1c75c0] hover:bg-[#1c75c0] hover:text-white rounded transition-colors"
                          >
                            View
                          </button>
                          <select
                            value={submission.status}
                            onChange={(e) => updateStatus(submission._id, e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs border border-gray-300 rounded px-2 py-1 text-[#6f7074] focus:ring-2 focus:ring-[#1c75c0] outline-none"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-[#6f7074]">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-semibold text-[#6f7074] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-semibold text-[#6f7074] bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedSubmission(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#6f7074]">Submission Details</h2>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="text-[#a9a9a9] hover:text-[#6f7074] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-[#a9a9a9]">Date Submitted</label>
                  <p className="text-sm text-[#6f7074] mt-1">
                    {new Date(selectedSubmission.submittedAt).toLocaleString()}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#a9a9a9]">Status</label>
                  <p className="mt-1">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedSubmission.status)}`}>
                      {selectedSubmission.status}
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#a9a9a9]">Name</label>
                <p className="text-sm text-[#6f7074] mt-1">
                  {selectedSubmission.prefix ? `${selectedSubmission.prefix} ` : ''}{selectedSubmission.name}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-[#a9a9a9]">Email</label>
                  <p className="text-sm text-[#6f7074] mt-1">{selectedSubmission.email}</p>
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#a9a9a9]">Phone</label>
                  <p className="text-sm text-[#6f7074] mt-1">{selectedSubmission.phone}</p>
                </div>
              </div>

              {selectedSubmission.company && (
                <div>
                  <label className="text-sm font-semibold text-[#a9a9a9]">Company</label>
                  <p className="text-sm text-[#6f7074] mt-1">{selectedSubmission.company}</p>
                </div>
              )}

              <div>
                <label className="text-sm font-semibold text-[#a9a9a9]">Service Request</label>
                <p className="text-sm text-[#6f7074] mt-1">{selectedSubmission.serviceRequest}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#a9a9a9]">How Did You Discover Us?</label>
                <p className="text-sm text-[#6f7074] mt-1">{selectedSubmission.discovery}</p>
              </div>

              {selectedSubmission.additionalNotes && (
                <div>
                  <label className="text-sm font-semibold text-[#a9a9a9]">Additional Notes</label>
                  <p className="text-sm text-[#6f7074] mt-1 whitespace-pre-wrap">{selectedSubmission.additionalNotes}</p>
                </div>
              )}

              <div>
                <label className="text-sm font-semibold text-[#a9a9a9]">Marketing Consent</label>
                <p className="text-sm text-[#6f7074] mt-1">{selectedSubmission.consent ? 'Yes' : 'No'}</p>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-4 py-2 text-sm font-semibold text-[#6f7074] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

