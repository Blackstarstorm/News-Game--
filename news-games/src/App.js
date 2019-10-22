import React from 'react';
import './App.css';
import axios from 'axios';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import Articles from './compenents/Articles';
import Nav from './compenents/Nav';
import Hero from './compenents/Hero';
import Sources from './compenents/Sources';
import { Route, Link, withRouter } from 'react-router-dom';
import { getArticles } from './services/api-helper';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      search: "",
      radio: ""
      
    }
  }

  componentDidMount = async () => {
    const articles = await getArticles("polygon","playstation");
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
  handleClick = (event) =>
  {
    let radio = event.target.value
    this.setState({
    radio: radio
    })
    }

  handleSubmit = async (event) => {
    event.preventDefault();
    const articles = await getArticles
      (this.state.radio, this.state.search)
    this.setState({
      articles: articles
    })
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header  />
          <Hero handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <h2 className="title">Pick a News Source</h2>
          <Route path='/sources' render={() => <Sources radio={this.state.radio} handleClick={this.handleClick}/>} />
          
          <Link to="/Sources">
            <button handleChange={this.buttonChange}
            id="button-sources">Sources</button>
          </Link>
          
        </header>

        <main>
          <Route
            exact path='/'
            render={() =>
              (<Articles articles={this.state.articles} />)}
          />
        </main>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
