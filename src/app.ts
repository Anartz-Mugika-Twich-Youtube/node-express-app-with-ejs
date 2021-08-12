import routerPrincipal from "./routes/root-router";
import Server from "./server";

const server = new Server();

// Ruta para la página inicial
server.app.use("/", routerPrincipal);

server.listen((port: number)=> console.log(`http://localhost:${port}/`));
