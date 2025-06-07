import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SupportedChainId } from 'src/shared/types/chainId.types';
import { Oft } from './oft.entity';
import { StandardMerkleTree } from '@openzeppelin/merkle-tree';

@Entity('oft_peers')
export class OftPeer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true })
  deployTxHash?: string;

  @Column({ nullable: true })
  address?: string;

  @Column()
  chainId: SupportedChainId;

  @Column({ nullable: true })
  distributor?: string;

  @Column({ nullable: true })
  distributorDeployTxHash?: string;

  @Column({ type: 'jsonb', nullable: true })
  tree?: Partial<StandardMerkleTree<[string, string]>>;

  @ManyToOne(() => Oft, (oft) => oft.peers)
  oft: Oft;
}
