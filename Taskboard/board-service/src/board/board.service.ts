import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private repo: Repository<Board>,
    ) { }

    findAll() {
        return this.repo.find();
    }

    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }

    create(title: string, userId: number) {
        const b = this.repo.create({ title, userId });
        return this.repo.save(b);
    }

    update(id: number, title: string) {
        return this.repo.update(id, { title });
    }

    remove(id: number) {
        return this.repo.delete(id);
    }
}
