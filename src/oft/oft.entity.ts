import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Oft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany(() => Oft_Peer, (peer) => peer.oft)
  peers: Oft_Peer[];
}

@Entity()
export class Oft_Peer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deployTxHash: string;

  @Column()
  address: string;

  @Column()
  chainId: string;

  @Column()
  distributor: string;

  @Column()
  distributorDeployTxHash: string;

  @Column({ type: 'jsonb', nullable: true })
  tree: string;

  @ManyToOne(() => Oft, (oft) => oft.peers)
  oft: Oft;
}
