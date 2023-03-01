import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ key: "authToken" });

export const authTokenAtom = atom({
  key: "authToken",
  default: null,
  effects_UNSTABLE: [persistAtom],
  //   effects_UNSTABLE: [
  //     ({ setSelf }) => {
  //       localStorage.getItem("authToken")
  //         ? JSON.parse(localStorage.getItem(authToken))
  //         : setSelf([]);
  //     },
  //   ],
});

export const userAtom = atom({
  key: "user",
  default: null,
  //   effects_UNSTABLE: [persistAtom.access],
});
