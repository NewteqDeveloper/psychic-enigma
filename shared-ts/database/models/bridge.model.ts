import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.model';
import { BridgeType, bridgeTypeValues } from '../types/bridge.type';

@Entity()
export class Bridge {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'bridge_port' })
  port!: number;

  @ManyToOne(() => User, (user) => user.bridges)
  user!: User;

  @Column({ type: 'enum', enum: bridgeTypeValues })
  type!: BridgeType;
}
