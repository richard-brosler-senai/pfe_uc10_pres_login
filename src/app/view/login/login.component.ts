import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/_services/login.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cadastro: any = {
    login: '',
    senha: ''
  }
  
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  efetuarLogin(){
    this.loginService.read().subscribe((dados)=>{
      let retVlr=false;
      dados.forEach(it=>{        
        if (it.login == this.cadastro.login){
          retVlr = bcrypt.compareSync(this.cadastro.senha, it.senha);
          console.log("Retorno =>", retVlr);
          console.log("Login efetuado com sucesso!");
        }         
      });
      if (!retVlr) console.log('Login Com problema!')
    })
  }
}
