import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
    //variaveis
    @Input () titulo: string = "";
    @Input () primeirobotao: string = "";
    @Input () segundobotao: string = "";
    @Output ("submit") onSubmit = new EventEmitter();
    @Output ("navigate") onNavigate = new EventEmitter();

    nome:string = 'z';
    idade:number = 1;

    //função
    submit(){
      this.onSubmit.emit();  
    }

    navigate(){
      this.onNavigate.emit();  
    }
}
