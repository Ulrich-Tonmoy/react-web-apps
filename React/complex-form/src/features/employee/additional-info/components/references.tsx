import { useRelationships } from "@/features/employee/additional-info/hooks/useQueries";

import { Schema } from "@/features/employee/additional-info/types/schema";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { TextField } from "@/features/form/components/controllers/text-field";
import { ErrorMessage } from "@/features/form/components/error-message";
import { useFormContext } from "@/features/form/hooks/useFormContext";
import { d } from "@/utils/dictionary";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { Chip, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useFieldArray } from "react-hook-form";
import { Fragment } from "react/jsx-runtime";

const References = () => {
  const relationshipsQuery = useRelationships();

  const { control, readOnly } = useFormContext<Schema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "references",
  });

  const handleAddClick = () => {
    append({
      name: "",
      relationship: "",
      contactInformation: "",
    });
  };

  const handleRemoveClick = (index: number) => {
    remove(index);
  };

  return (
    <>
      <Grid
        sx={{ display: "flex", alignItems: "center" }}
        size={12}
        id="references"
      >
        <Typography variant="subtitle2">{d.references}:</Typography>
        {!readOnly && (
          <IconButton onClick={handleAddClick} color="success">
            <AddCircleRoundedIcon />
          </IconButton>
        )}
      </Grid>
      {fields.map((field, index) => (
        <Fragment key={field.id}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            size={{ xs: 12 }}
          >
            <Chip
              label={`${d.reference} #${index + 1}:`}
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
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              name={`references.${index}.name`}
              label={d.name}
            />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Autocomplete<Schema>
              options={relationshipsQuery.data}
              name={`references.${index}.relationship`}
              textFieldProps={{ label: d.relationship }}
            />
          </Grid>
          <Grid size={{ xs: 4 }}>
            <TextField<Schema>
              name={`references.${index}.contactInformation`}
              label={d.contactInformation}
            />
          </Grid>
        </Fragment>
      ))}
      <Grid size={{ xs: 12 }}>
        <ErrorMessage<Schema> name="references" />
      </Grid>
    </>
  );
};

export { References };
