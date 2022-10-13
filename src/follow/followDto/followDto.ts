import { IsNotEmpty, IsNumber } from 'class-validator';
import { User } from 'src/users/users.entity';

import { JoinColumn, ManyToOne } from 'typeorm';

export class followDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNumber()
  @IsNotEmpty()
  following_user_id: number;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
