import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private svc: TaskService) { }

    @Get()
    all(@Query('boardId') boardId: string) {
        return this.svc.findAll(+boardId);
    }

    @Get(':id')
    one(@Param('id') id: string) {
        return this.svc.findOne(+id);
    }

    @Post()
    create(@Body() dto: { title: string; description: string; boardId: number; columnId: number }) {
        return this.svc.create(dto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: Partial<{ title: string; description: string }>) {
        return this.svc.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.svc.remove(+id);
    }
}
