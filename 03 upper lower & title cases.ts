let personName:string = '';

personName = prompt('What Is Your Name?') || '';

let lowercase : string = personName.toLowerCase();
let uppercase : string = personName.toUpperCase();
let titlecase : string = personName.split(' ').map(word => word.charAt(0).toUpperCase() 
+ word.slice(1).toLowerCase()).join(' ');

if( personName !== null && personName !== ''){
    alert(`Hello ${personName}, Such A Great Leader In:
    lowecase: ${lowercase}
    uppercase: ${uppercase}
    titlecase: ${titlecase}
    `)
}
else{
    alert('Please Enter Your Name')
}