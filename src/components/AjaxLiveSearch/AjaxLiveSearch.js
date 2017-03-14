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
    let jsonLoader = new XMLHttpRequest();
    jsonLoader.overrideMimeType("application/json");
    console.log('Ajax Live Search');
    jsonLoader.open("GET",'https://raw.githubusercontent.com/TibbersDriveMustang/portfolio/master/src/components/AjaxLiveSearch/data.json',true);   //synchronous loading
    jsonLoader.send(null);
    console.log('Ajax Live Search Done');
    // let temp = JSON.parse(data);
    // console.log(temp);

    jsonLoader.onreadystatechange = function(){

      if(jsonLoader.readyState === 4 && jsonLoader.status == "200"){ //&& jsonLoader.status == "200"
        console.log('Ajax Live Search "readyState" : ');
        let jsonText = JSON.parse(jsonLoader.responseText);
        console.log(jsonText);
      }
    }
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
