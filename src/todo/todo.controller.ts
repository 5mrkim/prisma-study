import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { ApiOperation } from '@nestjs/swagger';
@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.todoService.fetchAllTodos();
  }

  @Get(':id')
  async fetchTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.fetchTodoItem(id);
  }

  @Delete(':id')
  async deleteTodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoService.deleteItem(id);
  }

  @Post()
  @ApiOperation({
    description: '할일 등록',
    summary: '할일 등록',
  })
  async addTodoItem(@Body() data: CreateTodoDto): Promise<Todo | null> {
    return this.todoService.addTodoItem(data);
  }
}
