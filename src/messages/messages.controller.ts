import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  // constructor(private readonly messagesService: MessagesService) { }

  @Get()
  listMessages() {
    return 'listMessages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return id;
  }
}
