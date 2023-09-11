import React from 'react' 
import { useSelector } from 'react-redux'; 
import Activity from '../Activity/Activity.jsx'; 
import { Link } from 'react-router-dom';
import s from "./Activities.module.css";
const Activities = () => { 
     //hooks 
const activities= useSelector(state => state.activities)
// treaemos el estado global activities 
  
  return (        
    <div className={s.div}> 
      <h1 className={s.h1}>Tourist Activities</h1> 
        <Link to='/home'> 
            <button className={s.but}>Back</button> 
        </Link> 
             { 
              activities.length > 0 && 
              activities.map((activity) => 
              <Activity 
              key={activity.id} 
              name={activity.name} 
              duration={activity.duration} 
              difficulty={activity.difficulty} 
              season={activity.season} 
              Countries={activity.Countries} 
      />) 
  
             } 
  
         </div> 
     ); 
 } 
  
 export default Activities;