import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public contadorClique: number = 0;
  public urlImagem: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  public nome: string = '';

  adicionarClick() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  // keyUp(event: any) {
  //   this.nome = event.target.value;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
