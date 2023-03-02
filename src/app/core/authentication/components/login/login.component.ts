import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private autentificar: LoginService
  ) {}

  hide = true;
  active = false;

  formLogin = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])
  });

  onSubmit() {
    this.autentificar.consultarCredencial(this.formLogin.value.cedula!, this.formLogin.value.password!).toPromise().then( resp =>{
    
      console.log(resp);
    }).catch(
      err => {
        console.error(err);
        return false;
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
