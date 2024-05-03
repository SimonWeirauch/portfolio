import { Component, inject } from '@angular/core';
import {ViewportScroller } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  languageService = inject(LanguageService)

  constructor(viewportScroller: ViewportScroller){
    viewportScroller.scrollToPosition([0,0]);
  }

}
