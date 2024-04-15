const http = require("http");
const request = require("request");

const server = http.createServer(async (req, response) => {
    if (req.url == "/") {

        request(`http://pokeapi.co/api/v2/pokemon/2/`, (err, res, body) => {

            console.log(JSON.parse(body));
            
        });

        return response.end("Servidor iniciado");
    }
});

server.listen("8080", () => {
    console.log("Servidor iniciado na porta 8080");
})
