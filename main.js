var sueldo = 777;

if (sueldo >= 0 && sueldo <= 1000){
    sueldo = sueldo + (sueldo * .15)
} 
else if (sueldo >= 1001 && sueldo <= 1200){
    sueldo = sueldo + (sueldo * .12)
} 
console.log('Sueldo final:', sueldo)