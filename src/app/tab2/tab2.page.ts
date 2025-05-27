import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  doarAlimentos() {
    this.abrirMapa('Ponto+Doacao+Alimento');
  }

  doarRoupas() {
    this.abrirMapa('Ponto+Doacao+Roupas');
  }

  doarSangue() {
    this.abrirMapa('Ponto+Doacao+Sangue');
  }

  private abrirMapa(pesquisa: string) {
    const url = `https://www.google.com/maps/search/?api=1&query=${pesquisa}`;
    window.open(url, '_blank')?.focus();
  }
}
