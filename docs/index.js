document.addEventListener('DOMContentLoaded', () =>{ 
 const form = document.getElementById('form-contacto');

 form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;

    console.log('Datos capturados \n Nombre: ' + name + '\n Email: ' + email + '\n Asunto: ' + subject);
 })

});