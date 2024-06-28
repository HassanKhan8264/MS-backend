const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const router = require('./backend/userInfo');
const config = require('./config');

const app = express();
const corsOptions = {
  origin: ['http://localhost:4200'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1', router);

const angularAppPath = path.join(path.resolve(__dirname), './client/dist');

app.use(express.static(angularAppPath));

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(path.resolve(__dirname), 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(path.resolve(__dirname), 'robots.txt'));
});

// this function add title and description dynamic in index.html from backend
const serveIndexhtml = (req, res) => {
  const filePath = path.join(angularAppPath, 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      return res.status(500).send('An error occurred while loading the page.');
    }
    let title = '';
    let description = '';

    let routes = [
      {
        url: 'home', title: 'My Study Solution - Classes Help - Expert Class Help',
        description: 'My Study Solution offers top-notch academic support tailored to meet your needs. Looking to Pay Someone For Your Online Class, Quiz, Assignment, Homework, Exam or Any Other Activity? Get a quote & start today!'
      },
      {
        url: 'contact', title: 'Online Class Help - Perfect Class Guide - Get Free Quote',
        description: 'Are you struggling with your Online Classes? Pay Someone For Your Online Class. Our services are 100% secure , ensuring your privacy and academic integrity. Whether you need help with a single task or ongoing support throughout the semester, we are here to help you succeed.'
      },
      {
        url: 'subjects', title: 'Need Help For Courses - Online Class Solution',
        description: 'Want to Pay Someone to Do Your Online Course or Class? My Study Solution has Professionals & Experts designed to empower students to achieve their academic excellence without doing all the hectic work.'
      },
      {
        url: 'about', title: 'About Us - My Study Solution',
        description: 'At My Study Solution, You Can Pay Someone To Take Your Online Class. Our experienced team is committed to providing reliable & 100% secure services tailored to your needs. With a focus on excellence & integrity, we aim to empower students to reach their full potential educational journey! Join us at My Study Solution now!'
      },
      {
        url: 'process', title: 'Need Help In Online Class - Online Class Process',
        description: 'Are you finding it difficult to keep up with your online classes? At My Study Solution You Can Pay Someone To Take Your Online Class on your behalf. Submit your needs, get matched with one of our Experts, collaborate seamlessly, pay securely, track your progress & achieve your academic goals with ease.'
      },
      {
        url: 'exams', title: 'Proctor Exam Help - Online Exam Help',
        description: 'Pay Someone To Do Your Online Exam with My Study Solution. We give assurance that our process is 100% secure. We will take the Exam on your behalf and ensure you get the results you need.'
      }
    ]
    let routeMatch = routes.find(route => req.url.includes(route.url))
    if (routeMatch) {
      title = routeMatch.title;
      description = routeMatch.description;
    }
    htmlData = htmlData.replace(/<title>.*<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*">/, `<meta name="description" content="${description}">`);

    res.send(htmlData);

  });
}
app.get('/', serveIndexhtml);
app.get('*', serveIndexhtml);


const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







