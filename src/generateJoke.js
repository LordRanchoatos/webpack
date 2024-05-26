import axios from 'axios';

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke;
  });
}

// const generateJoke = () =>
//   "I don't trust stairs, because they are always up to something.";

export default generateJoke;
