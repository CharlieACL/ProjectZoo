import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const UserGuard = () =>{
    
    const router = inject(Router);
    const token = localStorage.getItem('token_user');

    if(token){
        return true;
    }
    else{
        router.navigate(['/login']);
        return false;
    }
}