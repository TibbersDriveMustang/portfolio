/**
 * Created by Tibbers on 3/13/17.
 */

import React from 'react'
import data from './data.json'

export default class AjaxLiveSearch extends React.Component{
  constructor(){
    super();
    // let test = React.getJSON('./data.json')

    // let test = data
    // let test2 = JSON.stringify(data);
    // console.log(test);
    // console.log(test2);

    this.state = {
      jsonLoader: new XMLHttpRequest()
    };



  }

  componentWillMount(){

    // console.log(jLoad);
    // this.state.jsonLoader.onreadystatechange = function(){
    //
    //   if(jLoad.readyState === 4 && jLoad.status == "200"){
    //     console.log('Ajax Live Search "readyState" : ');
    //     this.setState({
    //       jsonText: JSON.parse(jLoad.responseText)
    //     });
    //   }
    // }

    this.state.jsonLoader.overrideMimeType("application/json");
    this.state.jsonLoader.open("GET",'https://raw.githubusercontent.com/TibbersDriveMustang/portfolio/master/src/components/AjaxLiveSearch/data.json',false);   //synchronous loading
    this.state.jsonLoader.send(null);
    console.log(JSON.parse(this.state.jsonLoader.responseText));
    // this.setState({
    //   response: JSON.parse(this.state.jsonLoader.responseText)
    // });
  }

  componentDidMount(){
    console.log(this.state.jsonLoader.responseText);
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
