const http = require("http") //biblioteca http do node

const port = 8080 //porta em que o servidor vai ser inciado

//Função usada para controlar as requests e responses do servidor
function ServerHandler(req, res){
    res.write("Olá planeta azul! Eu sou um servidor web funcional :D")
    res.end()
}

http.createServer(function (req, res){
    ServerHandler(req, res)
}).listen(port)
console.log(`Servidor iniciado com sucesso na porta ${port}`)