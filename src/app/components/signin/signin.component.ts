import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm:FormGroup;
  submitted = false;

  constructor(
    private userService:UserService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls;}

  submitForm(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    this.userService.loginUsuario(this.loginForm.value).subscribe(
      res =>{
        localStorage.setItem('TOKEN', res.token);
        window.location.reload();
      }, err => console.log(err)
    )
  }

}
