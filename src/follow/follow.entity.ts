import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Follow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  following_user_id: number;

  // @OneToMany(() => Posts, posts => posts.users)
  // posts: Posts[]
}
