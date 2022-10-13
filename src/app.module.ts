import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/configuration';
import { FollowModule } from './follow/follow.module';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UsersModule, FollowModule, BoardsModule],
})
export class AppModule {}
