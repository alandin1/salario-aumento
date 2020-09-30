var sueldo = 1356;

if (sueldo >= 0 && sueldo <= 1000){
    sueldo = sueldo + (sueldo * .15)
} 
else if (sueldo >= 1001 && sueldo <= 1200){
    sueldo = sueldo + (sueldo * .12)
} 
else if (sueldo >= 1201 && sueldo <= 1400){
    sueldo = sueldo + (sueldo * .10)
} 
else if (sueldo >= 1401 && sueldo <= 1500){
    sueldo = sueldo + (sueldo * .08)
} 
else if (sueldo >= 1500){
    sueldo = sueldo + (sueldo * .05)
} 
console.log('Sueldo final con aumento:', sueldo)