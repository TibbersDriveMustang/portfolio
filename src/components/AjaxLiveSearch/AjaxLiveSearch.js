/**
 * Created by Tibbers on 3/13/17.
 */

import React from 'react'

export default class AjaxLiveSearch extends React.Component{
  constructor(){
    super();
    let test = React.getJSON('./data.json')
    console.log('Ajax Live Search');
    console.log(test);
  }



  render(){
    return <div>
      This is AjaxLiveSearch
      <div id="searchArea">
        {/*click the label will activate the input field*/}
        <label htmlFor="search">Live Search</label>
        <p>Enter the name or info</p>
        <input type="search" name="search" id="search" placeholder="name or info"/>
      </div>
      <div id="update"></div>
    </div>
  }
}
