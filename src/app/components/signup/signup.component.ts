import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { confirmedValidator } from './confirmed.validator';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;

  

  constructor(
    private usuarioService:UsuarioService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      cc: ['', Validators.required],
      address: ['', Validators.required],
      addressComplement: [''],
      country: ['Colombia'], //name: [{value: '', disabled: true}, Validators.required],
      city: ['Cartagena'],
      phoneNumber: ['', Validators.required],
      termsConditions: [false, Validators.requiredTrue]
    },{ validators: confirmedValidator('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls;}

  submitForm(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    
  this.usuarioService.registerUsuario(this.registerForm.value).subscribe(
    res=>{
      localStorage.setItem('TOKEN', res.token);
      window.location.reload();
    }, err => console.log(err)
  );

  }

}
