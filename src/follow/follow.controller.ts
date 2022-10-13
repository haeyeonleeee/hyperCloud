import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FollowService } from './follow.service';
import { UsersService } from 'src/users/users.service';

@Controller('follow')
export class FollowController {
  constructor(
    private followService: FollowService,
    private userService: UsersService,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async follow(
    @Body('email')
    email: string,
    @Headers('user_id') user_id: number,
  ) {
    const following_user_id = await this.userService.findUserIdByEmail(email);
    const followStatus = await this.followService.checkFollowingStatus(
      user_id,
      following_user_id,
    );

    if (followStatus) {
      return Object.assign({ message: '이미 팔로우중입니다' });
    }

    await this.followService.follow(user_id, following_user_id);
    return Object.assign({ message: '팔로우 성공' });
  }

  @Delete()
  @UsePipes(ValidationPipe)
  async unfollow(
    @Body('email') email: string,
    @Headers('user_id') user_id: number,
  ) {
    const following_user_id = await this.userService.findUserIdByEmail(email);
    const followStatus = await this.followService.checkFollowingStatus(
      user_id,
      following_user_id,
    );

    if (!followStatus) {
      return Object.assign({ message: '팔로우중이 아닙니다' });
    }

    await this.followService.unfollow(user_id, following_user_id);
    return Object.assign({ message: '팔로우 취소 성공' });
  }

  @Get()
  @UsePipes(ValidationPipe)
  followStatus(@Body('user_id') user_id: number) {
    return this.followService.followStatus(user_id);
  }
}
