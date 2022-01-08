import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent implements OnInit {
  postForm: FormGroup;
  constructor(private authservice: AuthService,
    private router: Router) { }
  controls: any
  ngOnInit(): void {
    this.postForm = new FormGroup
      ({
        name: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        type: new FormControl('', Validators.required),
      })
    this.controls = this.postForm.controls
  }
  newElement() {
    this.authservice.register(this.postForm.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/index']);
      }
    })
  }
}
