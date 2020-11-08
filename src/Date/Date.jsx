import React from 'react'


let dateObj = new Date();  
let options = { weekday: "long",  
                year: "numeric",  
                month: "short",  
                day: "numeric" };  


function DateDayly () {
    return <div>
{dateObj.toLocaleDateString("uk-UA", options)}
    </div>
   
  }
  
  

export default DateDayly 
