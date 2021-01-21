//===========================
//   Puerto
//===========================

process.env.PORT = process.env.PORT || 3000;

//===========================
//    Entorno
//===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===========================
//   Base de Datos
//===========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/javiDB';
} else {
    urlDB = 'mongodb+srv://strider:javitomejafer82@cluster0.trvgu.mongodb.net/javiDB';
}

process.env.URLDB = urlDB;