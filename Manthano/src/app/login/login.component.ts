import { Component, forwardRef } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { InformacoesComponent } from '../componentes/informacoes/informacoes.component';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CadastroComponent,
    ReactiveFormsModule,
    InformacoesComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  toastService: any;

  constructor(
    private router: Router,
    private loginService: LoginService
  ){
    this.loginForm = new FormGroup ({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8)]),
    })

  }

  submit(){
     this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.sucess("Login feito com sucesso"),
      error: () => this.toastService.error("Algo deu errado")
     })
  }

  navigate(){
    this.router.navigate(["singup"])
  }

}
