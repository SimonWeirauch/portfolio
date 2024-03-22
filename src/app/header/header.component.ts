import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  mobileView: boolean = true;
  quicklinks: boolean = false;
  burgerMenu: boolean = false;

  about: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;
  


 /**
 * Needed for testing purposes
 * Executes the function "isMobileView()" if window is resized
 * @param event resize of window
 */
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if(event){
      this.isMobileView();
    }  
  }


  /**
   * Executes the function "isMobileView()" if window is loaded
   * @param event load of  window
   */
  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
    if(event){
      this.isMobileView();
    }  
  }


  /**
   * switches the booleans of "mobileView" and "hide" according to 
   * the width of the window
   */
  isMobileView(){
    if(window.innerWidth < 700){
      this.mobileView = false;
      this.quicklinks = true;
    }
    else{
      this.mobileView = true;
      this.quicklinks = false;
    }
  }


 /**
  * switches the boolean of "burgerMenu" so the burger menu
  * will be shown.
  */
  showBurgerMenu() {
  
  if(this.burgerMenu){
    this.burgerMenu = false;
  }
  else{
    this.burgerMenu = true;
  }
}


/**
 * styles the quicklinks according to which quicklink is pressed
 * @param id 
 */
  styleQuicklinks(id: string): void{
    if(id == 'about'){
      this.about = true;
      this.skills = false;
      this.portfolio = false;
    }
    else if(id =='skills'){
      this.about = false;
      this.skills = true;
      this.portfolio = false;
    }
    else{
      this.about = false;
      this.skills = false;
      this.portfolio = true;
    }
  }
}