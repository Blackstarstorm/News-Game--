import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import Articles from './compenents/Articles';
import Nav from './compenents/Nav';
import Hero from './compenents/Hero';
import Sources from './compenents/Sources';
import { Route, Link } from 'react-router-dom';
import { getArticles, getArticles2 } from './services/api-helper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search: ""
    }
  }

  componentDidMount = async () => {
    const articles = await getArticles("playstation");
    this.setState({
      articles
    })
  }

  handleChange = (event) => {
    let value = event.target.value
    this.setState({
      search: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const articles = await getArticles(this.state.search)
    this.setState({
      articles: articles
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header  />
          <Hero handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </header>

        <main>
          <Route
            exact path='/'
            render={() =>
              (<Articles articles={this.state.articles} />)}
          />
          <Sources />
         
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
