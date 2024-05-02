import { Component, inject } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  languageService = inject(LanguageService)
}

