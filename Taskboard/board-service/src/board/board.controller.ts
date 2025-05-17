import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('boards')
export class BoardController {
    constructor(private svc: BoardService) { }

    @Get()
    all() {
        return this.svc.findAll();
    }

    @Get(':id')
    one(@Param('id') id: string) {
        return this.svc.findOne(+id);
    }

    @Post()
    create(@Body() dto: { title: string; userId: number }) {
        return this.svc.create(dto.title, dto.userId);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: { title: string }) {
        return this.svc.update(+id, dto.title);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.svc.remove(+id);
    }
}
