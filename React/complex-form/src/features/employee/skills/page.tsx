import { Form } from "@/features/form/components/form";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { TextField } from "@/features/form/components/controllers/text-field";
import { ProficiencyLevels } from "@/features/employee/skills/components/proficiency-levels";
import { SkillSets } from "@/features/employee/skills/components/skill-sets";
import {
  useCoreCompetencies,
  useLanguages,
} from "@/features/employee/skills/hooks/useQueries";
import { useStore } from "@/features/employee/skills/hooks/useStore";
import {
  CoreCompetencyEnum,
  defaultValues,
  schema,
  Schema,
} from "@/features/employee/skills/types/schema";
import { d } from "@/utils/dictionary";
import Grid from "@mui/material/Grid2";
import { SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { useFormContext } from "@/features/form/hooks/useFormContext";

const Page = () => {
  const coreCompetenciesQuery = useCoreCompetencies();
  const languagesQuery = useLanguages();

  const { control } = useFormContext<Schema>();

  const coreCompetencies = useWatch({
    control,
    name: "coreCompetencies",
  });

  return (
    <>
      <Grid size={{ xs: 6 }}>
        <Autocomplete<Schema, true>
          name="coreCompetencies"
          options={coreCompetenciesQuery.data}
          textFieldProps={{ label: d.coreCompetencies }}
          multiple
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        {coreCompetencies.includes(CoreCompetencyEnum.enum.OTHER) && (
          <TextField<Schema>
            name="otherCoreCompetencies"
            label={d.otherCoreCompetencies}
            multiline
            maxRows={4}
          />
        )}
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Autocomplete<Schema, true>
          name="languagesSpoken"
          options={languagesQuery.data}
          textFieldProps={{ label: d.languagesSpoken }}
          multiple
        />
      </Grid>

      <ProficiencyLevels />
      <SkillSets />
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
    navigate("/employee/additional-info");
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
      title={d.skills}
    >
      <Page />
    </Form>
  );
};

export { Provider as EmployeeSkills };
