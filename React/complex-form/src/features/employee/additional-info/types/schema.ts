import { z } from "zod";
import validator from "validator";
import { regex } from "@/utils/regex";
import { startOfToday } from "date-fns";

const referencesSchema = z.object({
  name: z.string().min(1),
  relationship: z.string().min(1),
  contactInformation: z
    .string()
    .min(1)
    .refine((val) => validator.isEmail(val) || validator.isMobilePhone(val)),
});

const schema = z.object({
  portfolioLink: z.union([z.string().regex(regex.link), z.literal("")]),
  availabilityToStart: z.coerce.date().refine((date) => date >= startOfToday()),
  salaryExpectations: z.number().min(12000).max(400000),
  references: z.array(referencesSchema).min(1),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  availabilityToStart: new Date(),
  references: [],
  salaryExpectations: 100000,
  portfolioLink: "",
};

export { schema, schema as employeeAdditionalInfoSchema, type Schema, defaultValues };
