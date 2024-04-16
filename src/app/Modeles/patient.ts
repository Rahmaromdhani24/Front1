import { Medecin } from "./medecin";
import { User } from "./user";

export interface Patient {
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
    antecedants : string ; 
    role :string ; 
    date_inscription : Date ; 
    date_naissance :Date;
    accessToken: string;
    medecin : Medecin
    admin : User
}