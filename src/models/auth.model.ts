import { IAuthLoginResponse } from '@/api/scheme';
import { IUserInfo } from '@/types';

class AuthUserModel {
  #isNewUser: boolean;
  #user: IUserInfo;

  constructor(authData: IAuthLoginResponse) {
    this.#isNewUser = authData.isNewUser;
    this.#user = {
      email: authData.user.email,
      nickname: authData.user.nickname,
      profileImage: authData.user.profile_image,
    };
  }

  get isNewUser() {
    return this.#isNewUser;
  }

  get user() {
    return this.#user;
  }
}

export default AuthUserModel;
