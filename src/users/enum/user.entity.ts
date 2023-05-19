import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../roles/entities/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.BUYER })
  role: Role;
}