export type TUser = {
  name: string;
  role: string;
  email: string;
  password: string;
  phoneNumber: string;
  token: string;
};

export type TProduct = {
  _id?: string;
  path: string;
  price: string;
  itemName: string;
  description: string;
};
