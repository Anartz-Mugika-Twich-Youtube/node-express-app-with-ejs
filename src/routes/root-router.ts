import { Router, Request, Response} from "express";
import { renderTemplate } from "./../lib/utils";

const routerPrincipal = Router();

// Definimos las rutas teniendo en cuenta la raíz
routerPrincipal.get( "/", ( _: Request, res: Response ) => {
    renderTemplate(res, "index");
} );

export default routerPrincipal;