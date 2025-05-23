import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { OftService } from './oft.service';
import { CreateOftDto } from './dto/create-oft.dto';
import { ConfigureOftDto } from './dto/configure-oft.dto';
@Controller('oft')
export class OftController {
  constructor(private readonly oftService: OftService) {}

  @Post()
  create(@Body() createOftDto: CreateOftDto) {
    return this.oftService.create(createOftDto);
  }

  @Get()
  getDeployAddress(
    @Query('txHash') txHash: `0x${string}`,
    @Query('blockchain')
    blockchain: 'ethereum' | 'mantle' | 'arbitrum',
  ) {
    return this.oftService.getByTxHash({ txHash, blockchain });
  }

  @Post('/configure')
  configure(@Body() configureOftDto: ConfigureOftDto) {
    return this.oftService.configure(configureOftDto);
  }
}
