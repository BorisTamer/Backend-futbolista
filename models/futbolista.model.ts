import { Document, model, Schema } from "mongoose";

const futbolistaSchema = new Schema({
    Nombre:{

        type : String,
        require:[true,'El nombre es requerido']
    },
    Equipo:{
        type : String,
    },
    Posicion:{
        type : String,
    },
    Imagen:{
        type: String,
        require:[true,'La imagen es requerida']
    }
});

interface IFutbolista extends Document{
    Nombre:string;
    Equipo:string;
    Posicion:string;
    Imagen:string
}
export const Futbolista = model <IFutbolista>('Futbolista',futbolistaSchema);


