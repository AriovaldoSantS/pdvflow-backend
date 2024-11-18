import { Injectable } from '@nestjs/common';

@Injectable()
export class VendasService {
  private vendas = [];

  registrarVenda(produto: string, quantidade: number, preco: number) {
    const venda = { produto, quantidade, preco, total: quantidade * preco };
    this.vendas.push(venda);
    return { message: 'Venda registrada com sucesso', venda };
  }

  listarVendas() {
    return this.vendas;
  }
}
