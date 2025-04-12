import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'matrix' })
export class User {
  @PrimaryGeneratedColumn({})
  id!: number;

  @Column({ length: 255, nullable: false, unique: true })
  username!: string;

  @Column({ nullable: false, unique: true })
  email!: string;
}
