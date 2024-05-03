import { Component, inject } from '@angular/core';
import {ViewportScroller } from '@angular/common';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {
  languageService = inject(LanguageService)
  
  constructor(viewportScroller: ViewportScroller){
    viewportScroller.scrollToPosition([0,0]);
  }

}
