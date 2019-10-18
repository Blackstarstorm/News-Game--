import React from 'react';
import './App.css';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import { Route, Link } from 'react-router-dom';
import { getApi } from './services/api-helper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount = async () => {
    const articles = await getApi('pokemon');
    this.setState({
      articles
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.articles.map(article => (
          <div key={article.url}>

            <h1>{article.title}</h1>
            <p>{article.author}</p>
            <a>{article.url}</a>
            <h2>{article.description}</h2>
            <img src={article.urlToImage} />

          </div>
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
