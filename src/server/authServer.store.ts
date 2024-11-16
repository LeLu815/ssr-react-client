import { create } from "zustand";

interface AuthStore {
  email: string | null;
  profileUrl: string | null;
  nickname: string | null;
  actions: {
    setEmail: (email: string | null) => void;
    setProfileUrl: (url: string | null) => void;
    setNickname: (nickname: string | null) => void;
  };
}

const useAuthCreateStore = create<AuthStore>((set) => ({
  email: null,
  profileUrl: null,
  nickname: null,
  actions: {
    setEmail: (email) =>
      set({
        email: email,
      }),
    setProfileUrl: (url) =>
      set({
        profileUrl: url,
      }),
    setNickname: (nickname) =>
      set({
        nickname: nickname,
      }),
  },
}));

// atomic 설렉터
export const useEmail = () => useAuthCreateStore((state) => state.email);
export const useProfileUrl = () =>
  useAuthCreateStore((state) => state.profileUrl);
export const useNickname = () => useAuthCreateStore((state) => state.nickname);

// actions 분리
export const useAuthActions = () =>
  useAuthCreateStore((state) => state.actions);

export default useAuthCreateStore;
