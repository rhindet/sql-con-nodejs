
 var mysql = require ('mysql');

var conexion = mysql.createConnection({
 host:'localhost',
database:'personas',
user:'root',
password:''
});
conexion.connect(function(error){
    if(error){
       throw error;
  }else{
       console.log('CONEXION EXITOSA');
   }
 });

 conexion.query('SELECT * from personastable',function(error,results,fields){
   if(error)
    throw error;
    results.forEach(result => {
        console.log(result);
        
  });

})

    
    

conexion.end();