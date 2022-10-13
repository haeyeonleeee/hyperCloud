import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/userDto';
import { User } from './users.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async signUpService(userDto: UserDto){
        const findUser: UserDto = await this.repository.findOne({where:{email: userDto.email}});
        if(findUser){
            throw new ConflictException('Duplicate Email');  
        }
        userDto.password = await bcrypt.hash(userDto.password,12);
        await this.repository.save(userDto);
    }

    async signInService(userDto: UserDto){
        const findUser: UserDto = await this.repository.findOne({where:{email: userDto.email}});
        if(findUser){
            const comparePassword = await bcrypt.compare(userDto.password, findUser.password);
            if(!comparePassword) {
                throw new UnauthorizedException('Invalid Password');
            }
            const token = this.jwtService.sign({ id: findUser.email});
            return token;
        }
        else{
            throw new UnauthorizedException('Invalid User');
        }
    }
}
