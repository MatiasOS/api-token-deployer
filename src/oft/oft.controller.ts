import { Controller, Post, Body } from '@nestjs/common';
import { OftService } from './oft.service';
import { CreateOftDto } from './dto/create-oft.dto';

@Controller('oft')
export class OftController {
  constructor(private readonly oftService: OftService) {}

  @Post()
  create(@Body() createOftDto: CreateOftDto) {
    return this.oftService.create(createOftDto);
  }
}
