import React from 'react';
import HornedBeasts from './HornedBeast';

// import pic11 from "./pic11.jpg"
// import pic22 from "./pic22.jpg"



class Main extends React.Component {
    render(){
        return(
            <>
            {/* <HornedBeasts
           
            img src={pic11} alt="goat" title ="goat"className='image' 
            /> */}
      < HornedBeasts image="https://shop.catholic.com/product_images/uploaded_images/unicorn-rev.jpg" alt="Mythical Creatures" title ="Mythical Creatures" className='image' description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores pariatur deserunt dolores odio. Placeat, at assumenda beatae quas quisquam debitis tempore'} />

           < HornedBeasts image="https://coolgenerator.com/Pic/creatures/15.png" alt="Mythical Creatures" title ="Mythical Creatures" className='image' 
             description  = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum asperiores pariatur deserunt dolores odio. Placeat, at assumenda beatae quas quisquam debitis tempore'}/> 
        
            
            </>
        )
    }
}

export default Main;