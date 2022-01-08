import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {
  userForm: any;
  controls: any
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup
      ({
        name: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),

      })
    this.controls = this.userForm.controls
  }
  register() {
    this.authService.registerAdmin(this.userForm.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/index']);
      }
    })
  }
}
