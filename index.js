// const cors = require('cors');
const express = require('express');
const config = require('./backend/config/config');
const router = require('./backend/userInfo/index');
const app = express();

// app.use(cors());


app.use('/api', router);
app.get('/', (req, res) => {
  res.send('app is running fine')

})


app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
