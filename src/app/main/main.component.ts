import { Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AtfComponent } from '../atf/atf.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectComponent } from '../project/project.component';
import { PrivacyComponent } from '../privacy/privacy.component';
import { LegalComponent } from '../legal/legal.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AtfComponent, 
    AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent,
    ProjectComponent, PrivacyComponent, LegalComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  privacy: boolean = false;
  landscapeMode: boolean = false;
  landscapeInfo: boolean = true;


  /**
   * Renders the DOM according to the bool so the "privacy" page is shown
   * @param stautsPrivacy boolean that defines if the "privacy" page should be shown
   */
  changePrivacy(stautsPrivacy: boolean){
    this.privacy = stautsPrivacy;
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event){
    this.checkViewport();
  }

 
  checkViewport(){
    if (screen.availHeight < screen.availWidth) {
      if(screen.availHeight < 440){
        this.landscapeMode = true;
        this.landscapeInfo = false;
      }
    }else{
      this.landscapeMode = false;
      this.landscapeInfo = true;
    }
  }
}
