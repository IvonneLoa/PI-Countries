export default function validation({name, difficulty, duration, season, countries}){ 
    const regexName=/^[^\d]+$/; 
    const errors={} 
 
    if(!name) errors.name = "Required field" 
    else { 
        if(!regexName.test(name)) errors.name = "This field cannot have numbers"
        else if(name.length<3) errors.name = "The name must be at least 3 characters"
    } 
 
    if(!difficulty) errors.difficulty = "Required field" 
 
    if(!duration) errors.duration = "Required field"
    else if(duration > 72) errors.duration = "The duration cannot be longer than 72 hours" 
    else if(duration < 1)  errors.duration = "The duration cannot be less than 1 hour" 
 
    if(!season) errors.season = "Required field"
 
    if(countries.length===0) errors.countries = "Required field"
 
    return errors;
}