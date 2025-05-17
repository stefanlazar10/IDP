import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { Task } from './task/task.entity';
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
            entities: [Task],
            synchronize: true,
        }),
        TaskModule,
        PrometheusModule.register()
    ],
})
export class AppModule { }
