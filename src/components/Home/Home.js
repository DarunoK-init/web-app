import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import se2 from "./se2.png";
import watch from "./watch.png";
import fenix6s from "./fenix67.jpg";
import Mk2ii from "./Mk2.jpg";
import mk from "./Garmindescent.png";
import venu from "./venu.png";
import venu1 from "./venu1.jpg";
import fenix6b from "./fenix66.jpg"
import hermes from "./hermes.png"
import hermes1 from "./hermes.jpg"
import watch6 from "./apple-watch-6.jpg"
import se from "./apple-watch-se.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'




class Home extends Component {
    

constructor(props) {
super(props);

this.state = {
data:[],
redirectToReferrer: false,
userFeed1:'Apple Watch Hermes',
userFeed2:'Apple Watch SE',
userFeed3:'Apple Watch Series 6',
userFeed4:'Garmin fenix 6X',
userFeed5: 'Garmin descent MK',
userFeed6: 'Garmin Venu',
price1:25000,
price2:30000,
price3:12000,
price4:22000,
price5:42000,
price6:12000,
name:'',
};

this.getUserFeed = this.getUserFeed.bind(this);
this.addcart = this.addcart.bind(this);
this.feedUpdate1 = this.feedUpdate1.bind(this);
this.feedUpdate2 = this.feedUpdate2.bind(this);
this.feedUpdate3 = this.feedUpdate3.bind(this);
this.feedUpdate4 = this.feedUpdate4.bind(this);
this.feedUpdate5 = this.feedUpdate5.bind(this);
this.feedUpdate6 = this.feedUpdate6.bind(this);
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

//---------------------------Add Product----------------------------
addcart(){
    confirmAlert({
    title: 'ADD TO CART',
    message: 'Product have been added to your cart.',
    buttons: [{ label: 'CONTINUE'},{ label: 'GO TO CART',onClick: () => window.location.href = "/cart"}]});
}
feedUpdate1(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed1,price: this.state.price1};
    if (this.state.userFeed1) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}

feedUpdate2(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed2,price: this.state.price2 };
    if (this.state.userFeed2) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    });
    }
}
feedUpdate3(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed3,price: this.state.price3};
    if (this.state.userFeed5) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate4(e) {
  e.preventDefault();
  let data = JSON.parse(sessionStorage.getItem("userData"));
  let postData = { user_id: data.userData.user_id, feed: this.state.userFeed4,price: this.state.price4};
  if (this.state.userFeed5) {
  PostData('feedUpdate', postData).then((result) => {
  let responseJson = result;
  this.setState({data: responseJson.feedData});
  
  });
  }
}
feedUpdate5(e) {
  e.preventDefault();
  let data = JSON.parse(sessionStorage.getItem("userData"));
  let postData = { user_id: data.userData.user_id, feed: this.state.userFeed5,price: this.state.price5};
  if (this.state.userFeed5) {
  PostData('feedUpdate', postData).then((result) => {
  let responseJson = result;
  this.setState({data: responseJson.feedData});
  
  });
  }
}
feedUpdate6(e) {
  e.preventDefault();
  let data = JSON.parse(sessionStorage.getItem("userData"));
  let postData = { user_id: data.userData.user_id, feed: this.state.userFeed6,price: this.state.price6};
  if (this.state.userFeed6) {
  PostData('feedUpdate', postData).then((result) => {
  let responseJson = result;
  this.setState({data: responseJson.feedData});
  
  });
  }
}
//---------------------------------------------------------
getUserFeed() {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};

    if (data) {
    PostData('feed', postData).then((result) => {
    let responseJson = result;
    if(responseJson.feedData){
    this.setState({data: responseJson.feedData});
    
    }
    });
    }
}



logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
    return (<Redirect to={'/login'}/>)
}


return (
<div>
  <br/><br/><br/>


<Carousel style={{marginLeft:'200px',width:'70%',height:'100%'}}>
  <Carousel.Item>
  <Image style={{width:'100%',height:'400px'}} src={hermes} fluid />
  <br/>
    <Carousel.Caption>
      
    <Button href="/hermes" variant="outline-dark">Hermes</Button>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src={se2} style={{width:'100%',height:'400px'}} fluid/>
  <br/>
    <Carousel.Caption>
    <Button href="/watchse" variant="outline-dark">Apple Watch SE</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image style={{width:'100%',height:'400px'}} src={watch} fluid/>
  <br/>
    <Carousel.Caption>
    <Button href="/applewatch" variant="outline-dark">Apple Watch Series 6</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image style={{width:'100%',height:'400px'}} src={fenix6b} fluid/>
  <br/>
    <Carousel.Caption>
    <Button href="/Fenix" variant="outline-dark">Garmin Fenix 6X</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image style={{width:'100%',height:'400px'}} src={Mk2ii} fluid/>
  <br/>
    <Carousel.Caption>
    <Button href="/descent" variant="outline-dark">Garmin Mk</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image style={{width:'100%',height:'400px'}} src={venu} fluid/>
  <br/>
    <Carousel.Caption>
    <Button href="/venu" variant="outline-dark">Garmin Venu</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<br/>
<h1>
    <Badge pill variant="outline-primary" style={{marginLeft:'200px'}}>APPLE WATCH</Badge>
  </h1>
  <br/>
<Container>
  <Row>
    <Col xs><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={hermes1} />
  <Card.Body>
    <Card.Title>Apple Watch Hermes</Card.Title>
    <Card.Text>
    The iPhone X was Apple's flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition and 3D camera functionality, a glass body, and an A11 Bionic processor.
    </Card.Text>
    <form onSubmit={this.feedUpdate1} method="post">
    <Card.Title>Price : ฿ {this.state.price1}</Card.Title>
    <Button href="/hermes" variant="success" >Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
    </Card.Body>
</Card></Col>
    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={watch6} />
  <Card.Body>
    <Card.Title>Apple Watch Series 6</Card.Title>
    <Card.Text>
    The new Series 6 runs on a new Apple S5 chip inside: 64-bit dual-core S5 processor, up to 2x faster than S3 processor (includes W3 wireless chip). Apple Watch bands now include purchasable gold.
    </Card.Text>
    <form onSubmit={this.feedUpdate3} method="post">
    <Card.Title>Price : ฿ {this.state.price3}</Card.Title>
    <Button href="/applewatch" variant="success">Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
  </Card.Body>
</Card></Col>
    <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={se} />
  <Card.Body>
    <Card.Title>Apple Watch SE</Card.Title>
    <Card.Text>
    Apple in October introduced upgraded 11-inch and 12.9-inch iPad Pro models that feature edge-to-edge displays that do away with the Home button, slim bezels all the way around.
    </Card.Text>
    <form onSubmit={this.feedUpdate2} method="post">
    <Card.Title>Price : ฿ {this.state.price2}</Card.Title>
    <Button href="/watchse" variant="success">Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
<h2>
    <Badge pill variant="outline-primary" style={{marginLeft:'200px',marginTop:'20px'}}>GARMIN</Badge>
  </h2>
  <br/>
<Container>
  <Row>
    <Col xs><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={fenix6s} />
  <Card.Body>
    <Card.Title>Garmin Fenix 6X</Card.Title>
    <Card.Text>
    The iPhone X was Apple's flagship 10th anniversary iPhone featuring a 5.8-inch OLED display, facial recognition and 3D camera functionality, a glass body, and an A11 Bionic processor.
    </Card.Text>
    <form onSubmit={this.feedUpdate4} method="post">
    <Card.Title>Price : ฿ {this.state.price4}</Card.Title>
    <Button href="/fenix" variant="success" >Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
    </Card.Body>
</Card></Col>
    <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mk} />
  <Card.Body>
    <Card.Title>Garmin Descent MK</Card.Title>
    <Card.Text>
    The new Series 5 runs on a new Apple S5 chip inside: 64-bit dual-core S5 processor, up to 2x faster than S3 processor (includes W3 wireless chip). Apple Watch bands now include purchasable gold.
    </Card.Text>
    <form onSubmit={this.feedUpdate5} method="post">
    <Card.Title>Price : ฿ {this.state.price5}</Card.Title>
    <Button href="/descent" variant="success">Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
  </Card.Body>
</Card></Col>
    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={venu1} />
  <Card.Body>
    <Card.Title>Garmin Venu</Card.Title>
    <Card.Text>
    Apple in October introduced upgraded 11-inch and 12.9-inch iPad Pro models that feature edge-to-edge displays that do away with the Home button, slim bezels all the way around.
    </Card.Text>
    <form onSubmit={this.feedUpdate6} method="post">
    <Card.Title>Price : ฿ {this.state.price2}</Card.Title>
    <Button href="/venu" variant="success">Detail</Button>&nbsp;&nbsp;
    <Button variant="outline-primary" type="submit" onClick={this.addcart}>Add to Cart</Button>
    </form>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
</div>

);
}
}

export default Home;