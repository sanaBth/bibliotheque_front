import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) { }
  public roleofuser: string

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    this.roleofuser = JSON.parse(localStorage.getItem('type') || 'null');

    if (this.roleofuser == "admin") {

      return true;
    }
    this.router.navigate(['/'])
    return false;

  }

}
