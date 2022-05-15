import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import {CreateMessageDTO} from './DTO/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
    }

    @Post()

    createMessage(@Body() body: CreateMessageDTO) {
        console.log(body)
        return body
    }

    @Get('/:id')
    getMessage(@Param() id: string) {
        console.log(id)
        return id
    }
}
