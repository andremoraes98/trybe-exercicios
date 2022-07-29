import connection from "../models/connection";
import User from '../../interfaces/users.interface'
import UserModel from "../models/users.model";

class UserService {
  public model: UserModel

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const result = await this.model.getAll();

    return result;
  }
}

export default UserService;