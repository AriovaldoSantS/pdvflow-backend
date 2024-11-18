import { Body, Controller, Post } from '@nestjs/common';
import { CaixaService } from './caixa.service';

@Controller('caixa')
export class CaixaController {
  constructor(private readonly caixaService: CaixaService) {}

  @Post('abrir')
  abrirCaixa(@Body() body: any) {
    const { valorInicial } = body;
    return this.caixaService.abrirCaixa(valorInicial);
  }

  @Post('fechar')
  fecharCaixa() {
    return this.caixaService.fecharCaixa();
  }
}
