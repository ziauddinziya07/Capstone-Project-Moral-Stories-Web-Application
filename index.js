import express from 'express';
import axios from 'axios';

const app = express();
const port = '3000';
const API_URL = 'https://shortstories-api.onrender.com/';

app.use(express.static('public'));

let lastStory;
app.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response.data);
    lastStory = response.data;
    res.render('index.ejs', {
      data: response.data,
    });
  } catch (error) {
    const errorMsg =
      'There was an error while loading the new story, Please try again!';
    res.render('index.ejs', { data: lastStory, errorMsg: errorMsg });
  }
});

app.listen(port, () => {
  console.log(`Server has been up and running on port: ${port}`);
});
