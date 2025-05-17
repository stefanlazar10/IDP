import { Entity, PrimaryGeneratedColumn, Column as OrmColumn } from 'typeorm';

@Entity()
export class Column {
    @PrimaryGeneratedColumn() id: number;
    @OrmColumn() name: string;
    @OrmColumn() boardId: number;
}
