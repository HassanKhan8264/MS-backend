const cors = require('cors');
const express = require('express');
const config = require('./backend/config/config');
const router = require('./backend/userInfo/index');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());


app.use('/api', router);


app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
