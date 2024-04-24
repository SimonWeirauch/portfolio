import { CommonModule } from '@angular/common';
import { Component, HostListener, Output, EventEmitter} from '@angular/core';



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
  
  privacy: boolean = false;
  legal: boolean = false;

  @Output() defaultEmitterHeader = new EventEmitter<boolean>();
  @Output() skillButtonAndScrollDownEmitterHeader = new EventEmitter<boolean>();


  /**
   * Defines input variable in app component to render
   * skill and atf component for mobile usage
   */
  setSkillButtonAndScrollDown(){
    this.skillButtonAndScrollDownEmitterHeader.emit(true);
  }


  /**
   * Sets legal and privacy bool in app component to
   * render the page without legal and privacy page
   */
  setLegalPrivacyDefault(){
    this.defaultEmitterHeader.emit(false);
    
    console.log('changed from setLegalPrivacyDefault() privacy and legal to false');
  }


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
 * executes function to style the quicklinks according to the pressed quicklink
 * @param id 
 */
  styleQuicklinks(id: string): void{
    if(id == 'about'){
      this.styleAboutMeLink();
    }
    else if(id =='skills'){
      this.styleSkillsLink();
    }
    else{
      this.stylePortfolioLink();
    }
  }


  /**
   * styles the about me quicklink
   */
  styleAboutMeLink(){
    this.about = true;
    this.skills = false;
    this.portfolio = false;
  }


  /**
   * styles the skills quicklink
   */
  styleSkillsLink(){
    this.about = false;
    this.skills = true;
    this.portfolio = false;
  }


  /**
   * styles the portfolio quicklink
   */
  stylePortfolioLink(){
    this.about = false;
    this.skills = false;
    this.portfolio = true;
  }
}

