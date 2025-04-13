import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.model';
import { BridgeType, bridgeTypeValues } from '../types/bridge.type';

@Entity()
export class Bridge extends BaseEntity {
  @PrimaryGeneratedColumn('identity', {
    primaryKeyConstraintName: 'pk_bridge_id',
  })
  id!: number;

  @ManyToOne(() => User, (user) => user.bridges, { nullable: false })
  user!: User;

  @Column({ nullable: false, type: 'enum', enum: bridgeTypeValues })
  type!: BridgeType;

  @Column({ nullable: false, unique: true })
  bridgePort!: number;
}
