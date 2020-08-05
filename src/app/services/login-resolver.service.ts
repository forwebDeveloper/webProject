import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginResolverService implements Resolve<any> {
  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    if (false) {
      this.router.navigateByUrl('tabs/tab1')
      return EMPTY;
    } else {
      return of([]);
    }
  }
}
