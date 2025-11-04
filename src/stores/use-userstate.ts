import { create } from "zustand";
import { TUser } from "@/types/t-user";
import { immer } from "zustand/middleware/immer";
import { getUser, loginUser, registerUser } from "@/service/net";
import { error, success } from "@/lib/toast";

export const useSessionState = create<{
  user: TUser;
  token: string;
  loading: boolean;
  loggedIn: boolean;
  isVerified: boolean;
  registerUser: () => void;
  loginUser: () => void;
  getDeviceId: () => string;
  updateEmail: (email: string) => void;
  updatePhone: (phoneNumber: string) => void;
  updatePassword: (password: string) => void;
  updateName: (name: string) => void;
  initializeUser: () => void;
}>()(
  immer((set, get) => ({
    user: {
      email: "",
      password: "",
      phoneNumber: "",
      name: "",
      role: "",
      token: "",
    },
    token: "",
    loading: false,
    loggedIn: false,
    isVerified: false,
    updateEmail: (email: string) => {
      set((state) => {
        state.user.email = email;
      });
    },
    updatePhone: (phoneNumber: string) => {
      set((state) => {
        state.user.phoneNumber = phoneNumber;
      });
    },
    updatePassword: (password: string) => {
      set((state) => {
        state.user.password = password;
      });
    },
    updateName: (name: string) => {
      set((state) => {
        state.user.name = name;
      });
    },
    getDeviceId: () => {
      let deviceId = localStorage.getItem("deviceId");
      if (!deviceId) {
        deviceId =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        localStorage.setItem("deviceId", deviceId);
      }
      return deviceId;
    },
    initializeUser: async () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      if (!token || !user) {
        set((state) => {
          state.isVerified = true;
        });
        return;
      }
      set((state) => {
        state.loading = true;
      });
      const response = await getUser(token, get().getDeviceId());
      if (!response.success) {
        set((state) => {
          state.isVerified = true;
          state.loading = false;
          state.loggedIn = false;
        });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("deviceId");
        window.location.href = "/login";
        return;
      }
      set((state) => {
        state.user = JSON.parse(user);
        console.log("the user is "+state.user);
        state.isVerified = true;
        state.loading = false;
        state.loggedIn = true;
      });
    },
    registerUser: async () => {
      if (get().user.name.trim().split(" ").length < 2) {
        return error("Please enter fullname");
      }
      if (get().user.email.trim().length < 2) {
        return error("Please enter email");
      }
      set((state) => {
        state.loading = true;
      });
      const response = await registerUser(get().user, get().getDeviceId());
      set((state) => {
        state.loading = false;
      });
      if (!response.success) {
        error(response.message ?? "There was error registering");
        return;
      }
      success("registration was succefull");
      localStorage.setItem("token", response.token ?? "-");
      localStorage.setItem("user", JSON.stringify(response.user));
      window.location.href = "/";
    },
    loginUser: async () => {
      set((state) => {
        state.loading = true;
      });
      const response = await loginUser(
        get().user.email,
        get().user.password,
        get().getDeviceId()
      );
      set((state) => {
        state.loading = false;
      });
      if (!response.success) {
        error(response.message ?? "There was error registering");
        return;
      }
      success("login was succefull");
      localStorage.setItem("token", response.token ?? "-");
      localStorage.setItem("user", JSON.stringify(response.user));
      window.location.href = "/";
    },
  }))
);
