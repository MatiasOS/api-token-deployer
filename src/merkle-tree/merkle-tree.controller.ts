import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { MerkleTreeService } from './merkle-tree.service';
import { CreateMerkleTreeDto } from './dto/create-merkle-tree.dto';
import { DeployMerkletreeDto } from './dto/deploy-merkle-tree.dto';
import { ConfigureMerkleTreeDto } from './dto/configure-merkle-tree.dto';
import { OftService } from 'src/oft/oft.service';
import { SupportedChainId } from 'src/shared/types/chainId.types';

@Controller('merkle-tree')
export class MerkleTreeController {
  constructor(
    private readonly merkleTreeService: MerkleTreeService,
    private readonly oftService: OftService,
  ) {}

  @Post('/build')
  create(@Body() createMerkleTreeDto: CreateMerkleTreeDto) {
    return this.merkleTreeService.create(createMerkleTreeDto);
  }

  @Post('/deploy')
  deploy(@Body() deployMerkletreeDto: DeployMerkletreeDto) {
    return this.merkleTreeService.deploy(deployMerkletreeDto);
  }

  @Get()
  getDeployAddress(
    @Query('txHash') txHash: `0x${string}`,
    @Query('chainId')
    chainId: SupportedChainId,
  ) {
    return this.merkleTreeService.getByTxHash({ txHash, chainId });
  }

  @Post('/configure')
  configure(@Body() configureMerkleTreeDto: ConfigureMerkleTreeDto) {
    return this.oftService.transfer({
      oftAddress: configureMerkleTreeDto.tokenAddress,
      merkleTreeAddress: configureMerkleTreeDto.merkleTreeAddress,
      chainId: configureMerkleTreeDto.chainId,
      transferAmount: configureMerkleTreeDto.transferAmount,
    });
  }
}
