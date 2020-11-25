import React, {Component} from 'react';
import './Home.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

class Welcome extends Component {
    
render() {
return (
<div className="bg" style={{width:'126%'}}>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1 style={{marginLeft:'10%',color:'white',marginBottom:'10px',marginTop:'105px'}}>
    Smart Watch,<br/>
    Part of Mylife
  </h1>
<div className="d-flex flex-column" >
  <div size="lg" style={{marginLeft:'100px'}}>
    <Button  class="btn btn-warning " variant="success" href="/login" style={{marginRight:'5px',width:'200px'}} >Login</Button>
    <Button  class="btn btn-primary" href="/signup" style={{width:'200px'}}>Signup</Button>
  </div>

  </div>
</div>
);
}
}
export default Welcome;