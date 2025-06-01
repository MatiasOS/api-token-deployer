import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Oft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany(() => Oft_Peer, (peer) => peer.deployHash)
  peers: Oft_Peer[];
}

@Entity()
export class Oft_Peer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deployHash: string;

  @Column()
  address: string;

  @Column()
  chainId: string;

  @Column()
  distributor: string;

  @Column()
  deployHashDistributor: string;

  @Column({ type: 'jsonb', nullable: true })
  tree: string;
}
