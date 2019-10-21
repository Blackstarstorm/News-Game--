import React from 'react';


export default function Articles(props) {

  return (
    <div id="article">
      {
        props.articles.length !== 0 ? 
        props.articles.map(news => (
          <div key={news.url} className="articles">

            <h1>{news.title}</h1>
            <h2>{news.author}</h2>
            <a target="_blank" href={news.url}>The Source
            </a>
            <h3>{news.description}</h3>
            <img src={news.urlToImage} />
          </div>
        ))
          :
          <div id="fail">
            <img src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1571694391/14-144079_based-on-whats-been-going-on-recently-in_bvsvjl.png" /><h2>Sorry! Couldn't find anything</h2>
            </div>
      }
    </div>
  )
}