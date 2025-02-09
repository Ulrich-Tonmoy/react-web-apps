import { AutocompleteOption } from "@/features/form/components/controllers/autocomplete";
import { wait } from "@/utils/wait";

const states = [
  {
    label: "California",
    value: "CA",
    cities: [
      { label: "Los Angeles", value: "los_angeles" },
      { label: "San Francisco", value: "san_francisco" },
      { label: "San Diego", value: "san_diego" },
      { label: "San Jose", value: "san_jose" },
    ],
  },
  {
    label: "Texas",
    value: "TX",
    cities: [
      { label: "Houston", value: "houston" },
      { label: "Dallas", value: "dallas" },
      { label: "Austin", value: "austin" },
      { label: "San Antonio", value: "san_antonio" },
    ],
  },
  {
    label: "New York",
    value: "NY",
    cities: [
      { label: "New York City", value: "new_york_city" },
      { label: "Buffalo", value: "buffalo" },
      { label: "Rochester", value: "rochester" },
      { label: "Albany", value: "albany" },
    ],
  },
  {
    label: "Florida",
    value: "FL",
    cities: [
      { label: "Miami", value: "miami" },
      { label: "Orlando", value: "orlando" },
      { label: "Tampa", value: "tampa" },
      { label: "Jacksonville", value: "jacksonville" },
    ],
  },
  {
    label: "Illinois",
    value: "IL",
    cities: [
      { label: "Chicago", value: "chicago" },
      { label: "Aurora", value: "aurora" },
      { label: "Naperville", value: "naperville" },
      { label: "Springfield", value: "springfield" },
    ],
  },
];

const getStates = async (): Promise<AutocompleteOption[]> => {
  await wait();
  return states.map((item) => ({
    label: item.label,
    value: item.value,
  }));
};

const getCities = async (state: string): Promise<AutocompleteOption[]> => {
  await wait();

  return (
    states
      .find((item) => item.value === state)
      ?.cities.map((item) => ({
        label: item.label,
        value: item.value,
      })) ?? []
  );
};

export { getStates, getCities };
