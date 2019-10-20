import React from 'react';
import './App.css';
import Header from './compenents/Header';
import Footer from './compenents/Footer';
import Articles from './compenents/Articles';
import Nav from './compenents/Nav';
import Hero from './compenents/Hero';
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
  
  handleChange = (event) => {
    let articles = event.target.articles
    // let value = event.target.value
    // this.setState(prevState =>  ({
    //     formData: {
    //     ...prevState.formData,
        
    //     [articles]: value
        
    //   }
    // }))
  }

  handleSubmit = async (event) => {
    
  }

  render() {
    return (
    <div className="App">
      <header>
          <Header />
          <Hero />
      </header>
        
       <main>
        <Route
          exact path='/'
          render={() =>
            (<Articles articles={this.state.articles} />)} 
        />
        <Route path='/Nav'
          render={() => (<Nav 
            articles={this.state.articles}
          />)}
        />
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default App;
