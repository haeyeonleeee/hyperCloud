import {
  BadRequestException,
  ConsoleLogger,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board_status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [
    BoardStatus.PUBLIC,
    BoardStatus.FRIEND,
    BoardStatus.PRIVATE,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status option`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
