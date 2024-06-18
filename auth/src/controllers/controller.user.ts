import { UserService } from '../services/index';
import { TypedRoute } from '../common/helpers/index';
import { BaseController } from '../common/helpers/base-controller';
import { z } from 'zod';

const route = new TypedRoute();

export class UserController extends BaseController {
  constructor(protected readonly service: UserService) {
    super();
  }

  getAll = route
    .get('/')
    .params(
      z.object({
        skip: z.number(),
        take: z.number(),
      }),
    )
    .handler(async ({ params }) => {
      const data = await this.service.getAllUsers(params.skip, params.take);
      return {
        data
      };
    });
}
