import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from '../board_status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  title: String;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;

  // @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  // user: User;
}
