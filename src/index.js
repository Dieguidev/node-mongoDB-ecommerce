const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routerApi = require('./routes/index.route');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('bien conectado'))
  .catch(err => console.log(err)
);

routerApi(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Sopenca!');
})




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
