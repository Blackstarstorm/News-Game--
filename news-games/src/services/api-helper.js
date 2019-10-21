import axios from 'axios';

export const getArticles = async function (value,search) {
  const response = await axios(`https://newsapi.org/v2/everything?sources=${value}&q=${search}&apiKey=f475e555aa7945feb889e93489b953e8`);
  console.log(response.data)
  return response.data.articles;
}


