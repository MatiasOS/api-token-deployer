import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { OftService } from './oft.service';
import { CreateOftDto } from './dto/create-oft.dto';
import { ConfigureOftDto } from './dto/configure-oft.dto';
import { SupportedChainId } from 'src/shared/types/chainId.types';
@Controller('oft')
export class OftController {
  constructor(private readonly oftService: OftService) {}

  @Post('/deploy')
  create(@Body() createOftDto: CreateOftDto) {
    return this.oftService.create(createOftDto);
  }

  @Get()
  getDeployAddress(
    @Query('txHash') txHash: `0x${string}`,
    @Query('chainId')
    chainId: SupportedChainId,
  ) {
    return this.oftService.getByTxHash({ txHash, chainId });
  }

  @Post('/configure')
  configure(@Body() configureOftDto: ConfigureOftDto) {
    return this.oftService.configure(configureOftDto);
  }
}
