import { Specialite } from "./specialite";
import { User } from "./user";

export interface Medecin {
    id: number;
    cin : number;
    nom :string ; 
    prenom :string ; 
    gender : string ; 
    username :string ; 
    email : string ; 
    password : string ; 
    image : string ;
    telephone : number ;
    role :string ; 
    date_inscription : Date ; 
    accessToken: string;
    specialite : Specialite;
    admin : User
}
