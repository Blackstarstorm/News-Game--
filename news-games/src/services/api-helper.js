import axios from 'axios';

export const getArticles = async function (search) {
  const response = await axios(`https://newsapi.org/v2/everything?sources=ign&q=${search}&apiKey=f475e555aa7945feb889e93489b953e8`);
  return response.data.articles;
}

export const getArticles2 = async function (search) {
  const response = await axios(`https://newsapi.org/v2/everything?sources=polygon&q=${search}&apiKey=f475e555aa7945feb889e93489b953e8`);
  return console.log(response)
}
