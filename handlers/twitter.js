import Twitter from 'twitter';
import axios from 'axios';

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

export const dadJoke = async () => {
  console.log('DAD JOKE');
  const headers = {
    Accept: 'application/json',
  };

  const { data } = await axios.get('https://icanhazdadjoke.com/', { headers });

  await client.post('statuses/update', { status: data.joke });
};
