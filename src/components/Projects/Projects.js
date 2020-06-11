import React from 'react';
import {Works} from '../../Data/work';
import './Projects.scss'




const Projects = (props) => {
  const portfolio = Works().map((item, key) => (
    
    
    (item.category.name === props.category ? 

        <div className="works__item">
          <h4 className="works__item--name">{item.name}</h4>
          <img src={item.image}/>
          <p className="works__item--desc">{item.desc}</p>
        </div>
        : ('')
    )
     )
   );
   return (
    portfolio
  )
}


export default Projects;