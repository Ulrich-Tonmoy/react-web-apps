import { Form } from "@/features/form/components/form";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { TextField } from "@/features/form/components/controllers/text-field";
import {
  useCities,
  useStates,
} from "@/features/employee/personal-info/hooks/useQueries";
import { useStore } from "@/features/employee/personal-info/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/personal-info/types/schema";
import { calculatePastDate } from "@/utils/calculatePastDate";
import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  Autocomplete,
  AutocompleteOption,
} from "@/features/form/components/controllers/autocomplete";
import { useFormContext } from "@/features/form/hooks/useFormContext";

const Page = () => {
  const statesQuery = useStates();
  const citiesQuery = useCities();

  const { control, setValue } = useFormContext<Schema>();
  const state = useWatch({ control, name: "state" });

  const handleOptionSelect = (option: AutocompleteOption | null) => {
    if (!option) {
      setValue("city", "");
    }
  };

  return (
    <>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="firstName" label={d.firstName} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="lastName" label={d.lastName} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <DatePicker<Schema>
          name="dateOfBirth"
          label={d.dateOfBirth}
          maxDate={calculatePastDate(18)}
          minDate={calculatePastDate(100)}
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema> name="email" label={d.email} />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="phoneNumber"
          label={d.phoneNumber}
          format="phoneNumber"
        />
      </Grid>
      <Grid size={{ xs: 4 }}>
        <TextField<Schema>
          name="socialSecurityNumber"
          label={d.socialSecurityNumber}
          format="socialSecurity"
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="state"
          options={statesQuery.data}
          loading={statesQuery.isLoading}
          textFieldProps={{ label: d.state }}
          onOptionSelect={handleOptionSelect}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        {!!state && (
          <Autocomplete<Schema>
            name="city"
            options={citiesQuery.data}
            loading={citiesQuery.isLoading}
            textFieldProps={{ label: d.city }}
          />
        )}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField<Schema>
          name="streetAddress"
          label={d.streetAddress}
          multiline
          maxRows={4}
        />
      </Grid>
    </>
  );
};

type ProviderProps = { readOnly?: boolean };
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/employee/history");
  };

  return (
    <Form
      submitButtonText={d.saveAndContinue}
      slotProps={{
        submitButtonProps: { startIcon: <ArrowForwardIosRoundedIcon /> },
      }}
      schema={schema}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      readOnly={readOnly}
      title={d.personalInfo}
    >
      <Page />
    </Form>
  );
};

export { Provider as EmployeePersonalInfo };
