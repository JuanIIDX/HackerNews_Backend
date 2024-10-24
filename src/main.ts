import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000

    // Habilitar CORS
    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Content-Type, Accept, Authorization',
    });

    // Configuración de Swagger
    const config = new DocumentBuilder()
    .setTitle('API para la prueba tecnia de Hacker News')
    .setDescription('Documentación de la API')
    .setVersion('1.0')
    .addTag('news') 
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document); // Ruta para acceder a Swagger

    await app.listen(port);
  

}
bootstrap();
