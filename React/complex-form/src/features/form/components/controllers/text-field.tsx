import { useFormContext } from "@/features/form/hooks/useFormContext";
import {
  InputBaseComponentProps,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  SxProps,
  Theme,
} from "@mui/material";
import { forwardRef, ReactElement, Ref } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { NumericFormat, PatternFormat } from "react-number-format";

type FormatType =
  | "number"
  | "phoneNumber"
  | "currency"
  | "socialSecurity"
  | undefined;

type CustomNumberFormatProps = InputBaseComponentProps & {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

type TextFieldProps<T extends FieldValues> = Omit<
  MuiTextFieldProps,
  "name" | "error" | "helperText"
> & {
  name: Path<T>;
  format?: FormatType;
};

const createNumberFormat = (
  formatConfig: {
    format?: string;
    mask?: string;
    thousandSeparator?: boolean;
    allowEmptyFormatting?: boolean;
  } = {}
) => {
  return forwardRef<HTMLInputElement, CustomNumberFormatProps>(
    function NumberFormat(props, ref) {
      const { onChange, name, ...other } = props;

      const handleValueChange = (values: { value: string }) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        });
      };

      const Component = formatConfig.format ? PatternFormat : NumericFormat;

      return (
        <Component
          {...other}
          {...formatConfig}
          format={formatConfig.format ?? ""}
          getInputRef={ref}
          onValueChange={handleValueChange}
        />
      );
    }
  );
};

const formatComponents = {
  number: createNumberFormat({
    thousandSeparator: true,
  }),
  phoneNumber: createNumberFormat({
    format: "(###) ###-####",
    allowEmptyFormatting: true,
    mask: "_",
  }),
  socialSecurity: createNumberFormat({
    format: "### ## ####",
    allowEmptyFormatting: true,
    mask: "_",
  }),
  currency: createNumberFormat({
    thousandSeparator: true,
  }),
};

const TextField = forwardRef(
  <T extends FieldValues>(
    { name, format, sx, ...textFieldProps }: TextFieldProps<T>,
    ref: Ref<HTMLInputElement>
  ) => {
    const { control, readOnly } = useFormContext<T>();

    const getInputComponent = (format?: FormatType) => {
      return format ? formatComponents[format] : undefined;
    };

    const defaultSx: SxProps<Theme> = {
      width: 1,
      ...sx,
    };

    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <MuiTextField
            {...textFieldProps}
            {...field}
            inputRef={ref}
            error={!!error}
            helperText={error?.message}
            sx={defaultSx}
            slotProps={{
              ...textFieldProps?.slotProps,
              input: {
                ...textFieldProps?.slotProps?.input,
                inputComponent: getInputComponent(format),
                readOnly,
                ...(readOnly && { type: undefined }),
              },
            }}
          />
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: TextFieldProps<T> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

export { TextField };
