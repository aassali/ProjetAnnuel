import { UserShape } from '../user/user/UserShape';

export class User {
  public constructor(
    public readonly id: number,
    public readonly firstName: string,
    public readonly favoriteDrink: number,
    public readonly favoriteBar: number,
  ) {}

  public static NEW(data: UserShape): User {
    return new User(data.id, data.firstName, data.favoriteDrink, data.favoriteBar);
  }

  public static NEW_BUNCH(data: UserShape[]): User[] {
    return data.map(User.NEW);
  }
}
