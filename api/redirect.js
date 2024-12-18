// 🔥 STEP 1: Set the main domain URL (you only change this once)
const mainDomain = 'https://neeplay.net';

// 🔥 STEP 2: List of paths and their redirect destinations
const redirects = {
  '/z-tv-hd': '/live/z-tv-hd', 
  '/colors-hd-live': '/live/colors-hd-live', 
  '/and-hd': '/live/and-hd', 
};

// 🔥 Vercel serverless function
export default function handler(req, res) {
  let requestedPath = req.url.split('?')[0]; // Remove query parameters
  requestedPath = requestedPath.endsWith('/') ? requestedPath.slice(0, -1) : requestedPath; // Remove trailing slash
  
  console.log('Requested Path:', requestedPath); // Optional for debugging
  
  if (redirects[requestedPath]) {
    const newUrl = mainDomain + redirects[requestedPath];
    console.log('Redirecting to:', newUrl); // Optional for debugging
    res.writeHead(302, { Location: newUrl }); // 302 = temporary redirect
    res.end();
  } else {
    res.statusCode = 404;
    res.end('The page you are looking for does not exist.');
  }
}
