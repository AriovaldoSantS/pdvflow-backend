import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CaixaModule } from './caixa/caixa.module';
import { VendasModule } from './vendas/vendas.module';

@Module({
  imports: [AuthModule, CaixaModule, VendasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
