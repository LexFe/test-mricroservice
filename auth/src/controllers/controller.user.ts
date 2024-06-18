import { UserService } from '../services/index';
import { TypedRoute } from '../common/helpers/index';
import { BaseController } from '../common/helpers/base-controller';
import { bodySchema, querySchema } from '../schema';
import { z } from 'zod';

const route = new TypedRoute();

export class UserController extends BaseController {
  constructor(protected readonly service: UserService) {
    super();
  }

  getById = route
    .get('/:id')
    .params(
      z.object({
        id: z.string().uuid(),
      }),
    )
    .handler(async ({ params }) => {
      const { id } = params;
      const data = await this.service.getUserById(id);
      return {
        data,
      };
    });

  getAll = route
    .get('/')
    .query(querySchema)
    .handler(async ({ query }) => {
      const skip = query.skip || 0;
      const data = await this.service.getAllUsers(skip, 10);
      return {
        data,
      };
    });

    create = route.post('/').body(bodySchema).handler(async ({ body }) => {
      const data = await this.service.createUser(body);
      return {
        data ,
      };
    });
}
