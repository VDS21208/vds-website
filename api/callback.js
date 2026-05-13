// Handles GitHub OAuth callback for Decap CMS
// Required env vars on Vercel: OAUTH_GITHUB_CLIENT_ID, OAUTH_GITHUB_CLIENT_SECRET
const renderResponse = (status, payload) => {
  const message = JSON.stringify({
    token: payload.token,
    provider: 'github',
    error: payload.error,
  });
  return `<!doctype html>
<html><body><script>
(function() {
  function recvMessage(e) {
    if (e.data === 'authorizing:github') {
      window.opener.postMessage('authorization:github:${status}:' + ${JSON.stringify(message)}, e.origin);
    }
  }
  window.addEventListener('message', recvMessage, false);
  window.opener && window.opener.postMessage('authorizing:github', '*');
})();
</script><p>You can close this window.</p></body></html>`;
};

export default async function handler(req, res) {
  const { code, state, error } = req.query;
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).send('Missing OAuth environment variables on Vercel.');
    return;
  }
  if (error) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(renderResponse('error', { error }));
    return;
  }
  if (!code) {
    res.status(400).send('Missing code parameter.');
    return;
  }
  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        state,
      }),
    });
    const data = await tokenRes.json();
    if (data.error || !data.access_token) {
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(renderResponse('error', { error: data.error || 'no_token' }));
      return;
    }
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(renderResponse('success', { token: data.access_token }));
  } catch (err) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(renderResponse('error', { error: String(err) }));
  }
}
