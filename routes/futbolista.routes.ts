import { Request, Response, Router } from "express";
import { Futbolista } from "../models/futbolista.model";

const futbolistaRoutes = Router();

futbolistaRoutes.get('/',async(req:Request,res:Response)=>{

    const futbolista = await Futbolista.find();

    return res.json({
        ok:true,
        futbolista
    })

});

futbolistaRoutes.get('/paging',async(req:Request,res:Response)=>{

    let perPage = 3;
    let page = Number(req.query.page) || 1 ;
    let skip = page-1;
    skip=skip*perPage;

    const futbolista = await Futbolista.find().skip(skip).limit(perPage);

    return res.json({
        ok:true,
        futbolista
    })

});


futbolistaRoutes.post('/',(req:Request,res:Response)=>{

    const body = req.body;
    const futbolista = {
        Nombre:body.Nombre,
        Equipo:body.Equipo,
        Posicion:body.Posicion,
        Imagen:body.Imagen
    }
    Futbolista.create(futbolista).then(futbolistaDb =>{

        return res.json({
            ok:true,
            futbolistaDb
        })

    }).catch(err=>{
        return res.json({
            ok:false,
            err
        })


    })
        
});

futbolistaRoutes.put('/:id', (req:Request, res:Response)=>{
    
    const futbolistaId = req.params.id;

    const body =req.body;

    const futbolista = {
        Nombre:body.Nombre,
        Equipo:body.Equipo,
        Posicion:body.Posicion,
        Imagen:body.Imagen
    }

    Futbolista.findByIdAndUpdate(futbolistaId,futbolista).then (futbolistaDB=>{

        return res.json({
            ok:true,
            futbolistaDB
        })

    })  


    return res.json({
        ok:true,
        msj:"Put ok"
            
    })
})

futbolistaRoutes.delete('/', async(req:Request, res:Response)=>{
    
    const futbolistaId = req.query.id;

        if(!futbolistaId){

            return res.json({

                ok:false,
                msj:"El registro solicitado no existe"
                    
            })

        }

       Futbolista.findByIdAndDelete(futbolistaId).then(futbolista=>{

            return res.json({
                ok:true,
                msj:"Registro eliminado"
                    
            })

        }).catch(err=>{
            return res.json({
                ok:false,
                msj:"Registro eliminado"
                    
            })

        })     
    
     

})

export default futbolistaRoutes;   