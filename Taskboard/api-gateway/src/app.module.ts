import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GatewayController } from './gateway.controller';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';


@Module({
    imports: [HttpModule, PrometheusModule.register()],
    controllers: [GatewayController],

})
export class AppModule { }
