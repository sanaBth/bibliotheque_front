import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listcategories: Categorie[]
  constructor(private categorieservice: CategorieService) { }

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories() {
    return this.categorieservice.getCategorie().subscribe((data: any) => {
      this.listcategories = data;
      console.log(this.listcategories);
    });
  }
}
