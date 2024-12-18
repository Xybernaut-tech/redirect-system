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
  // Get the path requested (like /channel1)
  const requestedPath = req.url;

  // Check if the path is in the redirects list
  if (redirects[requestedPath]) {
    // Generate the new URL for the redirect
    const newUrl = mainDomain + redirects[requestedPath];
    res.writeHead(302, { Location: newUrl }); // 302 = temporary redirect
    res.end();
  } else {
    res.statusCode = 404;
    res.end('The page you are looking for does not exist.');
  }
}
