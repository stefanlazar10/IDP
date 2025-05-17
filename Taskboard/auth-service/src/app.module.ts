
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './login/auth.module';
import { User } from './register/user.entity';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASS || 'pass',
      database: process.env.DB_NAME || 'taskboard',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    PrometheusModule.register()
  ],
})
export class AppModule { }
