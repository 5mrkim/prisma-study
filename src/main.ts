import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TodoModule } from './todo/todo.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(TodoModule);
  const port = process.env.PORT || 3030;
  const config = new DocumentBuilder()
    .setTitle('설문지API 문서!')
    .setDescription('설문지 API 문서입니다')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
  };
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, customOptions);

  await app.listen(port);
  console.log(`listening on ${port}.!!!!`);
}
bootstrap();
