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
            <a target="_blank" href={news.url}><span id="link">Source's Page</span>
            </a>
            <h3>{news.description}</h3>
            {news.urlToImage ? <img src={news.urlToImage} /> :
              <div><img src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1571757691/crop_xivbsb.jpg" /> <h2>Sorry! Couldn't find an image</h2></div>}
              
              </div>
              
        ))
          :
          <div id="fail">
            <img src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1571694391/14-144079_based-on-whats-been-going-on-recently-in_bvsvjl.png" /><h2 id="fail-word">Sorry! Couldn't find anything</h2>
            </div>
          
      }
    </div>
  )
}