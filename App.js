import React from 'react';
import ReactDOM from 'react-dom/client';
import image from './img/gvm.png'

// React Element
const HeroCopy = () => (
    <div id='container'>
        <h1 className='herocopy'> functional component </h1>
        <img src={image} alt='gvm' className='imgRight' width='250' height='250' ></img>
    </div>
);

// Funtional component 
const HeroPara = () => (
    <p className='paraComponent'> 
        This is the first functional component along with the component composition 
    </p>
);

const HeroComponent = () => (
    <div>
        <HeroCopy />
        <HeroPara />
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeroComponent />);