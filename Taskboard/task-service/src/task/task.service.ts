import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private repo: Repository<Task>,
    ) { }

    findAll(boardId: number) {
        return this.repo.findBy({ boardId });
    }

    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }

    create(dto: Partial<Task>) {
        const t = this.repo.create(dto);
        return this.repo.save(t);
    }

    update(id: number, dto: Partial<Task>) {
        return this.repo.update(id, dto);
    }

    remove(id: number) {
        return this.repo.delete(id);
    }
}
