const axios = require('axios');

module.exports = async (req, res) => {
  if (req.url === '/api/fun-fact' && req.method === 'GET') {
    try {
      const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
      const fact = response.data.text;
      res.status(200).json({ fact });
    } catch (error) {
      console.error('Error fetching fact:', error.message);
      res.status(500).json({ error: 'Could not fetch fun fact' });
    }
  } else {
    res.status(404).json({ error: 'Not found' });
  }
};