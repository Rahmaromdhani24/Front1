import { Patient } from "./patient";

export interface DossierMedical{
    idDossier:number;
    date_creation_dossier:Date;
    Diagnostic:string;
    patients:Patient;
}