import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.model';
import { BridgeType } from '../types/bridge.type';

@Entity()
export class Bridge {
  @PrimaryGeneratedColumn({ name: 'bridge_pk' })
  id!: number;

  @ManyToOne(() => User, (user) => user.bridges, { nullable: false })
  user!: User;

  @Column({ nullable: false })
  type!: BridgeType;

  @Column({ nullable: false, unique: true })
  bridgePort!: number;
}
