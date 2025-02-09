import { AutocompleteOption } from "@/features/form/components/controllers/autocomplete";
import { wait } from "@/utils/wait";

const getEmploymentStatuses = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return [
    {
      label: "Employed Full Time",
      value: "1",
    },
    {
      label: "Employed Half Time",
      value: "2",
    },
    {
      label: "Unemployed",
      value: "3",
    },
    {
      label: "Student",
      value: "4",
    },
    {
      label: "Other",
      value: "5",
    },
  ];
};

const getReasonsForLeaving = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return [
    {
      label: "Career Advancement",
      value: "1",
    },
    {
      label: "Relocation",
      value: "2",
    },
    {
      label: "Personal Reasons",
      value: "3",
    },
    {
      label: "Other",
      value: "4",
    },
  ];
};

const getDegrees = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return [
    {
      label: "High School Diploma",
      value: "1",
    },
    {
      label: "Associate Degree",
      value: "2",
    },
    {
      label: "Bachelor Degree",
      value: "3",
    },
    {
      label: "Master Degree",
      value: "4",
    },
    {
      label: "Doctorate",
      value: "5",
    },
  ];
};

export { getDegrees, getEmploymentStatuses, getReasonsForLeaving };
