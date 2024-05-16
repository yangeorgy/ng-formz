import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('f') sighnupForm: NgForm;
  
  defaultQuestion = 'pet';
  answer: string = '';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secret: '',
    gender: ''

  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    
    // this.sighnupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender:'male',
    // });

    this.sighnupForm.form.patchValue({
      userData:{
        username: suggestedName,
      },
    });

  }
  // onSubmit(form : NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.sighnupForm);
    this.submitted = true;
    this.user.username = this.sighnupForm.value.userData.username;
    this.user.email = this.sighnupForm.value.userData.email;
    this.user.secret = this.sighnupForm.value.userData.secret;
    this.user.gender = this.sighnupForm.value.userData.gender;
  }
}
