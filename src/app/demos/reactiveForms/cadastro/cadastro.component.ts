import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirm,
    });
  }

  adicionarUsuario() {
    if (this.cadastroForm.dirty && this.cadastroForm.touched) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value); //assign transforma os valores do formulário para o usuário
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }
    else {
      this.formResult = 'Não submeteu!!!'
    }
  }

}
