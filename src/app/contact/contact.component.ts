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
    endPoint: 'https://simon-weirauch.de/sendMail.php',
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

/**
 * sends the contact data to the php file on my server
 * @param ngForm contactform
 */
  onSubmit(ngForm: NgForm) {
    
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      console.log(this.contactData);
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //alles hinzufügen was benötigt wird
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
      this.acceptCheckbox();
      //alles hinzufügen was benötigt wird zum testen
    }
  }


  /**
   * shows the error messages underneath the inputfield or textareafield
   * @param value name of inputfield
   */
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


  /**
   * styles the name inputfield according to the content of the inputfield
   */
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


  /**
   * styles the email inputfield according to the content of the inputfield
   */
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


  /**
   * styles the message textarea field according to the content 
   * of the textareafield
   */
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


  /**
   * changes the status of the checkbox
   */
  acceptCheckbox(){
    if(this.checkbox){
      this.checkbox = false
    }
    else{
      this.checkbox = true
    }
  }


  /**
   * shows or hides the error message according to the status of the
   * checkbox
   */
  sendForm(){
    if(this.checkbox){
      this.errorMsgPrivacy = true;
    }
    else{
      this.errorMsgPrivacy = false;
    }
  }
  
  hover: boolean = false;


  /**
   * changes the color of the arrow button to green while hovering
   */
  changeButtomArrowGreen(){
    this.hover = true;
  }


  /**
   * changes the color of the arrow button to white while not hovering
   */
  changeButtomArrowWhite(){
    this.hover = false;
  }
}
