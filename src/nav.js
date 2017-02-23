/**
 * Created by Tibbers on 2/22/17.
 */
import React from 'react'
import {Nav, NavItem, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export class Navigation extends React.Component{

  constructor(props){
    super(props);
    // this.handleSelect = this.handleSelect.bind(this);
  }



  // handleSelect = () => {
  //
  // }



  render(){
    return (
      <Navbar collapseOnSelect={true} staticTop={true}>
        {/*<Navbar.Header>*/}
          {/*/!*<Navbar.Brand>*!/*/}
            {/*<LinkContainer to=""><NavItem>Home</NavItem></LinkContainer>*/}
          {/*/!*</Navbar.Brand>*!/*/}
          {/*<Navbar.Toggle />*/}
        {/*</Navbar.Header>*/}
        <Navbar.Collapse>
          <Nav bsStyle="pills" activeKey={3}>
            <LinkContainer to="Home">
              <NavItem eventKey={1}>
                Home
              </NavItem>
            </LinkContainer>

            <LinkContainer to="Api">
              <NavItem eventKey={2}>
                About
              </NavItem>
            </LinkContainer>

            <LinkContainer to="afterSchoolProgram">
              <NavItem eventKey={3}>
                After School Program
              </NavItem>
            </LinkContainer>

            <LinkContainer to="summerProgram">
              <NavItem eventKey={4}>
                Summer Program
              </NavItem>
            </LinkContainer>

            <LinkContainer to="weekendProgram">
              <NavItem eventKey={4}>
                Weekend Program
              </NavItem>
            </LinkContainer>

            <LinkContainer to="daySchool">
              <NavItem eventKey={5}>
                Day School
              </NavItem>
            </LinkContainer>

            <LinkContainer to="driversNeeded">
              <NavItem eventKey={6}>
                Drivers Needed
              </NavItem>
            </LinkContainer>

            <LinkContainer to="members">
              <NavItem eventKey={7}>
                Members
              </NavItem>
            </LinkContainer>

            <LinkContainer to="d3Sample">
              <NavItem eventKey={8}>
                Graph
              </NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
}




