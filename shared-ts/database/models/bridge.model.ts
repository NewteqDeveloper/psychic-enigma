import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.model';
import { BridgeType, bridgeTypeValues } from '../types/bridge.type';

@Entity()
export class Bridge {
  @PrimaryGeneratedColumn('identity')
  id!: number;

  @ManyToOne(() => User, (user) => user.bridges, { nullable: false })
  user!: User;

  @Column({ type: 'enum', enum: bridgeTypeValues })
  type!: BridgeType;
}
