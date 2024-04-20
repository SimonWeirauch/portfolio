import { Component, Input, Output} from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [PortfolioComponent, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})


export class ProjectComponent {
  //Values will be set from parent component through html
  @Input() imageSrc = ''; 
  @Input() projectTitle = '';
  @Input() description = '';
  @Input() tech = '';
  @Input() idGit = '';
  @Input() idTest = '';
  @Input() idProject = '';
  @Input() idBackground = '';
  @Input() idImage = '';

  

  dnone: boolean = true;
  hover: boolean = false;
  bgShadow: boolean = false;


  /**
   * shows projectdetails while hovering
   */
  showDetails(){
    this.dnone = false;
    this.hover = true;
    this.bgShadow = true;
  }


  /**
   * hides projectdetails while not hovering
   */
  hideDetails(){
    this.dnone = true;
    this.hover = false;
    this.bgShadow = false;
  }


  /**
   * opens the github of the project in a new window according to the project github id
   * @param idGit 
   */
  openGit(idGit: string){
    if(idGit == 'polloGit'){
      window.open('https://github.com/SimonWeirauch/El-Pollo-Loco')
    }
    else if(idGit == 'joinGit'){
      window.open('https://github.com/SimonWeirauch')
        }
    else if(idGit == 'crmGit'){
      window.open('https://github.com/SimonWeirauch')
        }
    else {
      window.open('https://github.com/SimonWeirauch')
    }
  }


  /**
   * opens the project in a new window according to the project id
   * @param idTest id of project
   */
  openTest(idTest: string){
    if(idTest == 'polloTest'){
      window.open('https://simon-weirauch.developerakademie.net/elpolloloco/index.html')
    }
    else if(idTest == 'joinTest'){
      window.open('https://simon-weirauch.developerakademie.net/join/index.html')
    }
    else if(idTest == 'crmTest'){
      window.open('https://simon-weirauch.developerakademie.net/join/index.html')
    }
    else {
      window.open('https://simon-weirauch.developerakademie.net/join/index.html')
    }
  }
}
