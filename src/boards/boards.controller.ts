import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Header,
  Headers,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board_status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardStatusValidationPipe } from './pipes/board_status_validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createBoardDto: CreateBoardDto,
    @Headers('user_id') user_id: number,
  ) {
    return this.boardsService.create(createBoardDto, user_id);
  }

  @Get('/all')
  findAll() {
    return this.boardsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.boardsService.getBoardById(+id);
  }

  @Get()
  @UsePipes(ValidationPipe)
  getBoardByUser(@Headers('user_id') user_id: number) {
    return this.boardsService.getBoardByUser(user_id);
  }

  @Patch('/content/:id')
  updateBoard(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBoardDto: UpdateBoardDto,
    @Headers('user_id') user_id: number,
  ) {
    return this.boardsService.updateBoard(+id, updateBoardDto, user_id);
  }

  @Patch('/status/:id')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
    @Headers('user_id') user_id: number,
  ) {
    return this.boardsService.updateBoardStatus(id, status, user_id);
  }

  @Delete('/:id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Headers('user_id') user_id: number,
  ) {
    return this.boardsService.remove(+id, user_id);
  }
}
