import { CommonModule } from '@angular/common';
import { Component, HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { withDebugTracing } from '@angular/router';


@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  mobileView: boolean = false;
  scrollDown: boolean = true;


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
   * switches the booleans of "mobileView" and "scrollDown" according to 
   * the width of the window
   */
  isMobileView(){
    if(window.innerWidth < 700){
      this.mobileView = true;
      this.scrollDown = false;
    }
    else{
      this.mobileView = false;
      this.scrollDown = true;
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
