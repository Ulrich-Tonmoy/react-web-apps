import { defaultValues, Schema } from "@/features/employee/review/types/schema";
import { createStore } from "@/utils/createStore";

type State = {
  formData: Schema;
  isSubmitted: boolean;
};

type Actions = {
  updateFormData: (data: State["formData"]) => void;
  updateIsSubmitted: (is: State["isSubmitted"]) => void;
};

type Store = State & Actions;

const useStore = createStore<Store>(
  (set) => ({
    formData: defaultValues,
    updateFormData: (data) =>
      set((state) => {
        state.formData = data;
      }),
    isSubmitted: false,
    updateIsSubmitted: (is) =>
      set((state) => {
        state.isSubmitted = is;
      }),
  }),

  {
    name: "employee-review-store",
  }
);

export { useStore, useStore as useEmployeeReviewStore };
