import { useFormContext } from "@/features/form/hooks/useFormContext";
import { Box, IconButton, Menu as MuiMenu } from "@mui/material";
import MenuItem, {
  MenuItemProps as MuiMenuItemProps,
} from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import {
  bindPopover,
  usePopupState,
  bindTrigger,
} from "material-ui-popup-state/hooks";
import { forwardRef, ReactElement, ReactNode, Ref } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";

type Option = {
  value: string | number;
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
};

type MenuProps<T extends FieldValues> = Omit<
  MuiMenuItemProps,
  "name" | "error" | "value"
> & {
  name: Path<T>;
  options: Option[];
  MenuItemProps?: MuiMenuItemProps;
  className?: string;
  renderLabel?: (option: Option) => ReactNode;
  sx?: SxProps;
};

const Menu = forwardRef(
  <T extends FieldValues>(
    {
      name,
      options,
      MenuItemProps,
      className,
      renderLabel,
      sx,
      onChange,
      ...props
    }: MenuProps<T>,
    ref: Ref<HTMLLIElement>
  ) => {
    const state = usePopupState({ variant: "popover" });

    const { control } = useFormContext<T>();

    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <MuiMenu {...bindPopover(state)}>
              {options.map((option) => (
                <MenuItem
                  key={option.value}
                  {...MenuItemProps}
                  ref={ref}
                  className={className}
                  selected={field.value === option.value}
                  disabled={option.disabled}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingX: 1,
                    ...sx,
                  }}
                  {...props}
                  onClick={(event) => {
                    field.onChange(option.value);
                    onChange?.(event);
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {option.leftIcon}
                    {renderLabel ? (
                      renderLabel(option)
                    ) : (
                      <Typography
                        sx={{
                          paddingX: 1,
                          textAlign: "left",
                        }}
                      >
                        {option.label}
                      </Typography>
                    )}
                  </Box>
                  {option.rightIcon}
                </MenuItem>
              ))}
            </MuiMenu>
            <IconButton {...bindTrigger(state)}>
              {options?.find((item) => item.value === field.value)?.leftIcon}
            </IconButton>
          </>
        )}
      />
    );
  }
) as <T extends FieldValues>(
  props: MenuProps<T> & { ref?: Ref<HTMLLIElement> }
) => ReactElement;

export { Menu };
