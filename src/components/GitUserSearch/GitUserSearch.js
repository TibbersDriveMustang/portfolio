/**
 * Created by Tibbers on 2/23/17.
 */
import React from 'react'

import {SearchBar, Autocomplete} from './SearchBar'
import SearchResults from './SearchResults'


export default class GitUserSearch extends React.Component {

  constructor(props){
    super(props)
    // var xmlHttp = new XMLHttpRequest();
    this.state = {
      gitResponse: {},
      xmlHttp: new XMLHttpRequest()
    }
  }

  componentDidMount(){
    this.state.xmlHttp.open("GET", 'https://api.github.com/search/users?q=aron', false);
    this.state.xmlHttp.send(null);
    this.setState({
      gitResponse: JSON.parse(this.state.xmlHttp.responseText)
    });
  }

  render(){
    var arrays = null;
    let _user;

    console.log("gitResponse: " + this.state.gitResponse);
    if(this.state.gitResponse) {
      if(this.state.gitResponse.items) {
        console.log("Items: " + this.state.gitResponse.items);
        arrays = this.state.gitResponse.items.map((user) => user.login);
      }
    }


    return (
      <div>
        <h1>GitHub User Search</h1>
        {/*<SearchBar/>*/}
        { arrays == null ?
          <h3>Array is null</h3> : <Autocomplete options={arrays} ref={input => _user = input}/>
        }
        {/*<SearchResults/>*/}
      </div>
    )
  }
}
