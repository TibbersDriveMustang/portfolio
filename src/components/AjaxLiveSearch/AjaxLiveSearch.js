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
    jsonLoader.open("GET",'./data.json',true);
    console.log('Ajax Live Search Done');

    jsonLoader.onreadystatechange = function(){
      let count = 0;
      console.log(`Ajax Live Search ${count++}`);
      if(jsonLoader.readyState === 4 && jsonLoader.status == "200"){
        console.log('Ajax Live Search 4');
        let jsonText = jsonLoader.responseText;
        console.log(jsonLoader.responseText);
      }
    }
    console.log('Ajax Live Search Done 5');
    let jsonText = jsonLoader.responseText;
    console.log(jsonText);
    jsonLoader.send(null);


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
