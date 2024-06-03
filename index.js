const cors = require('cors');
const express = require('express');
const http = require('http');
const config = require('./backend/config/config');
const router = require('./backend/userInfo/index');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cors());

const server = http.createServer(app);

app.use('/api', router);


server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
