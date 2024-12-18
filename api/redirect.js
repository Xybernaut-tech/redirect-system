// 🔥 STEP 1: Set the main domain URL (you only change this once)
const mainDomain = 'https://neeplay.net';

// 🔥 STEP 2: List of paths and their redirect destinations
const redirects = {
  '/channel1': '/live/z-tv-hd',
  '/channel2': '/path/to/channel2',
  '/channel3': '/path/to/channel3',
  '/sports': '/category/sports'
};

// 🔥 Vercel serverless function
export default function handler(req, res) {
  let requestedPath = req.url.split('?')[0]; // Remove query parameters
  requestedPath = requestedPath.endsWith('/') ? requestedPath.slice(0, -1) : requestedPath; // Remove trailing slash

  if (redirects[requestedPath]) {
    const newUrl = mainDomain + redirects[requestedPath];
    res.writeHead(302, { Location: newUrl }); // 302 = temporary redirect
    res.end();
  } else {
    res.statusCode = 404;
    res.end('The page you are looking for does not exist.');
  }
}

