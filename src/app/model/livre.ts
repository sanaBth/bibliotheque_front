export class Livre {
    titre: String;
    auteur: String;
    description: String;
    contenue: String

    constructor(titre: string, auteur: string, description: string,
        contenue: string) {
        this.titre = titre;
        this.auteur = auteur;
        this.description = description;
        this.contenue = contenue;
    }

}