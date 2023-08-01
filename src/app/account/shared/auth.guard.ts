import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = window.localStorage.getItem('token')
  if(token){
    return true
  }else{
    const router = new Router
    router.navigate(['login'])
    return false
  }
};
