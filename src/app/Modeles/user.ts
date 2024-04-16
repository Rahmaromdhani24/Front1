export class User {
    id: number;
    cin: number;
    nom: string;
    prenom: string;
    gender: string;
    username: string;
    email: string;
    password: string;
    image: string;
    role: string;
    date_inscription: Date;
    accessToken: string;

    constructor( id: number,cin: number, nom: string, prenom: string,gender: string,username: string, email: string,
                 password: string,image: string,role: string, date_inscription: Date, accessToken: string) {
        this.id = id;
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.gender = gender;
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image;
        this.role = role;
        this.date_inscription = date_inscription;
        this.accessToken = accessToken;
    }
}
