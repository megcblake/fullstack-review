import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.search = this.search.bind(this);
    this.retrieveRepos = this.retrieveRepos.bind(this);
  }

  retrieveRepos() {
    fetch('/repos')
      .then(response => {
        return response.json()
      })
      .then(
        (result) => {
          this.setState({repos: result})
        }
      )
      .then(myJson => {
        console.log(this.state.repos)
      })
  }

  componentDidMount() {
    this.retrieveRepos()
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    fetch('/repos', {
      method: 'POST', 
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({term})
    })
      .then(response => {
        return response.json()
      })
      .then((result) => {
        this.retrieveRepos()
      })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));