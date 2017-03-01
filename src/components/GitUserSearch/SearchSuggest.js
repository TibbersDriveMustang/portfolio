/**
 * Created by Tibbers on 2/28/17.
 */

import React from 'react'
import AutoSuggest from 'react-autosuggest'


const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C++',
    year: 1983
  },
  {
    name: 'Clojure',
    year: 2007
  },
  {
    name: 'Elm',
    year: 2012
  },
  {
    name: 'Go',
    year: 2009
  },
  {
    name: 'Haskell',
    year: 1990
  },
  {
    name: 'Java',
    year: 1995
  },
  {
    name: 'Javascript',
    year: 1995
  },
  {
    name: 'Perl',
    year: 1987
  },
  {
    name: 'PHP',
    year: 1995
  },
  {
    name: 'Python',
    year: 1991
  },
  {
    name: 'Ruby',
    year: 1995
  },
  {
    name: 'Scala',
    year: 2003
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <img />{suggestion.name}
  </div>
);

export default class SearchSuggest extends React.Component {
  constructor() {
    super();

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

  onChange(event, { newValue }){
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }){
    this.setState({
      suggestions: getSuggestions(value)
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
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange.bind(this),
      
    };

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
