import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../language.service';



@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {
  
  @Input() hide?: boolean;
  @Input() scrollDown?: boolean;
  languageService = inject(LanguageService)

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
      this.hide = true;
      this.scrollDown = false;
    }
    else{
      this.hide = false;
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
    window.open('https://www.linkedin.com/in/simon-weirauch-0b8859307/')
  }
}
