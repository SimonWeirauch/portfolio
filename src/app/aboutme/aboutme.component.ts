import { Component, inject } from '@angular/core';
import { LanguageService } from '../language.service';



@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
  languageService = inject(LanguageService);
}