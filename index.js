const express = require('express');
const path = require('path');
const app = express();

// Se define  la ruta para los archivos estaticos 
app.use(express.static(path.join(__dirname)));

// Ruta para recibir el archivo index.html

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/ceviches',(req,res)=>{

    res.sendFile(path.join(__dirname, 'ceviche.html'))

})

app.get('/chicharrones',(req,res)=>{

    res.sendFile(path.join(__dirname, 'chicharron.html'))

})
app.get('/langostas',(req,res)=>{

    res.sendFile(path.join(__dirname, 'langostas.html'))

})

const PORT = "https://siriusboss.shop/";


app.listen(PORT,()=>{
    console.log('servidor corriendo en el puerto: ' + PORT)
})