import React, { Component } from 'react';

import beach2 from './media/beach2.jpg'
import aisle from './media/aisleWedding.jpg'
import wedding from './media/wedding2.jpg'
import logoname from './media/logo_name.png'
import menu from './media/menu.png'

import logo2 from './media/flowerlogo2.png'

import logoCircle from './media/flower_circle.png'


import './home.css'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img   className="homelogo" src={logoCircle}/>
                <img className="logoname" src={logoname}/>
                <img  className="image1"  src={beach2}/>

        

                <br/>
                <div className="container"> 
                    
                <h2 className="helloW">At NB Flowers we create stunning floral displays for events, parties, corporate clients, weddings and private residencies. Our approach to what we do is an expression of our deep love of flowers. Their ever-changing nature as we move through the seasons offers
                 endless fresh inspiration for designs full of beauty, fun and drama.
                 </h2>
                </div>
                <br/>
                {/* <img src={aisle}/> */}

                     <div class="pic-wrapper">
                    <figure class="pic-1"></figure>
                    <figure class="pic-2"></figure>
                    <figure class="pic-3"></figure>
                    <figure class="pic-4"></figure>
                </div>
            </div>
               

        
     
            
          
             
           
           
         );
    }
}
 
export default Home;






// <img  className="homelogo"  src={logoCircle}/>
// <img  className="logoname"  src={logoname}/>