export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  try {
    // Exchange the code for an access token
    const tokenResponse = await fetch('https://www.patreon.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        grant_type: 'authorization_code',
        client_id: process.env.PATREON_CLIENT_ID,
        client_secret: process.env.PATREON_CLIENT_SECRET,
        redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/patreon-callback`,
      }),
    });

    const tokenData = await tokenResponse.json();

    // Get user's membership status
    const memberResponse = await fetch('https://www.patreon.com/api/oauth2/v2/identity?include=memberships', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await memberResponse.json();
    
    // Check if user is an active patron
    const isActivePatron = userData.included?.some(
      item => item.type === 'member' && item.attributes.patron_status === 'active_patron'
    );

    if (isActivePatron) {
      console.log('Active patron verified!');
      // Redirect back to home page with success
      res.redirect('/?verified=true');
    } else {
      res.redirect('/?verified=false');
    }
  } catch (error) {
    console.error('Patreon verification error:', error);
    res.redirect('/?error=true');
  }
} 