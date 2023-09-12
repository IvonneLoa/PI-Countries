const axios=require('axios') 
 module.exports=  async (model)=>{ // llenamos los datos en la base de datos 
     try { 
         const {data} = await axios('http://localhost:5000/countries')  // pedimos la info a la API     
         data.length>0 && data.forEach(async (element) => { 
             try { 
                 await model.create({ 
                     id:element.cca3,               
                     name:element.name.common,   
                     image:element.flags.png, 
                     continent:element.continents[0], 
                     capital:element.capital && element.capital[0] || null, 
                     subRegion:element.subregion, 
                     area:element.area, 
                     population:element.population, 
                 })             
             } catch (error) {
             } 
         }); 
     } catch (error) {
     } 
 }
 