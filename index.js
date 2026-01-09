const express = require('express');
const axios = require('axios');

const app = express();


const PORT = process.env.PORT || 3000;

app.get('/api/fun-fact', async (req, res) => {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const fact = response.data.text;
    res.json({ fact });
  } catch (error) {
    console.error('Error fetching fact:', error.message);
    res.status(500).json({ error: 'Could not fetch fun fact' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
