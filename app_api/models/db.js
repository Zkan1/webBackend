var mongoose = require( 'mongoose');
var dbURI='mongodb+srv://zkan:1234@mekanbul.bg5mbw6.mongodb.net/?retryWrites=true&w=majority';
//var dbURI='mongodb://127.0.0.1/mekanbul'
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresine bağlandı");
});
mongoose.connection.on("error",function(){
    console.log("bağlantıda hata");
});
mongoose.connection.on("disconnected",function(){
    console.log(" bağlantı koptu");
});
//uygulama kapandığında kapat
process.on("SIGINT",function(){
    mongoose.connection.closed();
    console.log("Uygulama kapatıldı");
    process.exit(0);
})
require("./venue");