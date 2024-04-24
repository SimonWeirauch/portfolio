import { CommonModule } from '@angular/common';
import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  


  constructor(private router: Router){
    console.log('footer triggered')
    this.params = this.urlParams.get('style')
    if(this.params){
      if(this.params == 'legal'){
        console.log('execute legal styling');
      }
      else {
        console.log('execute privacy styling');
      }
    }
    else{
      console.log('execute portfolio styling')
    }
  }

  urlParams = new URLSearchParams(window.location.search)
  params: any;
  

  test: string = "";
  mobileView: boolean = false;
  hide: boolean = true;
  legal: boolean = false


  @Output() legalEmitter = new EventEmitter<boolean>();
  @Output() defaultEmitterFooter = new EventEmitter<boolean>();
  @Output() skillButtonAndScrollDownEmitterFooter = new EventEmitter<boolean>();
  
  @Output() LegalEmitterFooterCSS = new EventEmitter<boolean>();







  /**
   * Defines input variable in app component to render
   * skill and atf component for mobile usage
   */
  setSkillButtonAndScrollDown(){
    this.skillButtonAndScrollDownEmitterFooter.emit(true);
  }


   /**
   * changes the status of the boolean "legal" and "privacy" which will
   * change the DOM of app.component.html
   */
  setLegalPrivacyDefault(){
    this.defaultEmitterFooter.emit(true);
  }


  /**
   * changes the status of the boolean "legal" which will
   * change the DOM of app.component.html
   */
  changeLegal() {
    
    
    if(this.legal){
      
      //this.legal = false;
      //this.router.navigateByUrl('/legal');
      this.legalEmitter.emit(true);
      console.log('changed by changeLegal() legal footercomponent to true ? = ' + this.legal)

      
    }
    else{
      
      //this.legal = true;
      this.legalEmitter.emit(true);

      console.log('changed by changeLegal() legal to true ? = ' + this.legal)

    }
    
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
      this.hide = true;
    }
    else{
      this.mobileView = true;
      this.hide = false;
    }
  }


  /**
   * Opens a new window with github
   */
  showGit(){
    window.open('https://github.com/SimonWeirauch');
  }


  /**
   * Opens a new window with linkedin
   */
  showLinkedIn(){
    window.open('https://de.linkedin.com/')
  }
}