import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Follow } from './follow.entity';

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private followRepository: Repository<Follow>,
  ) {}

  async follow(user_id: number, following_user_id: number) {
    const follow = new Follow();
    follow.user_id = user_id;
    follow.following_user_id = following_user_id;

    await this.followRepository.save(follow);
  }

  async followStatus(user_id: number) {
    return this.followRepository.findOne({ where: { user_id } });
  }

  async checkFollowingStatus(
    user_id: number,
    following_user_id: number,
  ): Promise<any> {
    const status = await this.followRepository.findOne({
      where: { user_id, following_user_id },
    });
    return status;
  }

  async unfollow(user_id: number, following_user_id: number): Promise<any> {
    await this.followRepository.delete({ user_id, following_user_id });
  }
}
