const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const router = require('./backend/userInfo');
const config = require('./config');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

const angularAppPath = path.join(path.resolve(__dirname), './client/dist');

// Serve static files
app.use(express.static(angularAppPath));

app.get('*', (req, res) => {
  const filePath = path.join(angularAppPath, 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(500).send('An error occurred while loading the page.');
    }

    // Dynamic meta tags logic
    let title = 'Default Title';
    let description = 'Default Description';

    // Example: Dynamic meta tags based on route
    if (req.url.includes('home')) {
      title = 'Page 1 Title';
      description = 'Description for Page 1';
    } else if (req.url.includes('about')) {
      title = 'Page 2 Title';
      description = 'Description for Page 2';
    }

    // Replace placeholders with dynamic values
    htmlData = htmlData.replace(/<title>.*<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*">/, `<meta name="description" content="${description}">`);

    res.send(htmlData);
  });
});

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
