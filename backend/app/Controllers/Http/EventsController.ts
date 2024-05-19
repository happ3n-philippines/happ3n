import CreateEventValidator from 'App/Validators/CreateEventValidator';
import { EventEntity, EventStatus } from 'Database/entities/event';
import { UserEntity } from 'Database/entities/user';
import { ic } from 'azle';
import { Response, Request } from 'express';

export default class EventsController {
  static async create(request: Request, response: Response) {
    try {
      const { data, success, error } = CreateEventValidator.validate(request.body);

      if (!success) {
        response.status(400);
        const { path, message } = error.issues?.[0];

        return response.json({
          status: 0,
          message: `${path?.join('.')}: ${message}`,
        });
      }

      const dataSource = await database.getDataSource();

      const findUser = await dataSource.getRepository(UserEntity).findOneBy({
        principal_id: ic.caller().toText(),
      });

      if (!findUser) {
        response.status(400);
        return response.json({
          status: 0,
          message: 'User not found.',
        });
      }

      const eventData: Partial<EventEntity> = {
        ...data,
        user: findUser,
        status: EventStatus.SHOWN,
        created_at: Date.now(),
        updated_at: Date.now(),
      };

      await dataSource.getRepository(EventEntity).save(eventData);

      return response.json({
        status: 1,
        message: 'Event created successfully!',
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }

  static async view_all_by_user(request: Request, response: Response) {
    try {
      const dataSource = await database.getDataSource();
      const userRepository = dataSource.getRepository(UserEntity);
      const findUser = await userRepository.findOneBy({ principal_id: ic.caller().toText() });

      if (!findUser) {
        response.status(400);
        return response.json({
          status: 0,
          message: 'User not found.',
        });
      }

      const findEvents = await dataSource.getRepository(EventEntity).find({
        where: { user: findUser },
        relations: ['user'],
        select: {
          user: {
            name: true,
            username: true,
          },
        },
      });

      return response.json({
        status: 1,
        data: findEvents,
      });
    } catch (error: any) {
      response.status(400);
      return response.json({
        status: 0,
        message: error.message,
      });
    }
  }
}