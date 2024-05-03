import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AtfComponent } from './atf/atf.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LegalComponent } from './legal/legal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, AtfComponent, 
          AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent,
          ProjectComponent, PrivacyComponent, LegalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  privacy: boolean = false;
  legal: boolean = false;
  langEN = false;
 
  hideValue: boolean = false;
  scrollDownValue: boolean = true;
  landscapeMode: boolean = false;
  
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event){
    this.checkViewport();
  }

  /**
   * switches the boolean of "landscapeMode" according to 
   * the width of the window to turn landscape mode on or off
   */
  checkViewport(){
    if (screen.availHeight < screen.availWidth) {
      if(screen.availHeight < 440){
        this.landscapeMode = true;
        
      }
    }else{
      this.landscapeMode = false;
    }
  }

  /**
   * Renders the DOM according to the bool so the "legal" page is shown
   * @param statusLegal boolean that defines if the "legal" page should be shown
   */
  changeLegal(statusLegal: boolean){
    this.legal = statusLegal;

  }


  /**
   * Renders the DOM according to the bool so the "privacy" and "legal" page
   * @param legalPrivacyDefault boolean that defines if the "privacy" and "legal" page should be hidden
   */
  setDefault(legalPrivacyDefault: boolean){
    this.legal = legalPrivacyDefault;
    this.privacy = legalPrivacyDefault;

  }
}