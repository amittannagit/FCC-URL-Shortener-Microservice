require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use('/public', express.static(`${process.cwd()}/public`));

// Serve the HTML page
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// In-memory store for URL mappings
const urlDatabase = {};
let urlCounter = 1;

// Helper function to validate URL
function isValidUrl(url) {
  try {
    const parsedUrl = new URL(url);
    // Basic validation to check if it uses a proper protocol (http/https)
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

// Endpoint to shorten URLs
app.post('/api/shorturl', function(req, res) {
  const originalUrl = req.body.url;

  if (!originalUrl) {
    return res.json({ error: 'No URL provided' });
  }

  if (!isValidUrl(originalUrl)) {
    return res.json({ error: 'invalid url' });
  }

  // Create a new short URL
  const shortUrl = urlCounter++;
  urlDatabase[shortUrl] = originalUrl;
  
  res.json({
    original_url: originalUrl,
    short_url: shortUrl
  });
});

// Endpoint to redirect shortened URLs to the original URL
app.get('/api/shorturl/:shortUrl', function(req, res) {
  const shortUrl = parseInt(req.params.shortUrl, 10);

  const originalUrl = urlDatabase[shortUrl];
  if (originalUrl) {
    res.redirect(originalUrl);
  } else {
    res.status(404).json({ error: 'No corresponding URL found' });
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
