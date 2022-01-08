import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;
  controls: any

  constructor(private authService: AuthService,
    private router: Router,
    private loginservice: LocalstorageService
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup
      ({
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password: new FormControl('', [Validators.required]),
      });
    //console.log(this.userForm.controls);
    this.controls = this.userForm.controls
  }
  public login() {

    this.authService.login(this.userForm.value).subscribe(
      (res) => {
        this.router.navigate(['/index']);
        this.loginservice.setUseconnected(res.user);


      },
      (err) => {
        console.log("erreur de connexion");
      }
    );
  }
}
