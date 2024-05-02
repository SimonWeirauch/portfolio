import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  langEN: boolean = false;
   
  /**
   * switches the language of the site
   */
  switchLanguage(){
   if(this.langEN){
     this.langEN = false;
   }
   else{
     this.langEN = true;
   } 
  }
}
