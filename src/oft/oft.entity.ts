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

  @ManyToOne(() => Ofts, (oft) => oft.peers)
  oft: Ofts;
}
