import { CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './contactResp.component.scss',]
  
})

export class ContactComponent {
  
  http = inject(HttpClient)

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

  buttonDisabled: boolean = true;

  checkbox: boolean = false;

  mailTest: boolean = false;
  privacy: boolean = false;

  hover: boolean = false;

  validMail: boolean = false;

  mailSuccessfullySend: boolean = false;

  @Output() privacyEmitter = new EventEmitter<boolean>();

  regex = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}")

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
   * changes the status of the boolean "legal" which will
   * change the DOM of app.component.html
   */
  changePrivacy() {
    if(this.privacy){
      this.privacy = false;
      this.privacyEmitter.emit(false)
    }
    else{
      this.privacy = true;
      this.privacyEmitter.emit(true)
    }
  }


/**
 * sends the contact data to the php file on my server
 * @param ngForm contactform
 */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.acceptCheckbox();
          },
          error: (error) => {console.error(error);},
          complete: () => this.mailSuccessfullySend = true,
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.acceptCheckbox();
    }
    else {
      //function to be called in production if submit fails
      this.nameValidation();
      this.mailValidation();
      this.messageValidation();
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
      this.showNameErrorMsg();
    }
    else{
      this.hideNameErrorMsg();
    }
  }


  /**
   * shows the styling of the error message for the inputfield "name"
   */
  showNameErrorMsg(){
    this.successImgName = true;
    this.errorImgName = false;
    this.errorMsgName = false;
    this.borderGreenName = false;
    this.borderRedName = true;
  }


  /**
   * hides the styling of the error message for the inputfield "name"
   */
  hideNameErrorMsg(){
    this.successImgName = false;
    this.errorImgName = true;
    this.errorMsgName = true;
    this.borderGreenName = true;
    this.borderRedName = false;
  }


  /**
   * styles the email inputfield according to the content of the inputfield
   */
  mailValidation(){
    if(!this.regex.test(this.contactData.email)){
      this.showMailErrorMsg();
    }
    else{
      this.hideMailErrorMsg();
    }
  }


  /**
   * shows the styling of the error message for the inputfield "name"
   */
  showMailErrorMsg(){
    this.successImgMail = true;
    this.errorImgMail = false;
    this.errorMsgMail = false;
    this.borderGreenMail = false;
    this.borderRedMail = true;
    this.validMail = false;
  }


  /**
   * hides the styling of the error message for the inputfield "Mail"
   */
  hideMailErrorMsg(){
    this.successImgMail = false;
    this.errorImgMail = true;
    this.errorMsgMail = true;
    this.borderGreenMail = true;
    this.borderRedMail = false;
    this.validMail = true;
  }


  /**
   * styles the message textarea field according to the content 
   * of the textareafield
   */
  messageValidation(){
    if(this.contactData.message.length < 4 || this.contactData.message == "" ){
      this.showMessageErrorMsg();
    }
    else{
      this.hideMessageErrorMsg();
    }
  }


  /**
   * shows the styling of the error message for the textfield "Message"
   */
  showMessageErrorMsg(){
    this.successImgMessage = true;
    this.errorImgMessage = false;
    this.errorMsgMessage = false;
    this.borderGreenMessage = false;
    this.borderRedMessage = true;
  }


  /**
   * hides the styling of the error message for the textfield "Message"
   */
  hideMessageErrorMsg(){
    this.successImgMessage = false;
    this.errorImgMessage = true;
    this.errorMsgMessage = true;
    this.borderGreenMessage = true;
    this.borderRedMessage = false;
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
  

  /**
   * changes the color of the arrow button to green while hovering
   */
  changeBottomArrowGreen(){
    this.hover = true;
  }


  /**
   * changes the color of the arrow button to white while not hovering
   */
  changeBottomArrowWhite(){
    this.hover = false;
  }
}