document.addEventListener('DOMContentLoaded', () =>{ 
 const form = document.getElementById('form-contacto');

 form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;

    const url = `https://wt-eea20b749793fa73fffb24558f3360b6-0.run.webtask.io/form-cv`

    fetch(url, {  
    method: 'post',  
    headers: {  
      "Content-type": "application/json"  
    },  
    body: {
        'name': name,
        'email': email,
        'subject':subject
    }
    })
    .then(function (data) {  
        console.log('Request succeeded with JSON response', data);  
    })  
    .catch(function (error) {  
        console.log('Request failed', error);  
    });
 })

});