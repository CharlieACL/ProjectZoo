import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const eventGuard = () =>{
    
    const router = inject(Router);
    const token1 = localStorage.getItem('token_admin');
    const token2 = localStorage.getItem('token_user')


    if(token1 || token2){
        return true;
    }
    else{
        router.navigate(['/login']);
        return false;
    }
}