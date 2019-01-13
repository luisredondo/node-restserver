// ============
// Puerto
// ============

process.env.PORT = process.env.PORT || 3000;

// ============
// Entorno
// ============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============
// Vencimiento del token
// ============
// 60 segundos
// 60 minutos 
// 24 horas 
// 30 dias 
process.env.CADUCIDAD_TOKEN = '48h';

// ============
// SEED de autenticación
// ============
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============
// Base de datos
// ============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;

// ============
// Google Cliente ID
// ============

process.env.CLIENT_ID = process.env.CLIENT_ID || '65071189752-scg2iabcalof5ne2q0uo6j01au8k1b2u.apps.googleusercontent.com';