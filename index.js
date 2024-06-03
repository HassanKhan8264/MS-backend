const cors = require('cors');
const express = require('express');
const config = require("./config");
const router = require('./backend/userInfo');
const app = express();

app.use(cors());

router.get("/", (req, res) => res.send("Express on Vercel"));
app.use('/api', router);



app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
