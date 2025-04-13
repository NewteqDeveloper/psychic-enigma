import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bridge } from './bridge.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn('identity')
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => Bridge, (bridge) => bridge.user)
  bridges!: Bridge[];
}
