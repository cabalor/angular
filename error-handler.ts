import { ErrorHandler } from "@angular/core";

export class ErrHand implements ErrorHandler{

    handleError(error){
        alert('unxpected error');
      console.log(error);
    }
}


