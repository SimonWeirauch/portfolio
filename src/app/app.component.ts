import { Component, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
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
  imports: [CommonModule, RouterOutlet, HeaderComponent, AtfComponent, 
          AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent,
          ProjectComponent, PrivacyComponent, LegalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  privacy: boolean = false;
  legal: boolean = false;
  
  mobileOnValue: boolean = false;
  mobileOffValue: boolean = true;

  hideValue: boolean = false;
  scrollDownValue: boolean = true;


  /**
   * Renders the DOM according to the bool so the "legal" page is shown
   * @param statusLegal boolean that defines if the "legal" page should be shown
   */
  changeLegal(statusLegal: boolean){
    this.legal = statusLegal;
  }


  /**
   * Renders the DOM according to the bool so the "privacy" page is shown
   * @param stautsPrivacy boolean that defines if the "privacy" page should be shown
   */
  changePrivacy(stautsPrivacy: boolean){
    this.privacy = stautsPrivacy;
  }


  /**
   * Renders the DOM according to the bool so the "privacy" and "legal" page
   * @param legalPrivacyDefault boolean that defines if the "privacy" and "legal" page should be hidden
   */
  setDefault(legalPrivacyDefault: boolean){
    this.legal = legalPrivacyDefault;
    this.privacy = legalPrivacyDefault;
  }


  /**
   * Renders the DOM according to the bool so the button in the skill component and the "scroll down" span in the
   * atf component is hidden
   * @param skillButtonAndScrollDownEmitterHeader boolean that defines if the button in the skill component and
   * the "scroll down" span in the atf component should be hidden
   */
  setSkillButtonAndScrollDown(skillButtonAndScrollDownEmitterHeader: boolean){
    //skills component
    this.mobileOnValue = skillButtonAndScrollDownEmitterHeader;
    this.mobileOffValue = false;

    //atf component
    this.hideValue = skillButtonAndScrollDownEmitterHeader;
    this.scrollDownValue = false;
  }

}


