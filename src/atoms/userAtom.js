import {atom} from "recoil";

export const userAtom = atom({
  key: 'userState',
  default: {
    "first_name": "ola",
    "last_name": "",
    "email": "",
    "profile_picture_url": ""
  }
});
