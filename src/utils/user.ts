import { IUser } from "@/types/user";

export const useUserDetails = (user: IUser) => {
  return {
    fullName: `${user.firstName} ${user.maidenName} ${user.lastName}`,
    shortName: `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`,
    ...user,
  };
};
