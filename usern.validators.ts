import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

export class UsernValidators{

    static cantContSpa(control: AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >=0){
            return { cantContSpa: true };
        
        }
        return null;
    }

}