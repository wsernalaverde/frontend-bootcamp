const m = require('./module');

m(process.argv[2], process.argv[3], (err, data)=>{
    if(err){
        console.log(err)
    }else{
        data.map(item => console.log(item));
    }
})