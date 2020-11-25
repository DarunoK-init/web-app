import React, { Component } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
        data:[],
        redirectToReferrer: false,
        name:'',
        };
        this.getUserFeed = this.getUserFeed.bind(this);
        this.logout = this.logout.bind(this);
        }
        
        componentWillMount() {
        
        if(sessionStorage.getItem("userData")){
        this.getUserFeed();
        }
        
        else{
        this.setState({redirectToReferrer: true});
        }
        
        }
        getUserFeed() {

            let data = JSON.parse(sessionStorage.getItem("userData"));
            this.setState({name:data.userData.name});
        }
        logout(){
            sessionStorage.setItem("userData",'');
            sessionStorage.clear();
            window.location.href = "/login";
            }
    
render() {
return (
/* <Navbar bg="dark" variant="dark" expand="lg" fixed="top" >
  <nav class="navbar navbar-expand-sm " style={{width:'100%'}}>
    <a class="navbar-brand" href="/" style={{fontSize:'20px'}}>TKD's Gadgets</a>
    <ul class="navbar-nav ">
            <li class="nav-item active">
                <a class="nav-link" href="/home">Shop</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="//codeply.com">Codeply</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
      <div class="navbar-brand" >
        <NavDropdown  title={this.state.name} id="basic-nav-dropdown"  >
        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </div>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>

        
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
            <li class="nav-item">
                <a class="nav-link" href="#">Right</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Right</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Right</a>
            </li>
        </ul>
    </div>
</nav>
</Navbar> */
 <div>
<Navbar bg="dark" variant="dark" expand="lg" fixed="top"  >
  <Navbar.Brand href="/">TKD's Gadgets</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Shop</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/order">My Order</Nav.Link>
      <NavDropdown title={this.state.name} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</div> 
);
}
}
export default Header;