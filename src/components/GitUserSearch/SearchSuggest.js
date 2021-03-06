/**
 * Created by Tibbers on 2/28/17.
 */

import React from 'react'
import AutoSuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match/index'
import parse from 'autosuggest-highlight/parse/index'


// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, props) => {
  // const escapedValue = escapeRegexCharacters(value.trim());
  // if (escapedValue === '') {
  //   return [];
  // }
  // const regex = new RegExp('^' + escapedValue, 'i');
  //
  // return languages.filter(language => regex.test(language.name));

  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  const arr = props.arrays;

  return inputLength === 0 ? [] : arr.filter(user =>
    user.login.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
// put suggestion.login to the input section
const getSuggestionValue = suggestion => suggestion.login;

// Use your imagination to render suggestions.
function renderSuggestion(suggestion, {query}) {

  const userLogin = suggestion.login;
  const userAvatar = suggestion.avatar_url;
  const userLink = suggestion.html_url;
  const matches = match(userLogin, query);
  const parts = parse(userLogin, matches);

  const spanStyle = {
    backgroundImage: 'url(' + userAvatar + ')',
    backgroundSize: '22% 110%'
  };



  return (

      <span className={'suggestion-content ' + suggestion.login} style={spanStyle} onClick={window.open('http://www.facebook.com')}>
        <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : null;
            return (
              <span className={className} key={index}>{part.text}</span>
            );
          })
        }
        </span>
      </span>

  )
};

export default class SearchSuggest extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange(event, { newValue, method }){
    event.preventDefault();

    console.log("newValue:");
    console.log(newValue);
    console.log("event:");
    console.log(event.type);
    console.log("method:");
    console.log(method);
    const act = event.type;
    const met = method;
    console.log(met)
    if(act == 'change' || act == 'click' || met == 'down' || met == 'up') {
      console.log("State updated");
      this.setState({
        value: newValue
      });
    }
    if(met == 'enter' || act == 'click'){
      console.log("Go to User Page");
      console.log(newValue);
      // window.open('www.facebook.com');
    }
  };

  // onKeyDown(){
  //   console.log("key down")
  // };

  onBlur(){
    console.log("blur");
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }){
    this.setState({
      suggestions: getSuggestions(value, this.props)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Type a User Name',
      value,
      onChange: this.onChange.bind(this),
      onBlur: this.onBlur.bind(this),
      // onKeyDown: this.onKeyDown.bind(this)
    };

    console.log('SearchSuggest 188: ');
    console.log(this.props.arrays);

    // Finally, render it!
    return (
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

// // const getSuggestionValue = suggestion => suggestion
// //
// // const renderSuggestion = suggestion => (
// //   <div>
// //     {suggestion.login}
// //   </div>
// // );
//
//
// // Imagine you have a list of languages that you'd like to autosuggest.
// const languages = [
//   {
//     name: 'C',
//     year: 1972
//   },
//   {
//     name: 'Elm',
//     year: 2012
//   }
// ];
//
// // Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;
//
//   return inputLength === 0 ? [] : languages.filter(lang =>
//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };
//
// // When suggestion is clicked, Autosuggest needs to populate the input element
// // based on the clicked suggestion. Teach Autosuggest how to calculate the
// // input value for every given suggestion.
// const getSuggestionValue = suggestion => suggestion.name;
//
// // Use your imagination to render suggestions.
// const renderSuggestion = suggestion => (
//   <div>
//     {suggestion.name}
//   </div>
// );
//
//
// export default class SearchSuggest extends React.Component{
//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     value: '',
//   //     suggestions: []
//   //   }
//   //
//   //   // this.onChange = this.onChange.bind(this);
//   //   // this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested(this);
//   //   // this.onSuggestionsClearRequested = this.onSuggestionsClearRequested(this);
//   // }
//   //
//   // onSuggestionsFetchRequested({value}){
//   //   this.setState({
//   //     suggestions: getSuggestionValue(value)
//   //   });
//   // };
//   //
//   // onSuggestionsClearRequested(){
//   //   this.setState({
//   //     suggestions: []
//   //   });
//   // };
//   //
//   // onChange(event, {newValue}){
//   //   this.setState({
//   //     value: newValue
//   //   });
//   // };
//   //
//   // render(){
//   //
//   //   const inputProps = {
//   //     value: this.props.arrays,
//   //     onChange: this.onChange
//   //   };
//   //
//   //   return (
//   //     <AutoSuggest
//   //       suggestions={this.props.arrays}
//   //       onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
//   //       onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
//   //       getSuggestionValue={getSuggestionValue}
//   //       renderSuggestion={renderSuggestion}
//   //       inputProps={inputProps}
//   //     />
//   //   );
//   // }
//
//   constructor() {
//     super();
//
//     // Autosuggest is a controlled component.
//     // This means that you need to provide an input value
//     // and an onChange handler that updates this value (see below).
//     // Suggestions also need to be provided to the Autosuggest,
//     // and they are initially empty because the Autosuggest is closed.
//     this.state = {
//       value: '',
//       suggestions: []
//     };
//
//     // this.onChange = this.onChange.bind(this);
//   }
//
//   onChange(event, newValue){
//     this.setState({
//       value: newValue
//     });
//   };
//
//   // Autosuggest will call this function every time you need to update suggestions.
//   // You already implemented this logic above, so just use it.
//   onSuggestionsFetchRequested({ value }){
//     this.setState({
//       suggestions: getSuggestions(value)
//     });
//   };
//
//   // Autosuggest will call this function every time you need to clear suggestions.
//   onSuggestionsClearRequested(){
//     this.setState({
//       suggestions: []
//     });
//   };
//
//   render() {
//     const { value, suggestions } = this.state;
//
//     // Autosuggest will pass through all these props to the input element.
//     const inputProps = {
//       placeholder: 'Type a programming language',
//       value,
//       onChange: this.onChange
//     };
//
//     // Finally, render it!
//     return (
//       <AutoSuggest
//         suggestions={suggestions}
//         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//         getSuggestionValue={getSuggestionValue}
//         renderSuggestion={renderSuggestion}
//         inputProps={inputProps}
//       />
//     );
//   }
//
//
// }
