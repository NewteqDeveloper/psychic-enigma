import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bridge } from './bridge.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ name: 'user_pk' })
  id!: number;

  @Column({ nullable: false, unique: true })
  username!: string;

  @Column({ nullable: false, unique: true })
  email!: string;

  @Column({ nullable: false, unique: true })
  password!: string;

  @OneToMany(() => Bridge, (bridge) => bridge.user)
  bridges!: Bridge[];
}
