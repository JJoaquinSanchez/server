import { Router, Request, Response } from "express";
import { Socie } from "../models/socie.models";

export const router = Router();


router.get('/socies', (req: Request, res: Response) => {
    
    let socies: Array<Socie> = [
        {
            nombre: 'Nahuel',
            apellido: 'Heredia',
            nick: "N4hu3l",
            edad: 22
        },
        {
            nombre: 'Irina',
            apellido: 'Davico',
            nick: "Irin4",
            edad: 21
        },
        {
            nombre: 'John',
            apellido: 'Maza',
            nick: "J0hny",
            edad: 20
        }
    ];
    res.json({
        ok: true,
        socies: socies
//        mensaje: "todo ok!"
    });
});
router.post('/registro', (req: Request, res: Response) => {

let nombre: string;
let apellido: string;

if (req.body.nombre && req.body.nombre !== ""){
    nombre = req.body.nombre
}
else{
    res.json({
        ok: false,
        mensaje:`Error: Falat el campo nombre`
    });
    nombre = "";
}

apellido = req.body.apellido?req.body.apellido:"";

res.json({
      ok: true,
        mensaje: `Bienvenido ${nombre} !!!`
    });    
});    