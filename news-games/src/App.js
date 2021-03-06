import React from 'react';
import './App.css';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import Articles from './compenents/Articles';
import Hero from './compenents/Hero';
import Sources from './compenents/Sources';
import { Route, Link, withRouter } from 'react-router-dom';
import { getArticles } from './services/api-helper';
import luigi from './luigi.mp3';
import coin from './coin.mp3';

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

    const articles = await getArticles("polygon", "playstation");
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

  handleClick = async (event) => {
    let radio = event.target.value
    this.setState({
      radio: radio
    })
    let audioCoin = new Audio(coin);
    await audioCoin.play()
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

    let audioLuigi = new Audio(luigi);

    return (
      <div className="App">

        <header>
          <Header />
          <Hero handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <h2 className="title">Pick a News Source</h2>
          <Route path='/sources' render={() => <Sources radio={this.state.radio} handleClick={this.handleClick} />} />

          <Link to="/Sources">
            <button handleChange={this.buttonChange}
              id="button-sources"
              onClick={async () => await audioLuigi.play()}>Sources</button>
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
