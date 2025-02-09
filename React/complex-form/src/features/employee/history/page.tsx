import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { Form } from "@/features/form/components/form";
import { TextField } from "@/features/form/components/controllers/text-field";
import { EducationalInstitutions } from "@/features/employee/history/components/educational-institutions";
import { PreviousEmployers } from "@/features/employee/history/components/previous-employers";
import {
  useDegrees,
  useEmploymentStatuses,
  useReasonsForLeaving,
} from "@/features/employee/history/hooks/useQueries";
import { useStore } from "@/features/employee/history/hooks/useStore";
import {
  defaultValues,
  ReasonForLeavingEnum,
  schema,
  Schema,
} from "@/features/employee/history/types/schema";
import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { useFormContext } from "@/features/form/hooks/useFormContext";

const Page = () => {
  const employmentStatusesQuery = useEmploymentStatuses();
  const reasonsForLeavingQuery = useReasonsForLeaving();
  const degreesQuery = useDegrees();

  const { control } = useFormContext<Schema>();

  const reasonsForLeavingPreviousJobs = useWatch({
    control,
    name: "reasonsForLeavingPreviousJobs",
  });

  return (
    <>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="currentEmploymentStatus"
          options={employmentStatusesQuery.data}
          textFieldProps={{ label: d.currentEmploymentStatus }}
        />
      </Grid>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema>
          name="highestDegreeObtained"
          options={degreesQuery.data}
          textFieldProps={{ label: d.highestDegreeObtained }}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema, true>
          name="reasonsForLeavingPreviousJobs"
          options={reasonsForLeavingQuery.data}
          textFieldProps={{ label: d.reasonsForLeavingPreviousJobs }}
          multiple={true}
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        {reasonsForLeavingPreviousJobs.includes(
          ReasonForLeavingEnum.enum.OTHER
        ) && (
          <TextField<Schema>
            name="otherReasonsForLeaving"
            label={d.otherReasonsForLeaving}
            multiline
            maxRows={4}
          />
        )}
      </Grid>

      <PreviousEmployers />
      <EducationalInstitutions />
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};
const Provider = ({ readOnly }: ProviderProps) => {
  const navigate = useNavigate();

  const { formData, updateFormData } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    navigate("/employee/skills");
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
      title={d.history}
    >
      <Page />
    </Form>
  );
};

export { Provider as EmployeeHistory };
