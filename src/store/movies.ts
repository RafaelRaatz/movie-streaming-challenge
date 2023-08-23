import { create } from 'zustand';

interface IStore {
  theme: string;
  updateTheme: (newTheme: string) => void;
}

export const useMovieStore = create<IStore>((set) => ({
  theme: '',
  updateTheme: (newTheme: string) => {
    set({ theme: newTheme });
  },
}));
