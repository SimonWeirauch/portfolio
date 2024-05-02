import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @Input() mobileOn?: boolean;
  @Input() mobileOff?: boolean;
  languageService = inject(LanguageService)


 /**
 * Needed for testing purposes
 * Executes the function "isMobileView()" if window is resized
 * @param event resize of window
 */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {  
    if(event){
      this.mobileView();
    }  
  }


  /**
   * Executes the function "isMobileView()" if window is loaded
   * @param event load of  window
   */
  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
    if(event){
      this.mobileView();
    }  
  }


  /**
   * switches the booleans of "mobileOn" and "mobileOff" according to 
   * the width of the window
   */
  mobileView(){
    if(window.innerWidth < 700){
      this.mobileOn = true;
      this.mobileOff = false;
    }
    else{
      this.mobileOn = false;
      this.mobileOff = true;
    }
  }
}
