import { createRequestHandler } from '@remix-run/node';
import * as build from '../build/server/index.js';

async function testRoutes() {
  const handler = createRequestHandler(build, 'production');
  const routes = ['/', '/about', '/skills', '/projects', '/certificates', '/contact'];

  console.log('Testing Server-Side Rendering for all routes...');

  for (const route of routes) {
    try {
      const request = new Request(`https://example.com${route}`, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          Accept: 'text/html,application/xhtml+xml',
        },
      });

      const response = await handler(request);
      const html = await response.text();

      console.log(`Route ${route} -> Status: ${response.status}, HTML Length: ${html.length}`);
      if (response.status !== 200) {
        console.error(`ERROR: Route ${route} returned status ${response.status}`);
        process.exit(1);
      }
    } catch (err) {
      console.error(`CRASH on Route ${route}:`, err);
      process.exit(1);
    }
  }

  // Test POST action on /api/set-theme
  console.log('Testing Action on /api/set-theme...');
  try {
    const formData = new FormData();
    formData.append('theme', 'dark');

    const request = new Request('https://example.com/api/set-theme', {
      method: 'POST',
      body: formData,
    });

    const response = await handler(request);
    const json = await response.json();
    console.log(`/api/set-theme -> Status: ${response.status}, Response:`, json);
    if (response.status !== 200 || json.status !== 'success') {
      console.error('ERROR on /api/set-theme');
      process.exit(1);
    }
  } catch (err) {
    console.error('CRASH on /api/set-theme:', err);
    process.exit(1);
  }

  // Test POST action on /contact
  console.log('Testing Action on /contact...');
  try {
    const formData = new FormData();
    formData.append('email', 'test@example.com');
    formData.append('message', 'Hello from test');

    const request = new Request('https://example.com/contact', {
      method: 'POST',
      body: formData,
    });

    const response = await handler(request);
    const contentType = response.headers.get('content-type') || '';
    console.log(`/contact action -> Status: ${response.status}, Content-Type: ${contentType}`);
    if (response.status !== 200) {
      console.error('ERROR on /contact action');
      process.exit(1);
    }
  } catch (err) {
    console.error('CRASH on /contact action:', err);
    process.exit(1);
  }

  console.log('ALL ROUTES AND SERVER ACTIONS VERIFIED SUCCESSFULLY WITH 0 ERRORS!');
}

testRoutes();
