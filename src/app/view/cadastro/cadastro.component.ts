import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import { Login } from 'src/app/model/login.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastro: any = {
    login : '',
    senha: '',
    confsenha: '',
    nome: '',
    email: ''
  }
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  createCadastro(): void {
    let apoio : Login = {
      login : this.cadastro.login,
      senha : this.cadastro.senha,
      email : this.cadastro.email,
      nome  : this.cadastro.nome
    }
    this.loginService.createLogin(apoio).subscribe(()=>{
      //mensagem
      console.log("Cadastro efetivado com sucesso!");
    })
  }
}
