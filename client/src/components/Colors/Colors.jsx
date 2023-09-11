import React from 'react'; 
 import s from './Colors.module.css';
  
 const CustomCard = ({ text, onClose,color }) => { 
  
     return ( 
         <div className={color==='green' ? s.customCardGreen : s.customCardRed}> 
         <div className={s.cardContent}> 
             <p>{text}</p> 
             <button onClick={onClose}>Cerrar</button> 
         </div> 
         </div> 
     ); 
 } 
  
 export default CustomCard;