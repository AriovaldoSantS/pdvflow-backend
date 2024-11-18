import { Body, Controller, Get, Post } from '@nestjs/common';
import { VendasService } from './vendas.service';

@Controller('vendas')
export class VendasController {
  constructor(private readonly vendasService: VendasService) {}

  @Post('registrar')
  registrarVenda(@Body() body: any) {
    const { produto, quantidade, preco } = body;
    return this.vendasService.registrarVenda(produto, quantidade, preco);
  }

  @Get()
  listarVendas() {
    return this.vendasService.listarVendas();
  }
}
