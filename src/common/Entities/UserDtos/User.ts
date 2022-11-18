import { UserDto } from "./UserDto";

export type User = null | {
  userDto: UserDto;
  userRoles: Array<string>;
}