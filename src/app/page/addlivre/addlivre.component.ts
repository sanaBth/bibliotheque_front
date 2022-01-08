import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from 'src/app/model/categorie';
import { Livre } from 'src/app/model/livre';
import { CategorieService } from 'src/app/service/categorie.service';
import { LivreService } from 'src/app/service/livre.service';

@Component({
  selector: 'app-addlivre',
  templateUrl: './addlivre.component.html',
  styleUrls: ['./addlivre.component.css']
})
export class AddlivreComponent implements OnInit {
  postForm: FormGroup;
  newLivre: Livre = new Livre('', '', '', '')
  fichier: any
  id: string
  listcategories: any[]
  constructor(private livreBase: LivreService,
    private router: Router, private toastr: ToastrService, private categorieservice: CategorieService) { }


  ngOnInit(): void {
    this.postForm = new FormGroup
      ({
        titre: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        auteur: new FormControl('', Validators.required),
        contenue: new FormControl('', Validators.required),
      })
    this.getCategories();
  }
  getCategories() {
    return this.categorieservice.getCategorie().subscribe((data: any) => {
      this.listcategories = data;
    });
  }
  selectFile(e: any) {
    this.fichier = e.target.files[0]
  }
  selectId(e: any) {
    this.id = e.target.value;
  }
  newElement() {
    let formData = new FormData()
    formData.append('titre', this.postForm.controls.titre.value)
    formData.append('contenue', this.fichier)
    formData.append('description', this.postForm.controls.description.value)
    formData.append('auteur', this.postForm.controls.auteur.value)

    this.livreBase.addLivre(formData, this.id).subscribe(
      (res) => {
        console.log(res);
        //    this.toastr.success('La catégorie a été ajouté avec succée!');

        this.router.navigate(['/index']);
      },
      (err) => {
        console.log(err);
        //notification error

      }
    );;
  }
}
