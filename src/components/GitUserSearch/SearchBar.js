import React from "react";
import MdAddCircle from 'react-icons/lib/md/add-circle'

// const tahoeResorts = [
const userList = [
  "Amborse Guo",
  "Angela",
  "Vivo",
  "Tiffany",
  "12312314",
  "gsefse",
  "e5532424rweq",
  "fef59",
  "vdfef0",
  "lll2324dwa",
  "svefe099"
]



// Home page component
export class Autocomplete extends React.Component {
  // get value() {
  //   const input = this.refs.inputUser.value
  //   console.log("input value" + input)
  //   return input
  // }
  //
  // set value(inputValue) {
  //   this.refs.inputUser.value = inputValue
  // }

  constructor(props){
    super(props)
  }

  componentDidMount(){
      // var input = this.refs.inputUser.value
      // console.log("input value" + input)
  }

  render() {
    console.log("Bugs here")
    const userList = this.props.options1.map(
      (opt, i) => <div key={i}><option>{opt.login}</option><img src={opt.avatar_url}/></div>
    )
    return (
      <div>
        {/*<input ref="inputUser"*/}
               {/*type="text"*/}
               {/*list="user-list" />*/}
        <datalist id="user-list">
          {/*{this.props.options1.map(*/}
            {/*(opt, i) =>*/}
              {/*<option key={i}>{opt}</option>)}*/}
          {userList}
        </datalist>
      </div>
    )
  }
}


export const SearchBar = ({ resort,
  date,
  powder,
  backcountry,
  onNewDay }) => {

  let _user, _date, _powder, _backcountry

  // const submit = (e) => {
  //   e.preventDefault()
  //   onNewDay({
  //     resort: _resort.value,
  //     date: _date.value,
  //     powder: _powder.checked,
  //     backcountry: _backcountry.checked
  //   })
  //   _resort.value = ''
  //   _date.value = ''
  //   _powder.checked = false
  //   _backcountry.checked = false
  //
  // }

  return (
    <form className="add-day-form">

      <label htmlFor="users">Git Search</label>
      <Autocomplete options1={userList}
                    ref={input => _user = input}/>

      {/*<label htmlFor="date">Date</label>*/}
      {/*<input id="date"*/}
             {/*type="date"*/}
             {/*required*/}
             {/*defaultValue={date}*/}
             {/*ref={input => _date = input}/>*/}

      {/*<div>*/}
        {/*<input id="powder"*/}
               {/*type="checkbox"*/}
               {/*defaultChecked={powder}*/}
               {/*ref="powder"*/}
               {/*ref={input => _powder = input}/>*/}
        {/*<label htmlFor="powder">Powder Day</label>*/}
      {/*</div>*/}

      {/*<div>*/}
        {/*<input id="backcountry"*/}
               {/*type="checkbox"*/}
               {/*defaultChecked={backcountry}*/}
               {/*ref="backcountry"*/}
               {/*ref={input => _backcountry = input}/>*/}
        {/*<label htmlFor="backcountry">*/}
          {/*Backcountry Day*/}
        {/*</label>*/}
      {/*</div>*/}
      {/*<button>Add Day</button>*/}
    </form>
  )
}

SearchBar.defaultProps = {
  resort: "Kirkwood",
  date: "2017-02-12",
  powder: true,
  backcountry: false
}


SearchBar.propTypes = {
  resort: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  powder: React.PropTypes.bool.isRequired,
  backcountry: React.PropTypes.bool.isRequired
}
