import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  styleQuicklinks(id: string): void{
    if(id == 'about'){
      document.getElementById('about')?.classList.add('clickedAbout');
      document.getElementById('skills')?.classList.remove('clicked');
      document.getElementById('portfolio')?.classList.remove('clicked');
    }
    else if(id =='skills'){
      document.getElementById('about')?.classList.remove('clickedAbout');
      document.getElementById('skills')?.classList.add('clicked');
      document.getElementById('portfolio')?.classList.remove('clicked');
    }
    else{
      document.getElementById('about')?.classList.remove('clickedAbout');
      document.getElementById('skills')?.classList.remove('clicked');
      document.getElementById('portfolio')?.classList.add('clicked');
    }
  }


}
