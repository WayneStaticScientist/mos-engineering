"use server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserSchema from "@/models/user-model";
import { TUser } from "@/types/t-user";
import { CoonectToDb } from "./mongoconnect";
export const registerUser = async (
  user: TUser,
  deviceId: string
): Promise<{
  message?: string;
  success?: boolean;
  token?: string;
  user?: TUser;
}> => {
  try {
    await CoonectToDb();
    console.log("logging with user ", user);
    const count = await UserSchema.countDocuments({
      phoneNumber: user.phoneNumber,
    });
    if (count > 0) {
      return {
        message: `user with phonenumber ${user.phoneNumber} already exists`,
      };
    }
    user.role = "client";
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const tokenPayload = {
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: "client",
      deviceId,
    };
    const token = jwt.sign(
      tokenPayload,
      `${process.env.NEXT_PUBLIC_TOKEN_KEY}`,
      {
        expiresIn: "500d",
      }
    );
    user.token = token;
    await UserSchema.create(user);
    user.token = "";
    user.password = "";
    return {
      message: "user registration success",
      success: true,
      user: user,
      token: token,
    };
  } catch (e) {
    console.log(e);
    return {
      message: `Registration exited with error `,
    };
  }
};
export const loginUser = async (
  email: string,
  password: string,
  deviceId: string
): Promise<{
  message?: string;
  success?: boolean;
  user?: TUser;
  token?: string;
}> => {
  try {
    await CoonectToDb();
    const user = await UserSchema.findOne({ email });
    if (!user) return { message: "phone or password is incorrect." };
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { message: "email or password is incorrect." };
    }
    const { password: _password, token: _token, ...rest } = user.toObject();
    const tokenPayload = {
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: rest.role,
      deviceId,
    };
    const token = jwt.sign(
      tokenPayload,
      `${process.env.NEXT_PUBLIC_TOKEN_KEY}`,
      {
        expiresIn: "500d",
      }
    );
    await UserSchema.updateOne({ email }, { token });
    return { message: "login success", success: true, user: rest, token };
  } catch (e) {
    return {
      message: `Registration exited with error `,
    };
  }
};
export const getUser = async (
  claimId: string,
  deviceId: string
): Promise<{
  message?: string;
  success?: boolean;
  user?: TUser;
}> => {
  try {
    await CoonectToDb();
    const decoded = jwt.verify(claimId, `${process.env.NEXT_PUBLIC_TOKEN_KEY}`);
    if (!decoded || (decoded as any).deviceId !== deviceId) {
      return { message: "Unauthorized access", success: false };
    }
    const user = await UserSchema.findOne({
      email: (decoded as jwt.JwtPayload).email,
    });
    const { password: _password, token: _token, ...rest } = user.toObject();
    return { message: "login success", success: true, user: rest };
  } catch (error) {
    console.log("invalid token error or ", error);
    return {
      message: `Registration exited with error `,
    };
  }
};

export const getAdminStats = async (
  claimId: string,
  deviceId: string
): Promise<{
  message?: string;
  error?: boolean;
}> => {
  try {
    await CoonectToDb();
    const decoded = jwt.verify(claimId, `${process.env.NEXT_PUBLIC_TOKEN_KEY}`);
    if (
      !decoded ||
      (decoded as any).deviceId !== deviceId ||
      (decoded as any).role !== "admin"
    ) {
      return { message: "Unauthorized access", error: true };
    }
    // const user = await YouthSchema.findOne({
    //   email: (decoded as jwt.JwtPayload).email,
    // });
    // if (!user) {
    //   return { message: "Unauthorized access", error: true };
    // }
    // const userObject = user.toObject();
    // if (userObject.token !== claimId || userObject.role != "admin") {
    //   return { message: "Unauthorized access", error: true };
    // }
    // const stats = await StatisticSchema.findOne({ tag: "stats" });
    // if (!stats) {
    //   return { stats: returnDefaultStatics() };
    // }
    // return { stats: stats.toObject() };
  } catch (error) {
    console.log("invalid token error or ", error);
    return { message: "Invalid token or error occurred", error: true };
  }
  return { message: "Invalid token or error occurred", error: true };
};
