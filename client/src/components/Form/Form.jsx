import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getActivities } from '../../redux/actions';
import s from '../Form/Form.module.css';
import validation from './validation';
import { Link, useLocation } from 'react-router-dom';
import Colors from '../Colors/Colors.jsx'; 
  
const Form = () => { 
     //hooks 
const countries = useSelector(state => state.countriesOrigin)
// accedemos a la variable global, a la copia q esta sin modificar 
countries.sort((a,b)=>a.name.charCodeAt()- b.name.charCodeAt()) // ordenamos de forma alfabetica 
const dispatch = useDispatch();
const location = useLocation(); 
const queryParams = new URLSearchParams(location.search); // para obtener las opciones de la url '/activities?id=abc 
const idDetail = queryParams.get('id'); 
  
//estados 
const [form, setForm] = useState({ 
  name: "", 
  difficulty: "", 
  duration: "", 
  season: "", 
  countries: idDetail ? [idDetail] : [] , // para la tabla intermedia, debe contener los id de los paises escogidos         
  optionsSelected:idDetail ? [countries.find((country)=>country.id===idDetail)] : [] // para mostar las imagenes de las banderas 
  }) 
const [errors,setErrrors]= useState({})
// manejo de errores 
const [selectedCountry, setSelectedCountry] = useState('');
// nos sirve para reiniciar el select cada q elegimos un pais 
const [showCustomCard, setShowCustomCard]=useState({
  // para mostrar la tarjeta personalizada 
    text:'', 
    color:'' 
})  
  
useEffect(()=>{         
setErrrors(validation({...form}))
// me sirve para actualizar los errores en la parte de validation, para enviar un [] cuando eliminemos todas las banderas y tmbn deshabilito el boton apenas se monta el componente 
setSelectedCountry('') // para volver a "selected country" en mi select de html 
},[form]) 
  
//handlers 
const onSubmit = async (e) => {
  //enviaremos por body a la URL del back 
  e.preventDefault();         
  const activity = await dispatch(postActivity(form))  
  dispatch(getActivities())
  // hasta q no se completa el post no obtengo            
  if(!activity.payload.error) { // si no nos llega error             
  setShowCustomCard({ 
    ...showCustomCard, 
    text:`La actividad turistica ${form.name} fue creada exitosamente`, 
    color:'green' 
    }) 
    }else { 
    setShowCustomCard({ 
    ...showCustomCard, 
    text:activity.payload.error, 
    color:'red' 
    }) 
    }                       
    e.target.reset()
    // limpia el form cuando enviemos la info  
     } 
const handlerInputsChange = (e) => { 
//manejador de inputs 
const property = e.target.name; 
const value = e.target.value; 
    setErrrors(validation({...form,[property]:value})) // validamos 
    setForm({ 
      ...form, 
      [property]: value 
    }) 
 } 
const handlerSelectChange = (e) => {
// para la opcion de multiples paises 
const value = e.target.value;  
  setSelectedCountry(value)        
    if(value) { // si la opción es "selected countries" no entra aquí 
const dataCountries = countries.find((country)=>country.id===value) //filtramos por id, para tener los datos del pais elegido 
    if(form.optionsSelected.findIndex((elem)=>elem.id===e.target.value)===-1) { // si no existe ya como pais seleccionado 
      setForm({ 
        ...form, 
        optionsSelected:[...form.optionsSelected,dataCountries], 
        countries:[...form.countries,value] // guardamos el Id q esta en value de cada option 
        })                
      } else{ 
        alert("Ya elegiste este país")                 
      }   
     } 
     } 
const handlerRemoveCountry =(id)=>{         
const newOptionsSelected=form.optionsSelected.filter((elem)=>elem.id!==id)
// quitamos del array el que el user presione la X(con el id) 
const countriesResult= form.countries.filter((elem)=>elem!==id) // quitamos tambien de los id guardados en countries 
    setForm({ 
      ...form, 
      optionsSelected:newOptionsSelected, 
      countries:countriesResult 
    })         
  } 
const handlerCloseCard =()=>{ 
    setShowCustomCard(false) 
    if(showCustomCard.color === "green") {
      setForm({  // limpiamos el estado 
        name: "", 
        difficulty: "", 
        duration: "", 
        season: "", 
        countries: [],       
        optionsSelected:[]  
    }) 
    }
   } 
  
return ( 
    <div className={s.containerForm}>
        <h1 className={s.tittle}>Create Tourist Activity</h1>
<form onSubmit={onSubmit}> 
    <label>Name of the tourist activity: </label> 
        <input className={s.input}
          name='name' 
          placeholder='type here' 
          type='text' 
          onChange={handlerInputsChange} 
          /> 
    <p>{errors.name}</p> 
    <label>Difficulty: </label> 
      <select className={s.input} name='difficulty' onChange={handlerInputsChange}> 
        <option value=''>Select Difficulty</option> 
        <option value='1'>1</option> 
        <option value='2'>2</option> 
        <option value='3'>3</option> 
        <option value='4'>4</option> 
        <option value='5'>5</option> 
      </select> 
    <p>{errors.difficulty}</p> 
      <label>Duration in hours: </label> 
        <input className={s.input}
            name='duration' 
            placeholder='type here' 
            type='number' 
            onChange={handlerInputsChange} 
      /> 
    <p>{errors.duration}</p> 
      <label>Season: </label> 
        <select className={s.input} onChange={handlerInputsChange} name='season'> 
          <option value=''>Select season</option> 
          <option value='Winter'>Winter</option> 
          <option value='Summer'>Summer</option> 
          <option value='Autumn'>Autumn</option> 
          <option value='Spring'>Spring</option> 
        </select> 
    <p>{errors.season}</p> 
      <label>Countries:</label> 
        <select className={s.input}
            value={selectedCountry}                    
            onChange={handlerSelectChange} 
            name='countries'>                 
          <option value=''>Select Countries</option> 
          {   //mapeamos el arreglo de paises para obtener el nombre en los select 
          countries.map((country) => <option key={country.id} value={country.id}> 
          {country.name}</option> 
          )} 
        </select> 
    <p>{errors.countries}</p>                
  
<div className={s.containerFlags}>  
{
//muestra las banderas                                        
form.optionsSelected.length> 0 ? (
  //si tiene datos de un pais seleccionado por el user 
form.optionsSelected.map((country)=>( 
<div className={s.flags} key={country.id}> 
  <img src={country.image}
       alt=''/> 
  <button  
      onClick={()=>handlerRemoveCountry(country.id)} 
      className={s.buttonX}>❌</button>                        
</div>))  
) :<div className={s.pl}>Select Country</div> 
}  
</div> 
    <button className={s.submit} type='submit' disabled={Object.keys(errors).length>0}>Create</button> 
</form> 
{ 
showCustomCard.text && <Colors text={showCustomCard.text} onClose={handlerCloseCard} color={showCustomCard.color}/> 
}  
<Link to='/home'> 
  <button className={s.submit}>Back</button> 
</Link>
</div> 
  ); 
 } 
  
 export default Form;