import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformationGuard implements CanActivate {

  constructor(
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      const number = parseInt(route.params['number'], 10)
      if(number >0 && number <= 1000) {
        return true
      } 
      this.router.navigate(['/'])
      return false
  }
  
}
