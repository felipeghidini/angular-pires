import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public contadorClique: number = 0;
  public urlImagem: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  adicionarClick() {
    this.contadorClique++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
