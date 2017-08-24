module.exports = function(context, cb) {
  
var api_key = context.secrets.apiKey;
var domain = context.secrets.domainMailgun;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  var data = {
          from: 'wsernalaverde@gmail.com',
          to: 'wsernalaverde@gmail.com',
          subject: 'Email enviado desde hoja de vida',
          text: `Te han enviado un correo desde la página de tu hoja de vida, los datos de la persona son:
          
Nombre: ${context.data.name}
Email: ${context.data.email}
Mensaje: ${context.data.subject}

Este correo fue enviado desde https://wsernalaverde.github.io/frontend-bootcamp/.
          `
          };
          
    mailgun.messages().send(data, function (error, body) {
        cb(null, { data: body })
    });
    
}