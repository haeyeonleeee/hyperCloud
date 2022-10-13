import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserDto } from './dto/userDto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private userService : UsersService) {}

    @Post('/signup')
    async signUp(@Body() userDto: UserDto) {
        if(!userDto.email || !userDto.password){
            throw new HttpException('Error: KeyError', HttpStatus.BAD_REQUEST);
        }
        
        await this.userService.signUpService(userDto);

        return Object.assign({'SUCCESS': 'SignUp'});
    }

    @Post('/signin')
    async signIn(@Body() userDto: UserDto) {
        if(!userDto.email || !userDto.password){
            throw new HttpException('KeyError', HttpStatus.BAD_REQUEST);
        }
        const token = await this.userService.signInService(userDto);
        return Object.assign({'SUCCESS': 'SignIn', token: token});
    }
}
