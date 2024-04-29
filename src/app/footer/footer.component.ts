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
  urlParams = new URLSearchParams(window.location.search)
  params: any;
  
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
      this.legalEmitter.emit(true);
    }
    else{
      this.legalEmitter.emit(true);
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