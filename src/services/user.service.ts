import { AppDataSource } from '../db/dbConfig';
import { UserEntity } from '../entity/user.entity';
import { IUser } from '../interface/user.interface';


export class UserService {
    private UserRepository = AppDataSource.getRepository(UserEntity);

    async createUser(user: IUser): Promise<IUser> {
        return await this.UserRepository.save(user);
    }

    async getUsers(): Promise<IUser[]> {
        return await this.UserRepository.find();
    }

    async getUserById(id: number): Promise<IUser> {
        const user = await this.UserRepository.findOne({where: {id}});
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async updateUser(id: number, user: IUser): Promise<IUser> {
        const userExists = await this.UserRepository.findOne({where: {id}});
        if (!userExists) {
            throw new Error('User not found');
        }
        await this.UserRepository.update(id, user);
        return user;
    }

    async deleteUser(id: number): Promise<IUser> {
        const userExists = await this.UserRepository.findOne({where: {id}});
        if (!userExists) {
            throw new Error('User not found');
        }
        await this.UserRepository.delete(id);
        return userExists;
    }

}
