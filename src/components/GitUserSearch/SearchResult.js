/**
 * Created by Tibbers on 2/27/17.
 */
import React from 'react'


function ResultList(props){
  const arrays = props.arrays;
  console.log("Test: props.arrays")
  console.log(props.arrays);
  if(arrays != null){
    const divArr = arrays.map(
      (data) => <div key={data.login}>
        <a href={data.html_url} target="_blank">
          <img src={data.avatar_url} style={{width: 30 , height: 30}}/>
          {data.login}
        </a>
      </div>
    );

    return (
      <div>
        <h6>GITHUB USERS</h6>
        {divArr}
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
    console.log('this.props: ');
    console.log(this.props.arrays);

    return (
      <ResultList arrays = {this.props.arrays}/>
    )
  }
}
