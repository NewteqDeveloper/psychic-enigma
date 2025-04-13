export type UserDto = {
  mxid: string;
  password: string;
};

export type LoginDto = UserDto;
export type CreateUserDto = UserDto;
export type AdminValidateUserDto = UserDto;
