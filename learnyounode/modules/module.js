const fs = require('fs');

module.exports = function(ruta, ext, callback){
   fs.readdir(ruta, (err, list)=>{
       if(err){
            callback(err)
       }else{
            callback(null, list.filter(item => item.indexOf('.' + ext ) >= 0))
       }
    })
}
