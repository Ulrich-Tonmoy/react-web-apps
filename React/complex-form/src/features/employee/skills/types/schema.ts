import { ApiCoreCompetencyEnum } from "@/features/employee/skills/types/apiTypes";
import { z } from "zod";

const CoreCompetencyEnum = z.nativeEnum(ApiCoreCompetencyEnum);

const skillSetSchema = z.object({
  category: z.string().min(1),
  subcategory: z.string().min(1),
  skills: z.array(z.string()).min(1),
  yearsOfExperience: z.coerce.number().min(0).max(50),
  description: z.string(),
});
const schema = z
  .object({
    coreCompetencies: z.array(CoreCompetencyEnum).min(1),
    otherCoreCompetencies: z.string().optional(),
    proficiencyLevels: z.object({
      projectManagement: z.string().min(1),
      communication: z.string().min(1),
      technicalSkills: z.string().min(1),
      leadership: z.string().min(1),
      problemSolving: z.string().min(1),
    }),
    skillSets: z.array(skillSetSchema).min(1).max(5),
    languagesSpoken: z.array(z.string().min(1)).min(1),
  })
  .superRefine((data, ctx) => {
    const hasOtherCoreCompetencies = data.coreCompetencies.includes(
      CoreCompetencyEnum.enum.OTHER
    );

    if (hasOtherCoreCompetencies && !data.otherCoreCompetencies) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Required",
        path: ["otherCoreCompetencies"],
      });
    }
  });

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  coreCompetencies: [],
  languagesSpoken: [],
  proficiencyLevels: {
    communication: "",
    leadership: "",
    problemSolving: "",
    projectManagement: "",
    technicalSkills: "",
  },
  skillSets: [],
  otherCoreCompetencies: "",
};

export {
  defaultValues,
  schema,
  schema as employeeSkillsSchema,
  type Schema,
  CoreCompetencyEnum,
};
