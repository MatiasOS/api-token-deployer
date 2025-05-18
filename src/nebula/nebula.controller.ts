import { Controller, Post, Body } from '@nestjs/common';
import { NebulaResponse, NebulaService } from './nebula.service';
import { CreateNebulaDto } from './dto/create-nebula.dto';

@Controller('nebula')
export class NebulaController {
  constructor(private readonly nebulaService: NebulaService) {}

  @Post()
  create(@Body() createNebulaDto: CreateNebulaDto): Promise<NebulaResponse> {
    return this.nebulaService.create(createNebulaDto.message);
  }
}
