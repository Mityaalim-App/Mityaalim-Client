import { httpService } from "./httpService";

export const userService = {
  signup,
};

async function signup(userCred: object) {
  try {
    console.log("service", userCred);
    // const user = await httpService.post("auth/signup", userCred);
  } catch (err) {
    console.log(err);
  }
}
