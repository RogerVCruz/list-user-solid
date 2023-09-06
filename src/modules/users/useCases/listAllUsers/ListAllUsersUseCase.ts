import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // // Complete aqui

    const requestUser = this.usersRepository.findById(user_id);

    if (!requestUser) {
      throw new Error("Must be a valid user");
    }

    if (!requestUser.admin) {
      throw new Error("User must be an Admin");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
