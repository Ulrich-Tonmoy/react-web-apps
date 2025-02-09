import { createStore } from "@/utils/createStore";

type State = {
  drawerOpen: boolean;
};

type Actions = {
  updateDrawerOpen: (data: State["drawerOpen"]) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    drawerOpen: true,
    updateDrawerOpen: (is) =>
      set((state) => {
        state.drawerOpen = is;
      }),
  }),
  {
    name: "layout",
  }
);

export { useStore };
