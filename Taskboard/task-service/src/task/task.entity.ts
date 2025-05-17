import { Entity, PrimaryGeneratedColumn, Column as OrmColumn } from 'typeorm';

@Entity()
export class Task {
    @PrimaryGeneratedColumn() id: number;
    @OrmColumn() title: string;
    @OrmColumn() description: string;
    @OrmColumn() boardId: number;
    @OrmColumn() columnId: number;
}
