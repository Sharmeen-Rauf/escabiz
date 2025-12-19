# Google Ads Setup Guide for EscaBiz 🔥

## Overview
This guide will help you set up Google Ads to drive traffic to your website and track conversions (form submissions).

## Step 1: Create Google Ads Account

1. Go to [Google Ads](https://ads.google.com/)
2. Sign in with your Google account
3. Create a new Google Ads account
4. Set your billing information

## Step 2: Link Google Ads with Google Analytics

1. In Google Analytics, go to **Admin** (gear icon)
2. Under **Property**, click **Google Ads Linking**
3. Click **+ New Link Group**
4. Select your Google Ads account
5. Enable **All website data**
6. Click **Link accounts**

## Step 3: Create Conversion Action in Google Ads

1. In Google Ads, go to **Tools & Settings** (wrench icon)
2. Under **Measurement**, click **Conversions**
3. Click the **+** button to create a new conversion action
4. Select **Website** as the source
5. Fill in the details:
   - **Category**: Lead
   - **Conversion name**: Form Submission
   - **Value**: Use the same value for each conversion (e.g., $1) OR use different values
   - **Count**: One (count each conversion once)
   - **Click-through window**: 30 days
   - **View-through window**: 1 day
6. Click **Create and continue**
7. Choose **Use Google tag or Google tag manager**
8. Copy the **Conversion ID** (format: AW-XXXXXXXXXX)
9. **Note**: You can also use the existing Google Analytics tag (recommended)

## Step 4: Set Up Conversion Tracking (Option 1 - Using Google Analytics)

**Recommended Method**: Since you already have Google Analytics set up, you can use it for conversion tracking:

1. In Google Ads, when creating the conversion action, select **Use data from your Google Analytics property**
2. Select your Google Analytics property
3. Select the event: **form_submission** (this is what we're tracking)
4. Complete the setup

## Step 5: Set Up Conversion Tracking (Option 2 - Using Conversion ID)

If you want to use a separate Google Ads conversion ID:

1. Add the conversion ID to your `.env.local`:
   ```env
   NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
   ```

2. Add the same variable in Vercel project settings

3. The code will automatically track conversions when forms are submitted

## Step 6: Create Your First Campaign

1. In Google Ads, click **+ New campaign**
2. Choose your campaign goal:
   - **Leads** (recommended for B2B lead generation)
   - **Website traffic**
   - **Sales**
3. Select campaign type: **Search** (for Google Search ads)
4. Set up your campaign:
   - **Campaign name**: EscaBiz Lead Generation
   - **Bidding**: Maximize conversions (or Target CPA if you have data)
   - **Budget**: Set your daily budget
   - **Networks**: Google Search (uncheck Display Network for now)
5. Create ad groups with relevant keywords:
   - **B2B lead generation**
   - **B2B appointment setting**
   - **Virtual staff augmentation**
   - **LinkedIn automation services**
   - **B2B market research**
6. Create ads:
   - **Headlines**: 3 headlines (30 characters each)
   - **Descriptions**: 2 descriptions (90 characters each)
   - **Final URL**: Your website URL (e.g., https://www.escabiz.com)

## Step 7: Track Conversions in Google Ads

After your campaign is running:

1. Go to **Tools & Settings** > **Conversions**
2. You'll see conversion data after people submit forms
3. Monitor:
   - **Conversions**: Number of form submissions
   - **Cost per conversion**: How much you're paying per lead
   - **Conversion rate**: Percentage of clicks that convert

## Step 8: Optimize Your Campaigns

### Keywords
- Use **exact match** and **phrase match** for better targeting
- Add negative keywords to exclude irrelevant searches
- Focus on high-intent keywords (e.g., "hire B2B lead generation company")

### Ad Copy
- Highlight your unique value proposition
- Include a clear call-to-action (CTA)
- Use ad extensions (sitelinks, callouts, structured snippets)

### Landing Pages
- Your home page and "Lets Talk" page are already optimized
- Forms are prominently displayed
- Mobile-responsive design

### Bidding Strategy
- Start with **Maximize conversions** (automatic)
- Once you have data, switch to **Target CPA** (cost per acquisition)
- Set a target CPA based on your customer lifetime value

## Step 9: Monitor Performance

### Key Metrics to Track:
1. **Impressions**: How many times your ads are shown
2. **Clicks**: How many people click your ads
3. **CTR (Click-Through Rate)**: Clicks ÷ Impressions
4. **Conversions**: Form submissions from ads
5. **Cost per Conversion**: Total spend ÷ Conversions
6. **Conversion Rate**: Conversions ÷ Clicks

### Google Analytics Reports:
1. Go to **Reports** > **Acquisition** > **Google Ads**
2. See which campaigns, ad groups, and keywords drive conversions
3. Analyze user behavior after clicking ads

## Step 10: Set Up UTM Parameters (Optional but Recommended)

When creating ads, add UTM parameters to track performance:

```
https://www.escabiz.com/?utm_source=google&utm_medium=cpc&utm_campaign=lead_generation&utm_term=b2b_appointment_setting
```

This helps you see which specific ads and keywords drive the most conversions.

## Troubleshooting

### Conversions Not Showing Up?
1. **Wait 24-48 hours**: Conversion data can take time to appear
2. **Check Google Analytics**: Verify that `form_submission` events are firing
3. **Test the form**: Submit a test form and check Google Analytics Real-Time reports
4. **Verify linking**: Ensure Google Ads and Google Analytics are properly linked
5. **Check conversion settings**: Make sure the conversion action is set up correctly

### Low Conversion Rate?
1. **Improve ad relevance**: Make sure ads match search intent
2. **Optimize landing pages**: Ensure forms are easy to find and complete
3. **Add trust signals**: Testimonials, case studies, certifications
4. **Reduce form fields**: Only ask for essential information
5. **A/B test**: Test different ad copy and landing pages

## Best Practices

1. **Start Small**: Begin with a small daily budget ($10-50) and scale up
2. **Focus on Quality**: Target high-intent keywords, not just high-volume
3. **Monitor Daily**: Check performance daily for the first week
4. **Optimize Continuously**: Pause underperforming ads, increase bids on winners
5. **Use Ad Extensions**: Sitelinks, callouts, and structured snippets improve CTR
6. **Negative Keywords**: Add irrelevant search terms as negative keywords
7. **Landing Page Relevance**: Ensure your landing page matches the ad copy

## Budget Recommendations

- **Starting Budget**: $10-50/day
- **Testing Phase**: 1-2 weeks
- **Scaling Phase**: Increase budget by 20% weekly if performance is good
- **Target CPA**: $20-100 per lead (depending on your service value)

## Next Steps

1. ✅ Google Analytics is already set up
2. ✅ Conversion tracking code is implemented
3. ⏳ Create Google Ads account
4. ⏳ Link Google Ads with Google Analytics
5. ⏳ Create conversion action
6. ⏳ Launch your first campaign
7. ⏳ Monitor and optimize

## Support

If you need help:
- [Google Ads Help Center](https://support.google.com/google-ads)
- [Google Analytics Help](https://support.google.com/analytics)
- Check your admin dashboard at `/admin` to see form submissions

---

**Remember**: Google Ads is a powerful tool, but it requires ongoing optimization. Start small, test, learn, and scale what works! 🚀

