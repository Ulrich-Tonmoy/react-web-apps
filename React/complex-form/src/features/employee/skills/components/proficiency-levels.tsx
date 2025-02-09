import { Autocomplete } from "@/features/form/components/controllers/autocomplete";
import { useProficiencyLevels } from "@/features/employee/skills/hooks/useQueries";

import { Schema } from "@/features/employee/skills/types/schema";
import { d } from "@/utils/dictionary";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ProficiencyLevels = () => {
  const proficiencyLevelsQuery = useProficiencyLevels();

  return (
    <>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={{ xs: 12 }}>
        <Typography>{d.proficiencyLevels}:</Typography>
      </Grid>
      <Grid size={{ xs: 2.4 }}>
        <Autocomplete<Schema>
          name="proficiencyLevels.projectManagement"
          options={proficiencyLevelsQuery.data}
          textFieldProps={{ label: d.projectManagement }}
          loading={proficiencyLevelsQuery.isLoading}
        />
      </Grid>
      <Grid size={{ xs: 2.4 }}>
        <Autocomplete<Schema>
          name="proficiencyLevels.communication"
          options={proficiencyLevelsQuery.data}
          textFieldProps={{ label: d.communication }}
          loading={proficiencyLevelsQuery.isLoading}
        />
      </Grid>
      <Grid size={{ xs: 2.4 }}>
        <Autocomplete<Schema>
          name="proficiencyLevels.technicalSkills"
          options={proficiencyLevelsQuery.data}
          textFieldProps={{ label: d.technicalSkills }}
          loading={proficiencyLevelsQuery.isLoading}
        />
      </Grid>
      <Grid size={{ xs: 2.4 }}>
        <Autocomplete<Schema>
          name="proficiencyLevels.leadership"
          options={proficiencyLevelsQuery.data}
          textFieldProps={{ label: d.leadership }}
          loading={proficiencyLevelsQuery.isLoading}
        />
      </Grid>
      <Grid size={{ xs: 2.4 }}>
        <Autocomplete<Schema>
          name="proficiencyLevels.problemSolving"
          options={proficiencyLevelsQuery.data}
          textFieldProps={{ label: d.problemSolving }}
          loading={proficiencyLevelsQuery.isLoading}
        />
      </Grid>
    </>
  );
};

export { ProficiencyLevels };
