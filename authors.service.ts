import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  getAuthors(){

    return ["a1", "a2", "a3"];
  }

}
