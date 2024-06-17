import { UserModel }  from "../models/index";
export interface UserService {
    getCustomers(): UserModel[],
}