/**
 * Created by Tibbers on 2/23/17.
 */
import React from 'react'

import {SearchBar, Autocomplete} from './SearchBar'

import SearchResult from './SearchResult'

import SearchSuggest from './SearchSuggest'

import Example from './SearchSample'

export default class GitUserSearch extends React.Component {

  constructor(props){
    super(props)
    // var xmlHttp = new XMLHttpRequest();
    this.state = {
      gitResponse: {},
      xmlHttp: new XMLHttpRequest(),
      userName: 'aron'
    }

    this.handleUserChange = this.handleUserChange.bind(this);
  }

  componentWillMount(){
    this.setState({
      userName: 'kitt'
    });
  }

  componentDidMount(){
    this.state.xmlHttp.open("GET", 'https://api.github.com/search/users?q=' + this.state.userName, false);
    console.log('componentDidMount');
    this.state.xmlHttp.send(null);
    this.setState({
      gitResponse: JSON.parse(this.state.xmlHttp.responseText)
    });
  }

  handleUserChange(event){
    this.setState({
      userName: event.target.value
    });

    this.state.xmlHttp.open("GET", 'https://api.github.com/search/users?q=' + this.state.userName + '&per_page=10', false);
    this.state.xmlHttp.send(null);

    this.setState({
      gitResponse: JSON.parse(this.state.xmlHttp.responseText)
    });
    console.log('handleUserChange');
  }

  render(){
    var arrays = null;
    var userNameList = null;
    let _user;

    if(this.state.gitResponse) {
      if(this.state.gitResponse.items) {
        console.log("Items: ");
        console.log(this.state.gitResponse.items);
        arrays = this.state.gitResponse.items;
        userNameList = this.state.gitResponse.items.map((user) => user.login);
      }
    }

    return (
      <div>
        <h1>GitHub User Search</h1>
        {/*<SearchBar/>*/}
        <input type="text" value={this.state.userName} onChange={this.handleUserChange} list="user-list"/>
        {
          arrays == null ?
          <h3>Array is null</h3> : <div><Autocomplete options1={arrays} ref={input => _user = input}/>
          <SearchSuggest arrays={arrays}/>
            <Example />
          </div>
        }

        <SearchResult arrays={arrays}/>
      </div>
    )
  }
}
