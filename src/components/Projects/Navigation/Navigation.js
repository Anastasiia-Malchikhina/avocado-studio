import React from 'react';
import {Category} from '../../../Data/category';
import './Navigation.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Projects from '../Projects';
import MainHeading from '../../Heading/Heading';
import SubHeading from '../../Heading/SubHeading';
const Navigation = () => {

  const Navi =  Category.map(item => 
    <div className="navigation__item" key={item.url}>
      <NavLink exact activeClassName="_active" to={'/' + item.url}>
        {item.name}
      </NavLink>
    </div>
    );

    const SortProjects = Category.map((item, key) => 
      <Switch key={item.name}>
        <Route exact path='/'  >
          <Projects category={item.name}/>
        </Route>

        <Route exact path={'/' + item.url}  >
          <Projects category={item.name} />
        </Route>
        <Route exact path={'/portfolio' }  >
          <Projects category={item.name} />
        </Route>
      </Switch>
    );
  return (
    <Router >
      <MainHeading>portfolio</MainHeading>
      <SubHeading>owoce naszych działań</SubHeading>
      <div className="navigation">
        <div className="navigation__item">
          <NavLink exact activeClassName="_active" to='/'>
            Wszystkie
          </NavLink>
        </div>
        {Navi}
      </div>

   
      <div className="works">
        {SortProjects}
      </div>
      
        
     
    </Router>
  );
}

export default Navigation;