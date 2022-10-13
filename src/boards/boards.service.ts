import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardStatus } from './board_status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async create(createBoardDto: CreateBoardDto, user_id: number) {
    const { title, description } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user_id,
    });

    await this.boardRepository.save(board);
    return board;
  }

  async findAll() {
    const found = await this.boardRepository.find();
    if (!found) {
      throw new NotFoundException(`Can't find Board`);
    }
    return found;
  }

  async getBoardById(id: number) {
    const found = await this.boardRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  async getBoardByUser(user_id: number) {
    // const query = this.boardRepository.createQueryBuilder('board');
    // query.where('board.user_id = :userId', { userId: user_id });

    // const found = await query.getMany();

    const found = await this.boardRepository.find({
      where: { user_id },
    });

    if (!found) {
      throw new NotFoundException(`Can't find Board with user_id ${user_id}`);
    }
    return found;
  }

  async updateBoard(
    id: number,
    updateBoardDto: UpdateBoardDto,
    user_id: number,
  ) {
    const board = await this.boardRepository.findOne({
      where: { id, user_id },
    });
    if (!board) {
      throw new NotFoundException(`Not Authorization`);
    }

    await this.boardRepository.update(id, updateBoardDto);
    const updateboard = await this.boardRepository.findOne({
      where: { id, user_id },
    });
    return updateboard;
  }

  async updateBoardStatus(id: number, status: BoardStatus, user_id: number) {
    const board = await this.boardRepository.findOne({
      where: { id, user_id },
    });
    if (!board) {
      throw new NotFoundException(`Not Authorization`);
    }

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }

  async remove(id: number, user_id: number) {
    const board = await this.boardRepository.findOne({
      where: { id, user_id },
    });
    if (!board) {
      throw new NotFoundException(`Not Authorization`);
    }
    await this.boardRepository.delete({ id, user_id });
    return `${user_id}'s post ${id} has been deleted`;
  }
}
