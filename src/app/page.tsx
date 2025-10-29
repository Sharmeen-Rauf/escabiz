import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>
        {/* Home page content will go here */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Welcome to EscaBiz</h1>
              <p>Home page content will be added here...</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
