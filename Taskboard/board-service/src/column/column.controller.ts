import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { ColumnService } from './column.service';

@Controller('columns')
export class ColumnController {
    constructor(private svc: ColumnService) { }

    @Get()
    all(@Query('boardId') boardId: string) {
        return this.svc.findAll(+boardId);
    }

    @Post()
    create(@Body() dto: { name: string; boardId: number }) {
        return this.svc.create(dto.name, dto.boardId);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: { name: string }) {
        return this.svc.update(+id, dto.name);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.svc.remove(+id);
    }
}
