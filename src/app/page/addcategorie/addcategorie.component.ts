import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/service/categorie.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addcategorie',
  templateUrl: './addcategorie.component.html',
  styleUrls: ['./addcategorie.component.css']
})
export class AddcategorieComponent implements OnInit {
  postForm: FormGroup;
  newCat: Categorie = new Categorie('', [])
  constructor(private categorieBase: CategorieService,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup
      ({
        nom: new FormControl('', Validators.required),
      })
  }
  newElement() {

    this.newCat.nomcategorie = this.postForm.controls.nom.value;
    this.categorieBase.addcategorie(this.newCat).subscribe(
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
  toast() {
    this.toastr.success('Bonjour!');

  }

}
