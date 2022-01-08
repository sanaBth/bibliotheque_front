import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userconnected: User;
  constructor(private storageService: LocalstorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userconnected = JSON.parse(localStorage.getItem('userconnected') || 'null')
  }
  onRefresh() {
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
    const currentUrl = this.router.url + '?'
    return this.router.navigateByUrl(currentUrl).then(() => {
      this.router.navigated = false
      this.router.navigate([this.router.url])
    })
  }
  logout() {
    this.storageService.logout();
    this.onRefresh();
    this.router.navigate(['/index']);

  }
}
