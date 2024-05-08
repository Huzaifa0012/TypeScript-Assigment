let personName :string = '';

personName = prompt('What Is Your Name ?') || '';

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Your Work is Awesome`)
}
else{
    alert('Please Enter Your Name')
}