import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";
import { reject } from "q";

export class UsernValidators{

    static cantContSpa(control: AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >=0){
            return { cantContSpa: true };
        
        }
        return null;
    }

    static uniqe(control: AbstractControl): Promise<ValidationErrors> | null{
           return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log('timeout dziala');
                if(control.value === 'cabal'){
                   resolve({unique: true});
                } else {
                    resolve(null);
                }
            }, 2000);
           });
    }

}