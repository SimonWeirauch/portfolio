import { Component, Input} from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [PortfolioComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})


export class ProjectComponent {
  @Input() imageSrc = ''; //Value will be set from parent component through html
  @Input() projectTitle = ''; //Value will be set from parent component through html
  @Input() description = ''; //Value will be set from parent component through html
  @Input() tech = ''; //Value will be set from parent component through html
  @Input() idGit = ''; //Value will be set from parent component through html
  @Input() idTest = ''; //Value will be set from parent component through html
  @Input() idProject = ''; //Value will be set from parent component through html
  @Input() idBackground = ''; //Value will be set from parent component through html
  @Input() idImage = ''; //Value will be set from parent component through html



  showDetails(projectId: string){
  
    if(projectId == 'pollo'){
      document.getElementById('pollo')?.classList.remove('d-none');
      document.getElementById('polloImg')?.classList.add('imgHover');
      document.getElementById('polloBg')?.classList.add('backgroundShadow');
    }
    else if(projectId == 'join'){
      document.getElementById('join')?.classList.remove('d-none');
      document.getElementById('joinImg')?.classList.add('imgHover');
      document.getElementById('joinBg')?.classList.add('backgroundShadow');
    }
    else if(projectId == 'crm'){
      document.getElementById('crm')?.classList.remove('d-none');
      document.getElementById('crmImg')?.classList.add('imgHover');
      document.getElementById('crmBg')?.classList.add('backgroundShadow');
    }
    else{
      document.getElementById('poke')?.classList.remove('d-none');
      document.getElementById('pokeImg')?.classList.add('imgHover');
      document.getElementById('pokeBg')?.classList.add('backgroundShadow');
    }
  }


  hideDetails(projectId: string){
    if(projectId == 'pollo'){
      document.getElementById('pollo')?.classList.add('d-none');
      document.getElementById('polloImg')?.classList.remove('imgHover');
      document.getElementById('polloBg')?.classList.remove('backgroundShadow');
    }
    else if(projectId == 'join'){
      document.getElementById('join')?.classList.add('d-none');
      document.getElementById('joinImg')?.classList.remove('imgHover');
      document.getElementById('joinBg')?.classList.remove('backgroundShadow');
    }
    else if(projectId == 'crm'){
      document.getElementById('crm')?.classList.add('d-none');
      document.getElementById('crmImg')?.classList.remove('imgHover');
      document.getElementById('crmBg')?.classList.remove('backgroundShadow');
    }
    else{
      document.getElementById('poke')?.classList.add('d-none');
      document.getElementById('pokeImg')?.classList.remove('imgHover');
      document.getElementById('pokeBg')?.classList.remove('backgroundShadow');
    }
  }

}
