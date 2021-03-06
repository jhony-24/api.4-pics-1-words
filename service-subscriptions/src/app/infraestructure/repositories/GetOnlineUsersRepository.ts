import { inject, injectable } from "inversify";
import { GetOnlineProps, OnlineUsersAdapter } from "../../UseCases/UseCaseGetOnlineUsers";
import RedisReadSortedSet, { ReadOnlineDataAccessAdapter } from "../DataAccess/RedisReadSortedSet";

export const GET_USERS_ONLINE = Symbol("GET_USERS_ONLINE");

@injectable()
export default class GetOnlineUsersRepository implements OnlineUsersAdapter {
  constructor(@inject(RedisReadSortedSet) private readerDataAccess: ReadOnlineDataAccessAdapter) {}
  getOnline = async (parameters : GetOnlineProps) : Promise<any> => {
    try {
      return await this.readerDataAccess.read({
        value: "users:online",
        ...parameters,
      });
    }
    catch(error) {
      return null;
    }
  }
}