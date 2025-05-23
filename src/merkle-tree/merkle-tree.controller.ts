import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { MerkleTreeService } from './merkle-tree.service';
import { CreateMerkleTreeDto } from './dto/create-merkle-tree.dto';
import { DeployMerkletreeDto } from './dto/deploy-merkle-tree.dto';

@Controller('merkle-tree')
export class MerkleTreeController {
  constructor(private readonly merkleTreeService: MerkleTreeService) {}

  @Post()
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
    @Query('blockchain')
    blockchain: 'ethereum' | 'mantle' | 'arbitrum',
  ) {
    return this.merkleTreeService.getByTxHash({ txHash, blockchain });
  }
}
