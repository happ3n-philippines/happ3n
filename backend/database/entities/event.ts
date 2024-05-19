import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { UserEntity } from './user';

export enum EventType {
  PUBLIC = 0,
  PRIVATE = 1,
}

export enum EventStatus {
  HIDDEN = 0,
  SHOWN = 1,
}

export enum EventRequiredApproval {
  NOT_REQUIRED = 0,
  REQUIRED = 1,
}

@Entity({
  name: 'events',
})
export class EventEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity)
  user: UserEntity;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'bigint' })
  start_at: number;

  @Column({ type: 'bigint' })
  end_at: number;

  @Column({ type: 'text' })
  location: string;

  @Column({ type: 'int', default: EventRequiredApproval.NOT_REQUIRED })
  required_approval: EventRequiredApproval;

  @Column({ type: 'int', default: 0 })
  capacity: number;

  @Column({ type: 'text' })
  banner: string;

  @Column({ type: 'int', default: EventType.PUBLIC })
  type: EventType;

  @Column({ type: 'text', nullable: true })
  parameter: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int', default: 0 })
  feedback_count: number;

  @Column({ type: 'int', default: 0 })
  feedback_rate: number;

  @Column({ type: 'int', default: EventStatus.SHOWN })
  status: EventStatus;

  @Column({ type: 'bigint' })
  created_at: number;

  @Column({ type: 'bigint' })
  updated_at: number;
}
