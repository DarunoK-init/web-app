import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
constructor(){
super();
this.state={
appName: "Shop",
home: false
}
}
render() {
return (

<div className="bodys" >
<Header name={this.state.appName}/>
<Routes name={this.state.appName}/>
<hr/>
<Footer/>
</div>

);
}
}
export default App;