import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import {CreateMessageDTO} from './DTO/create-message.dto';
import {MessagesService} from "./messages.service";
import {MessagesRepository} from "./messages.repository";

@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id)

    }
}
