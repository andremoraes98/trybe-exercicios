import { Request, Response } from "express";
import UserService from "../services/user.service";

class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();

    res.status(200).json(users);
  }
}

export default UserController;