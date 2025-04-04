import { create } from "zustand";
import toast, { Toaster } from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";

export const useChatStore = create((set) => ({
  messages: [],
  Users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ Users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async () => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${id}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  setSelctedUser: (selectedUser) => {
    set({ selectedUser: user });
  },
}));
