import { Column, Entity, OneToMany, PrimaryColumn, Unique } from 'typeorm';
import { Bridge } from './bridge.model';

@Unique('uq_user', ['mxid'])
@Entity()
export class User {
  @PrimaryColumn()
  mxid!: string;

  @Column()
  password!: string;

  @OneToMany(() => Bridge, (bridge) => bridge.user)
  bridges!: Bridge[];
}
