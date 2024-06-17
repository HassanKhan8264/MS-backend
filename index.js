const cors = require('cors');
const express = require('express');
const config = require("./config");
const router = require('./backend/userInfo');
const app = express();

app.use(cors());
app.use(express.json())
// app.get("/", (req, res) => res.send("Express on Vercel"));
app.use('/api/v1', router);
app.use('/', express.static(path.join(path.resolve(__dirname), './client/dist')))
app.use('*', express.static(path.join(path.resolve(__dirname), './client/dist')))


app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});