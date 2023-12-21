import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    description: '제목',
    required: true,
    example: '테스트할일',
  })
  title: string;
  @ApiProperty({
    description: '할일 내용',
    required: true,
    example: '테이트입니다.',
  })
  content: string;

  @ApiProperty({
    description: '완료여부',
    required: true,
    example: true,
  })
  is_done: boolean;
}
