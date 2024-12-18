// Set the main domain URL (update this to the domain you want to redirect to)
const mainDomain = 'https://newdomain.com';

// Redirect paths and their destinations
const redirects = {
  '/channel1': '/path/to/channel1',
  '/channel2': '/path/to/channel2',
  '/channel3': '/path/to/channel3',
  '/sports': '/category/sports'
};

// Serverless function for handling redirects
export default function handler(req, res) {
  let requestedPath = req.url.split('?')[0]; // Strip query parameters
  requestedPath = requestedPath.endsWith('/') ? requestedPath.slice(0, -1) : requestedPath; // Remove trailing slash

  // Check if the requested path matches any redirect
  if (redirects[requestedPath]) {
    const newUrl = mainDomain + redirects[requestedPath];
    res.writeHead(302, { Location: newUrl }); // Temporary redirect (HTTP 302)
    res.end();
  } else {
    // Handle unmatched paths
    res.statusCode = 404;
    res.end('404 - Not Found');
  }
}
