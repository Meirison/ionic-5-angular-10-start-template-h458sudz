import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  nome: string = '';
  email: string = '';
  descricao: string = '';

  constructor() {}

  // Método antigo, pode manter ou remover se preferir
  whats() {
    const phoneNumber = '558183222967'; // seu número no formato internacional
    const message = 'Olá, gostaria de conversar!'; // mensagem padrão

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  // Método que vai abrir WhatsApp com dados do formulário
  enviarFormulario() {
    const phoneNumber = '558183222967'; // seu número no formato internacional
    const message = `Olá, meu nome é ${this.nome}. Meu e-mail é ${this.email}. Preciso de ajuda com: ${this.descricao}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}



