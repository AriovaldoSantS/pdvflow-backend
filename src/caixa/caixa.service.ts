import { Injectable } from '@nestjs/common';

@Injectable()
export class CaixaService {
  private caixaAberto = false;
  private valorInicial = 0;

  abrirCaixa(valorInicial: number) {
    if (this.caixaAberto) {
      return { message: 'Caixa já está aberto' };
    }
    this.caixaAberto = true;
    this.valorInicial = valorInicial;
    return { message: 'Caixa aberto com sucesso', valorInicial };
  }

  fecharCaixa() {
    if (!this.caixaAberto) {
      return { message: 'Caixa já está fechado' };
    }
    this.caixaAberto = false;
    return {
      message: 'Caixa fechado com sucesso',
      valorRestante: this.valorInicial,
    };
  }
}
