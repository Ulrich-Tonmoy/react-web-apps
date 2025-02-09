import { DatePicker } from "@/features/form/components/controllers/date-picker";
import { ErrorMessage } from "@/features/form/components/error-message";
import { TextField } from "@/features/form/components/controllers/text-field";

import { Schema } from "@/features/employee/history/types/schema";
import { calculatePastDate } from "@/utils/calculatePastDate";
import { d } from "@/utils/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray } from "react-hook-form";
import { useFormContext } from "@/features/form/hooks/useFormContext";

const EducationalInstitutions = () => {
  const { control, readOnly } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "educationalInstitutions",
  });

  const handleAddClick = () => {
    append({
      degree: "",
      fieldOfStudy: "",
      graduationYear: calculatePastDate(1),
      institutionName: "",
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        size={{ xs: 12 }}
        id="educationalInstitutions"
      >
        <Typography variant="subtitle2">
          {d.educationalInstitutions}:
        </Typography>
        {!readOnly && (
          <IconButton onClick={handleAddClick} color="success">
            <AddCircleRoundedIcon />
          </IconButton>
        )}
      </Grid>
      {fields.map((field, index) => (
        <Grid spacing={2} container size={{ xs: 12 }} key={field.id}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={{ xs: 12 }}
          >
            <Chip
              label={`${d.institution} #${index + 1}:`}
              size="small"
              color="secondary"
            />
            {!readOnly && (
              <IconButton
                color="error"
                onClick={() => handleRemoveClick(index)}
              >
                <RemoveCircleOutlineRoundedIcon />
              </IconButton>
            )}
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              name={`educationalInstitutions.${index}.degree`}
              label={d.degree}
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              name={`educationalInstitutions.${index}.fieldOfStudy`}
              label={d.fieldOfStudy}
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <TextField<Schema>
              name={`educationalInstitutions.${index}.institutionName`}
              label={d.institutionName}
            />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <DatePicker<Schema>
              name={`educationalInstitutions.${index}.graduationYear`}
              maxDate={new Date()}
              label={d.graduationYear}
              minDate={calculatePastDate(100)}
            />
          </Grid>
        </Grid>
      ))}
      <Grid size={{ xs: 12 }}>
        <ErrorMessage<Schema> name="educationalInstitutions" />
      </Grid>
    </>
  );
};

export { EducationalInstitutions };
