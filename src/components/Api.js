/**
 * Created by Tibbers on 2/14/17.
 */
import React from "react"
import {userSearch as UserSearch}  from './Home'

class Api extends React.Component{

  constructor(props){
    super(props)
    // var xmlHttp = new XMLHttpRequest();
    this.state = {
      gitResponse: {},
      xmlHttp: new XMLHttpRequest()
    }
  }

  componentWillMount(){

    // this.setState({
    //   items: json
    // });
    // console.log(this.state.items.length);
    // for(var i = 0; i < this.state.items.length; i++){
    //   this.state.userDisplay.push(
    //     <div className="userDisplay">
    //       {this.state.items[i].login}
    //     </div>
    //   )
    // }
    // console.log(this.state.userDisplay);

  }

  componentDidMount(){
    this.state.xmlHttp.open("GET", 'https://api.github.com/search/users?q=aron', false);
    this.state.xmlHttp.send(null);
    this.setState({
      gitResponse: JSON.parse(this.state.xmlHttp.responseText)
    });
  }

  render(){
    // const arrays = this.state.items;
    console.log("Mounting");
    var arrays = null;
    if(this.state.gitResponse) {
      arrays = this.state.gitResponse.items;
    }
    return (
      <div>
        <UserSearch />
        <h3>User Search Results: </h3>
        {
          arrays != null
          &&
          arrays.map(
            (data) =>
              <div key={data.login}>
                <a href={data.html_url} target="_blank">
                <img src={data.avatar_url} style={{width: 30 , height: 30}}/>
                {data.login}
                </a>
              </div>
          )
        }
      </div>
    );
  }
}

export default Api
