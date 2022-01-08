export class Categorie {
    nomcategorie: String;
    listeDesLivres: [];
    constructor(nomcategorie: String, listeDesLivres: []) {
        this.nomcategorie = nomcategorie;
        this.listeDesLivres = listeDesLivres;
    }

}