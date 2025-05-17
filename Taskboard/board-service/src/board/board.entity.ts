import { Entity, PrimaryGeneratedColumn, Column as OrmColumn } from 'typeorm';

@Entity()
export class Board {
    @PrimaryGeneratedColumn() id: number;

    @OrmColumn() title: string;

    @OrmColumn() userId: number;
}
