import {  PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';

export class PrismaDatabase extends PrismaClient  {
    constructor() {
        super();
    }

    async initialize() {
        await this.$connect();
        this.$use(async (params , next) => {
            if (params.action === 'create' && params.model === 'User') {
                const user = params.args.data;
                const saltRounds = parseInt(process.env.SALT_ROUNDS || '10', 10);
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(user.password, salt);
                user.password = hash;
                params.args.data = user;
            }
            return next(params);
        });
    }

    async disconnect() {
        await this.$disconnect();
    }
}