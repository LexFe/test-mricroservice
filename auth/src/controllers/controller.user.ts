import { UserService } from '../services/index';
import { TypedRoute } from '../common/helpers/index';
import { BaseController } from '../common/helpers/base-controller';
import { z } from 'zod';

const route = new TypedRoute();

const querySchema = z.object({
  skip: z.preprocess(
    (val) => (val !== undefined ? Number(val) : 0),
    z.number().int().nonnegative().optional()
  ),
});

export class UserController extends BaseController {
  constructor(protected readonly service: UserService) {
    super();
  }

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
}
