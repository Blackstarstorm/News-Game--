import React from 'react';

export default function Articles(props) {

  return (
    <div id="article">
      {
        props.articles.map(news => (
          <div key={news.url} className="articles">

            <h1>{news.title}</h1>
            <h2>{news.author}</h2>
            <a href={news.url}>The Source</a>
            <h3>{news.description}</h3>
            <img src={news.urlToImage} />
          </div>
        ))
      }
    </div>
  )
}