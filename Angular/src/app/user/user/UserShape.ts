import { UserModel } from './UserModel';

export class UserShape {
  public id!: number;
  public email!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public age!: number;
  public pseudo!: string;
  public favoriteDrink!: number;
  public favoriteBar!: number;

  public constructor(data: UserModel) {
    this.id = data.id;
    this.pseudo = data.pseudo;
    this.password = data.password;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.age = data.age;
    this.favoriteBar = data.favoriteBar;
    this.favoriteDrink = data.favoriteDrink;
  }

  public static NEW(data: UserModel): UserShape {
    return new UserShape(data);
  }

  public static NEW_BUNCH(data: UserModel[]): UserShape[] {
    return data.map(UserShape.NEW);
  }
}
