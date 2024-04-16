import { Medecin } from "./medecin";
import { Specialite } from "./specialite";

export interface RendezVous{
    idRdv:number;
    Nom:string;
    email:string;
    telephone:number;
    departement:Specialite;
    medecin:Medecin;
    dateRdv:Date;
    cmntr:string;
    
}