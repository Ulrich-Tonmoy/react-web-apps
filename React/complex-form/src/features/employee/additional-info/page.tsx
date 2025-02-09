import { References } from "@/features/employee/additional-info/components/references";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useStore } from "@/features/employee/additional-info/hooks/useStore";
import {
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/additional-info/types/schema";
import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { Slider } from "@/features/form/components/controllers/slider";
import { TextField } from "@/features/form/components/controllers/text-field";
import { Form } from "@/features/form/components/form";
import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";
import { startOfToday } from "date-fns";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

const Page = () => {
  return (
    <>
      <Grid size={{ xs: 6 }}>
        <TextField<Schema> name="portfolioLink" label={d.portfolioLink} />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <DatePicker<Schema>
          name="availabilityToStart"
          label={d.availabilityToStart}
          minDate={startOfToday()}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Slider<Schema>
          name="salaryExpectations"
          label={d.salaryExpectations}
          min={12000}
          max={400000}
          unit="$"
          step={10000}
          valueLabelDisplay="on"
        />
      </Grid>

      <References />
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
    navigate("/employee/review");
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
      title={d.additionalInfo}
    >
      <Page />
    </Form>
  );
};

export { Provider as EmployeeAdditionalInfo };
