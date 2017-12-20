import { AbstractControl } from '@angular/forms';
import { resolve } from 'url';
export class PassValidators{

    static staryPassValid(control: AbstractControl){
            return new Promise((resolve)=>{
                if(control.value !== '1234'){
                    resolve ({ staryPassValid: true});     
                } else {
                    resolve(null);
                }
            })
    }

    static passMatcher(control: AbstractControl){
        let newPassword = control.get('nowyPass');
        let confPassword = control.get('poPass');

        if(newPassword.value !== confPassword.value){
            return { passMatcher: true};
        }
            return null;
        

    }


}