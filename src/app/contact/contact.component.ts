import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  
  http = inject(HttpClient)   //http Client zur verfügung gestellt

  successImgName: boolean = true;
  errorImgName: boolean = true;
  errorMsgName: boolean = true;

  successImgMail: boolean = true;
  errorImgMail: boolean = true;
  errorMsgMail: boolean = true;


  successImgMessage: boolean = true;
  errorImgMessage: boolean = true;
  errorMsgMessage: boolean = true;


  errorMsgPrivacy: boolean = true;

  borderGreenMessage: boolean = false;
  borderRedMessage: boolean = false;

  borderGreenName: boolean = false;
  borderRedName: boolean = false;

  borderGreenMail: boolean = false;
  borderRedMail: boolean = false;

  checkbox: boolean = false;

  mailTest: boolean = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  showHint(value: string){
    if(value == 'name'){
      this.nameValidation();
    }
    else if(value == 'email'){
      this.mailValidation();
    }
    else{
      this.messageValidation();
    }
  }

  nameValidation(){
    if(this.contactData.name == ""){
      this.successImgName = true;
      this.errorImgName = false;
      this.errorMsgName = false;
      this.borderGreenName = false;
      this.borderRedName = true;

    }
    else{
      this.successImgName = false;
      this.errorImgName = true;
      this.errorMsgName = true;
      this.borderGreenName = true;
      this.borderRedName = false;
    }
  }

  mailValidation(){
      if(this.contactData.email == ""){
      this.successImgMail = true;
      this.errorImgMail = false;
      this.errorMsgMail = false;
      this.borderGreenMail = false;
      this.borderRedMail = true;
    }
    else{
      this.successImgMail = false;
      this.errorImgMail = true;
      this.errorMsgMail = true;
      this.borderGreenMail = true;
      this.borderRedMail = false;
    }
  }

  messageValidation(){
    if(this.contactData.message == ""){
      this.successImgMessage = true;
      this.errorImgMessage = false;
      this.errorMsgMessage = false;
      this.borderGreenMessage = false;
      this.borderRedMessage = true;
    }
    else{
      this.successImgMessage = false;
      this.errorImgMessage = true;
      this.errorMsgMessage = true;
      this.borderGreenMessage = true;
      this.borderRedMessage = false;
    }
  }

  acceptCheckbox(){
    if(this.checkbox){
      this.checkbox = false
    }
    else{
      this.checkbox = true
    }
  }

  sendForm(){
    if(this.checkbox){
      this.errorMsgPrivacy = true;
    }
    else{
      this.errorMsgPrivacy = false;
    }
  }
  
  hover: boolean = false;

  changeButtomArrowGreen(){
    this.hover = true;
  }

  changeButtomArrowWhite(){
    this.hover = false;
  }



  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }
}
