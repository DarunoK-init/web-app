import React, {Component} from 'react';
import './Home.css';
import '../../styles/react-confirm-alert.css';
import SE from "./se2.png";
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class wacthse extends Component {

constructor(props) {
super(props);

}
render() {


return (
<div >
<br/><br/><br/><br/>
<h1>
    <Badge pill variant="success">Apple Watch SE</Badge>
  </h1><br/>
<img src={SE}  width="600px" height="200px"/>
<br/><br/>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      OVERVIEW
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- Music<br/>
      - Heartrate<br/>
      - OX pulse</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      SPECS
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
<b>NETWORK</b><br/>   
Technology GSM / HSPA / LTE<br/><br/>


<b>BODY</b><br/>	    
Dimensions 44 x 38 x 10.4 mm (1.73 x 1.50 x 0.41 in)<br/><br/>

<b>Weight</b><br/>	    
36.4 g (1.27 oz)<br/><br/>

<b>Build</b><br/>	    
Glass front, ceramic/sapphire crystal back, aluminum frame<br/><br/>




<b>DISPLAY</b><br/>	    
Retina LTPO OLED, 1000 nits (peak)<br/><br/>


<b>Size</b><br/>	    
1.78 inches, 10.0 cm2 (~60.0% screen-to-body ratio)<br/><br/>


<b>Resolution</b><br/>  
448 x 368 pixels (~326 ppi density)<br/><br/>


<b>PLATFORM</b><br/>	
OS watchOS 7.0, upgradable to 7.1<br/><br/>


<b>CPU</b><br/>	
Dual-core<br/><br/>


<b>GPU</b><br/>	
PowerVR<br/><br/>

<b>Internal</b><br/>	
32GB 1GB RAM<br/><br/>

<b>COMMS WLAN</b><br/>	
Wi-Fi 802.11 b/g/n<br/><br/>


<b>Bluetooth</b><br/>	
5.0, A2DP, LE<br/><br/>


<b>GPS</b><br/>	
Yes, with A-GPS, GLONASS<br/><br/>


<b>FEATURES</b><br/>	
Sensors	Accelerometer, gyro, heart rate (2nd gen), barometer, always-on altimeter, compass<br/><br/>





<b>MISC</b><br/>	
Colors	Silver, Gold, Space Gray<br/><br/>


<b>Models</b><br/>	
A2353, A2354, A2355, A2356, A2351, A2352<br/><br/>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Chip
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><b>Chipset</b><br/>	
Apple S5<br/><br/></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      BATTERY
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <b>BATTERY Type</b><br/>	
        Li-Ion, non-removable<br/><br/>


        <b>Charging</b><br/>	
        Wireless charging<br/><br/>


        <b>Stand-by</b><br/>	
        Up to 18 h (mixed usage)<br/><br/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Cellular 
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>- <b>SIM</b><br/>	    
eSIM  50m water resistant<br/><br/></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<br/>
<Button href="/home" variant="outline-primary">Back to Shop</Button>
</div>

);
}
}

export default wacthse;