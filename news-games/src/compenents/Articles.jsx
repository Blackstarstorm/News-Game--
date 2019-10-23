import React from 'react';
import pipe from "../pipe.mp3";
import mushroom from "../mushroom.mp3";

class Articles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let audioPipe = new Audio(pipe);
    let audioMushroom = new Audio(mushroom);
    return (
      <div id="article">
      
        {
          this.props.articles.length !== 0 ?
            this.props.articles.map(news => (
            
              <div key={news.url} className="articles">

                <h1>{news.title}</h1>
                <h2>{news.author}</h2>
                <a target="_blank" href={news.url}><span id="link" onClick={async () => audioPipe.play()}>Source's Page</span>
                </a>
                <h3>{news.description}</h3>
                {news.urlToImage ? <img src={news.urlToImage} onClick={async () => await audioMushroom.play()}/> :
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
} 

export default Articles;