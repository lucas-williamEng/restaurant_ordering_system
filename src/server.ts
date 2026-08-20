import http from "node:http";

const port = 3000;

const routes = {
    "/": {
        mesage: "Restaurant Ordering System - API",
    },
    "/categorias": {
        message : "Lista de categorias."

    },
    "/products": {
        message : "Lista de produtos."
    }
}

const server = http.createServer((req, res) => {

    const response = routes[req.url as keyof typeof routes];
       
    if(!response){
        res.writeHead(404,{
            "content-type": "aplication/json",
        });

        return res.end(
            JSON.stringify({
                message: "Roude not found",
            })

        );
    }

    res.writeHead(200, {
        "content-type": "application/json",
    });
    res.end(JSON.stringify(response));
});

server.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`); // Fechou a crase e o parêntese aqui
});