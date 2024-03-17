import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const adminGuard = () =>{
    
    const router = inject(Router);
    const token = localStorage.getItem('token_admin');

    if(token){
        return true;
    }
    else{
        router.navigate(['/login']);
        return false;
    }
}