/* eslint-disable */
export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

type aaa = Partial<IProfile>;

type bbb = Required<IProfile>;

type ccc = Pick<IProfile, "name" | "age">;

type ddd = Omit<IProfile, "school">;

type eee = "apple" | "banana" | "peach";
let child1: eee = "apple";

type fff = Record<eee, IProfile>;

type ggg = keyof IProfile;

export interface IProfile {
  candy: number;
}
let profile: Partial<IProfile> = {
  candy: 10,
};
