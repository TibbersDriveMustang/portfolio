/**
 * Created by Tibbers on 2/27/17.
 */
import React from 'react'


function ResultList(props){
  const arrays = props.arrays;
  if(arrays != null){
    return (
      <div>
        arrays.map(
        (data) => <div key={data.login}>
        <a href={data.html_url} target="_blank"/>
        <img src={data.avatar_url} style={{width: 30 , height: 30}}/>
        {data.login}
      </div>
        )
      </div>
    )
  }
  else{
    return <h3>SearchResult.js : Array is null</h3>
  }
}

export default class SearchResult extends React.Component{

  constructor(props){
    super(props);
    // this.ResultList = this.ResultList.bind(this);
  }

  render(){
    return (
      <ResultList props = {this.props}/>
    )
  }
}
