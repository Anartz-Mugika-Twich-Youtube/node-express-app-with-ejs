import { Response } from "express";

/**
 * Renderizamos desde la ruta la plantlla que especificamos
 * desde parámetro
 * @param res Valor del Response para renderizar la plantilla
 * @param template Referencia del template seleccionado
 * @returns 
 */
export const renderTemplate = (res: Response, template: string = "index") => 
    res.render( template );