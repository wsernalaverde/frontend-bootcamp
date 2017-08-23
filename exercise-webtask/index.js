module.exports = function(context, cb) {
  
var api_key = context.apiKey;
var domain = context.domainMailgun;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  var data = {
          from: 'wsernalaverde@gmail.com',
          to: 'wsernalaverde@gmail.com',
          subject: 'Email enviado desde hoja de vida',
          text: `Nombre: ${context.data.name}
          Email: ${context.data.email}
          Mensaje: ${context.data.subject}
          `
          };
          
    mailgun.messages().send(data, function (error, body) {
        cb(null, { data: body })
    });
    
}