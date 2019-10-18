import axios from 'axios';
// https://newsapi.org/v2/everything?sources=ign&q=(make a "form" tag so this is name of game)&apiKey=f475e555aa7945feb889e93489b953e8


export const getApi = async function (gameid) {
  const response = await axios(`https://newsapi.org/v2/everything?sources=ign&q=${gameid}&apiKey=f475e555aa7945feb889e93489b953e8`);
  return response.data.articles;
}