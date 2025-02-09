import { AutocompleteOption } from "@/features/form/components/controllers/autocomplete";
import { wait } from "@/utils/wait";

const getRelationships = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return [
    { label: "Former Manager", value: "1" },
    { label: "Current Manager", value: "2" },
    { label: "Direct Supervisor", value: "3" },
    { label: "Team Lead", value: "4" },
    { label: "Project Manager", value: "5" },
    { label: "Colleague", value: "6" },
    { label: "Senior Colleague", value: "7" },
    { label: "Department Head", value: "8" },
    { label: "Professional Mentor", value: "9" },
    { label: "Client", value: "10" },
  ];
};

export { getRelationships };
