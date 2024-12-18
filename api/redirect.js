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
  console.log('Requested URL:', req.url); // Log the incoming URL

  let requestedPath = req.url.split('?')[0];
  requestedPath = requestedPath.endsWith('/') ? requestedPath.slice(0, -1) : requestedPath;

  console.log('Processed Path:', requestedPath); // Log the processed path

  if (redirects[requestedPath]) {
    const newUrl = mainDomain + redirects[requestedPath];
    console.log('Redirecting to:', newurl); // Log the new redirect URL
    res.writeHead(302, { Location: newUrl });
    res.end();
  } else {
    console.log('404 Not Found for Path:', requestedPath); // Log the 404
    res.statusCode = 404;
    res.end('The page you are looking for does not exist.');
  }
}

