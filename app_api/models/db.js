var mongoose = require( 'mongoose');
var dbURl='mongodb://localhost/mekanbul';
mongoose.connect(dbURl);
mongoose.connection.on("connected",function(){
    console.log(dbURl+" adresine bağlandı");
});
mongoose.connection.on("error",function(){
    console.log("bağlantıda hata");
});
mongoose.connection.on("disconnected",function(){
    console.log(" bağlantı koptu");
});
process.on("SIGINT",function(){
    mongoose.connection.closed();
    console.log("Uygulama kapatıldı");
    process.exit(0);
})