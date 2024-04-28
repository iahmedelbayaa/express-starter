import { Request, Response } from "express";
import { UserService } from "../services/user.service";


export class UserController {
    private userService: UserService;
    
    constructor() {
        this.userService = new UserService();
    }

    async getUsers(req: Request, res: Response) {
        const users = await this.userService.getUsers();
        res.status(200).json(users);
    }

    async createUser(req: Request, res: Response) {
        const user = await this.userService.createUser(req.body);
        res.status(201).json(user);
    }

    async updateUser(req: Request, res: Response) {
        const userId  = +(req.params.id);
        const user = await this.userService.updateUser(userId, req.body);
        res.status(200).json(user);
    }

    async deleteUser(req: Request, res: Response) {
        const userId  = +(req.params.id);
        await this.userService.deleteUser(userId);
        res.status(204).send();
    }

}