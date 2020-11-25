import React, {Component} from 'react';
import './Home.css';
import '../../styles/react-confirm-alert.css';
import fenix6 from "./fenix-6-detail.jpg";
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class fenix extends Component {

constructor(props) {
super(props);

}
render() {


return (
<div>
<br/><br/><br/><br/>
<h1>
    <Badge pill variant="success">Fenix 6X PRO Solar</Badge>
  </h1><br/>

<img src={fenix6}  width="600px" height="350px"/>
<br/><br/>

<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      OVERVIEW
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      - SURF-READY FEATURES<br/>
      - VARIOUS SPORTS APPS<br/>
      - BODY BATTERY ENERGY MEASUREMENT<br/>
      - ON-SCREEN WORKOUT ANIMATION<br/>
      - SOLAR CHARGER<br/>
      - POWER MANAGER<br/>
      </Card.Body>
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
      <b>LENS MATERIAL:</b><br/>
      Power Glass™<br/><br/>

      <b>BEZEL MATERIAL</b>:<br/>
      stainless steel or Diamond-Like Carbon (DLC) coated titanium<br/><br/>

      <b>CASE MATERIAL</b>:<br/>fiber-reinforced polymer with metal rear cover<br/><br/>
      <b>QUICKFIT™ WATCH BAND COMPATIBLE</b>:<br/>
      included (22 mm)<br/><br/>

      <b>STRAP MATERIAL:</b><br/>
      silicone or titanium<br/><br/>

      <b>PHYSICAL SIZE:</b><br/>
      47 x 47 x 15.1 mm<br/>
      Fits wrists with the following circumference:<br/>
      Silicone band: 125-208 mm<br/>
      Leather band: 132-210 mm<br/>
      Fabric band: 132-210 mm<br/>
      Metal band: 132-215 mm<br/><br/>
      <b>DISPLAY SIZE:</b>	1.3” (33.02 mm) diameter<br/><br/>
      <b>DISPLAY RESOLUTION:</b>	260 x 260 pixels<br/><br/>
      <b>DISPLAY TYPE:</b>	sunlight-visible, transflective memory-in-pixel (MIP)<br/><br/>
      <b>WEIGHT:</b>
      Steel: 85 g (case only: 62 g)<br/>
      Titanium: 72 g (case only: 48 g)<br/><br/>

      <b>BATTERY LIFE:</b>	<br/>
      Smartwatch: Up to 14 days/16 days with solar*<br/>
      Battery Saver Watch Mode: Up to 48 days/80 days with solar*<br/>
      GPS: Up to 36 hours/40 hours with solar**<br/>
      GPS + Music: Up to 10 hours<br/>
      Max Battery GPS Mode: Up to 72 hours/93 hours with solar**<br/>
      Expedition GPS Activity: Up to 28 days/36 days with solar*<br/><br/>

      *Solar charging, assuming all-day wear with 3 hours per day outside in 50,000 lux conditions<br/>
      **Solar charging, assuming use in 50,000 lux conditions<br/><br/>

      WATER RATING	10 ATM<br/>
      MEMORY/HISTORY	32 GB<br/>
</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Sensors
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        -GPS	<br/>
        -GLONASS	<br/>
        -GALILEO	<br/>
        -GARMIN ELEVATE™ WRIST HEART RATE MONITOR	<br/>
        -BAROMETRIC ALTIMETER	<br/>
        -COMPASS	<br/>
        -GYROSCOPE	<br/>
        -ACCELEROMETER	<br/>
        -THERMOMETER	<br/>
        -PULSE OX BLOOD OXYGEN SATURATION MONITOR	: Yes (with Acclimation)
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Activity Tracking Features
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        -STEP COUNTER	<br/>
        -MOVE BAR (DISPLAYS ON DEVICE AFTER A PERIOD OF INACTIVITY; WALK FOR A COUPLE OF MINUTES TO RESET IT)	<br/>
        -AUTO GOAL (LEARNS YOUR ACTIVITY LEVEL AND ASSIGNS A DAILY STEP GOAL)	<br/>
        -CALORIES BURNED	<br/>
        -FLOORS CLIMBED	<br/>
        -DISTANCE TRAVELED	<br/>
        -INTENSITY MINUTES	<br/>
        -TRUEUP™	<br/>
        -MOVE IQ™<br/>
</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Tactical Features
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body><b>DUAL GRID COORDINATES</b></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      In the box
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        -fēnix 6 Pro Solar<br/>
        -Charging/data cable<br/>
        -Documentation<br/><br/>
        <b>Fenix 6 Pro Solar - Titanium Carbon Gray DLC with Titanium DLC Band Version Only</b><br/><br/>
        -fēnix 6 Pro Solar<br/>
        -Black silicone watch band<br/>
        -Charging/data cable<br/>
        -Documentation<br/>
</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion><br/>


<Button href="/home" variant="outline-primary">Back to Shop</Button>

</div>

);
}
}

export default fenix ;