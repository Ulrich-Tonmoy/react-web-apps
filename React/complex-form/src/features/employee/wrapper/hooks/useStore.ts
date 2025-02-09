import { createStore } from "@/utils/createStore";

type State = {
  summaryDialogOpen: boolean;
};

type Actions = {
  updateSummaryDialogOpen: (is: State["summaryDialogOpen"]) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    summaryDialogOpen: false,
    updateSummaryDialogOpen: (is) =>
      set((state) => {
        state.summaryDialogOpen = is;
      }),
  }),
  {
    name: "employee-wrapper-store",
  }
);

export { useStore, useStore as useEmployeeWrapperStore };
