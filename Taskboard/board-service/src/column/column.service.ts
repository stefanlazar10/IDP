import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column } from './column.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColumnService {
    constructor(
        @InjectRepository(Column)
        private repo: Repository<Column>,
    ) { }

    findAll(boardId: number) {
        return this.repo.findBy({ boardId });
    }

    create(name: string, boardId: number) {
        const c = this.repo.create({ name, boardId });
        return this.repo.save(c);
    }

    update(id: number, name: string) {
        return this.repo.update(id, { name });
    }

    remove(id: number) {
        return this.repo.delete(id);
    }
}
