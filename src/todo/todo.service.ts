import { CreateTodoDto } from './dto/create-todo.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Todo } from '@prisma/client';
@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  //전체조회
  async fetchAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }
  async fetchTodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async deleteItem(id: number): Promise<Todo | null> {
    const result = this.prismaService.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (result) {
      return this.prismaService.todo.delete({
        where: {
          id: Number(id),
        },
      });
    }
    return;
  }

  async addTodoItem(data: CreateTodoDto): Promise<Todo> {
    return this.prismaService.todo.create({
      data,
    });
  }
}
