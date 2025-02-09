import { Form } from "@/features/form/components/form";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import { useTermsAndConditions } from "@/features/employee/review/hooks/useQueries";
import { useStore } from "@/features/employee/review/hooks/useStore";
import { defaultValues, schema, Schema } from "@/features/employee/review/types/schema";
import { useEmployeeWrapperStore } from "@/features/employee/wrapper/hooks/useStore";
import { Checkbox } from "@/features/form/components/controllers/checkbox";
import { d } from "@/utils/dictionary";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SubmitHandler } from "react-hook-form";

const Page = () => {
  const termsAndConditionsQuery = useTermsAndConditions();

  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Stack
          sx={{
            gap: 2,
            overflow: "hidden",
          }}
        >
          {termsAndConditionsQuery.data?.map((item) => (
            <Box key={item.title}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">{item.content}</Typography>
            </Box>
          ))}
        </Stack>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Checkbox<Schema>
          name="termsAndConditionsAccepted"
          label={`${d.iAcceptTermsAndConditions}.`}
        />
      </Grid>
    </>
  );
};

type ProviderProps = {
  readOnly?: boolean;
};
const Provider = ({ readOnly }: ProviderProps) => {
  const { updateSummaryDialogOpen } = useEmployeeWrapperStore();
  const { formData, updateFormData, updateIsSubmitted } = useStore();

  const handleSubmit: SubmitHandler<Schema> = (data) => {
    updateFormData(data);
    updateSummaryDialogOpen(true);
    updateIsSubmitted(true);
  };

  const handleError = () => {
    updateIsSubmitted(true);
  };

  return (
    <Form
      schema={schema}
      slotProps={{
        submitButtonProps: { startIcon: <SendOutlinedIcon /> },
      }}
      values={formData}
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      onError={handleError}
      readOnly={readOnly}
      title={d.review}
    >
      <Page />
    </Form>
  );
};

export { Provider as EmployeeReview };
