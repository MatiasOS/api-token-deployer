import { SupportedChainId } from 'src/shared/types/chainId.types';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Ofts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany(() => Oft_Peers, (peer) => peer.oft)
  peers: Oft_Peers[];
}

@Entity()
export class Oft_Peers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  deployTxHash: string;

  @Column({ nullable: true })
  address: string;

  @Column()
  chainId: SupportedChainId;

  @Column({ nullable: true })
  distributor: string;

  @Column({ nullable: true })
  distributorDeployTxHash: string;

  @Column({ type: 'jsonb', nullable: true })
  tree: string;

  @ManyToOne(() => Ofts, (oft) => oft.peers)
  oft: Ofts;
}
