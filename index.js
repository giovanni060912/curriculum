const express = require('express')
const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

app.get ('/', (Request, responce) => {
    responce.render('home')
})
app.listen(8000, (err)=> {
 if(err){
     console.log("Nao Foi Fossivel Iniciar o Servidor do curriculum")
 }else{
     console.log("Servidor do curriculum rodando...")
 }    
})