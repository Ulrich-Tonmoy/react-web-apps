import { z } from "zod";

const formatDate = (date: Date): string => {
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const setupZodErrors = () => {
  z.setErrorMap((issue, ctx) => {
    let message: string;

    switch (issue.code) {
      case "invalid_type":
        if (issue.received === "undefined" || issue.received === "null") {
          message = "Required";
        } else if (issue.expected === "date") {
          message = "Please enter a valid date";
        } else {
          message = "Invalid input";
        }
        break;

      case "too_small":
        if (issue.type === "date") {
          const minDate = new Date(issue.minimum as number);
          message = `Date must be after ${formatDate(minDate)}`;
        } else if (issue.minimum === 1) {
          message = "Required";
        } else if (issue.type === "array") {
          message = "At least one item is required";
        } else {
          message = `Minimum ${issue.minimum} characters`;
        }
        break;

      case "too_big":
        if (issue.type === "date") {
          if (
            issue.maximum &&
            typeof issue.maximum === "object" &&
            (issue.maximum as Date).getTime() ===
              new Date().setHours(0, 0, 0, 0)
          ) {
            message = "Date cannot be in the future";
          } else {
            const maxDate = new Date(issue.maximum as number);
            message = `Date must be before ${formatDate(maxDate)}`;
          }
        } else if (issue.type === "string") {
          message = `Maximum ${issue.maximum} characters allowed`;
        } else {
          message = ctx.defaultError;
        }
        break;

      case "invalid_date":
        message = "Please enter a valid date";
        break;

      case "invalid_string":
        if (issue.validation === "email") {
          message = ctx.data === "" ? "Required" : "Invalid email";
        } else {
          message = "Invalid input";
        }
        break;

      default:
        message = ctx.defaultError;
    }

    return { message };
  });
};

export { setupZodErrors };
