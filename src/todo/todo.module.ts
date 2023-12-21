import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [],
  providers: [TodoService, PrismaService],
  controllers: [TodoController],
})
export class TodoModule {}
