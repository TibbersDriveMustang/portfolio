/**
 * Created by Tibbers on 2/14/17.
 */
import React from "react"

class Api extends React.Component{
  constructor(props){
    super(props)
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("GET", 'https://api.github.com/users', false);
    xmlHttp.open("GET", 'https://api.github.com/search/users?q=aron', false);
    xmlHttp.send(null);

    this.state = {
      items: JSON.parse(xmlHttp.responseText),
      gitResponse: JSON.parse(xmlHttp.responseText),
      userDisplay: []
    };
  }

  componentWillMount(){


    console.log(this.state.items);
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
  render(){
    // const arrays = this.state.items;
    const arrays = this.state.gitResponse.items;
    return (
      <div>
        <h3>User Search Results: </h3>
        {
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
