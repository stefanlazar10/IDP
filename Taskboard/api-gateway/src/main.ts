import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthMiddleware } from './auth.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // Aplică middleware-ul JWT înaintea tuturor rutelor
    app.use(new AuthMiddleware().use);
    await app.listen(8080);
    console.log('API Gateway listening on http://localhost:8080');
}
bootstrap();
