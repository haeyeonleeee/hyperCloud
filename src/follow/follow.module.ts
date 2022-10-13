import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { FollowController } from './follow.controller';
import { Follow } from './follow.entity';
import { FollowService } from './follow.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Follow, User]),
    JwtModule.register({
      secret: 'SECRET_KEY',
      signOptions: {},
    }),
  ],
  controllers: [FollowController],
  providers: [FollowService, UsersService],
})
export class FollowModule {}
