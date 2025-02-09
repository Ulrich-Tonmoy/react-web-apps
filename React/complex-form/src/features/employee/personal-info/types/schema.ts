import { calculatePastDate } from "@/utils/calculatePastDate";
import { regex } from "@/utils/regex";
import validator from "validator";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(1)
    .refine((val) => validator.isMobilePhone(val, "en-US")),
  dateOfBirth: z.coerce
    .date()
    .max(calculatePastDate(18))
    .min(calculatePastDate(100)),
  state: z.string().min(1),
  city: z.string().min(1),
  streetAddress: z.string().min(1),
  socialSecurityNumber: z.union([
    z.string().regex(regex.socialSecurityNumber),
    z.literal(""),
  ]),
});

type Schema = z.infer<typeof schema>;

const defaultValues: Schema = {
  city: "",
  dateOfBirth: calculatePastDate(18),
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  state: "",
  streetAddress: "",
  socialSecurityNumber: "",
};

export {
  schema,
  schema as employeePersonalInfoSchema,
  type Schema,
  defaultValues,
};
