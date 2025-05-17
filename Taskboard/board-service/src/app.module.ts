import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { ColumnModule } from './column/column.module';
import { Board } from './board/board.entity';
import { Column } from './column/column.entity';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT ?? '5432', 10),
            username: process.env.DB_USER || 'user',
            password: process.env.DB_PASS || 'pass',
            database: process.env.DB_NAME || 'taskboard',
            entities: [Board, Column],
            synchronize: true,
        }),
        BoardModule,
        ColumnModule,
        PrometheusModule.register(),
    ],
})
export class AppModule { }
