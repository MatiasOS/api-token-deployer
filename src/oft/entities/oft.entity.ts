import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OftPeer } from './oftPeers.entity';

@Entity('ofts')
export class Oft {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @OneToMany(() => OftPeer, (peer) => peer.oft)
  peers: OftPeer[];
}
