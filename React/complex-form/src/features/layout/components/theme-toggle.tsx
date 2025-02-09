import { Menu } from "@/features/form/components/controllers/menu";
import { d } from "@/utils/dictionary";
import ContrastOutlinedIcon from "@mui/icons-material/ContrastOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Typography from "@mui/material/Typography";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface Option {
  value: string | number;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

interface FormValues {
  selectedOption: string;
}

const menuOptions: Option[] = [
  {
    value: "system",
    label: d.system,
    leftIcon: <ContrastOutlinedIcon />,
  },
  {
    value: "light",
    label: d.light,
    leftIcon: <WbSunnyOutlinedIcon />,
  },
  {
    value: "dark",
    label: d.dark,
    leftIcon: <DarkModeOutlinedIcon />,
  },
];

const ThemeToggle = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      selectedOption: "system",
    },
  });

  return (
    <FormProvider {...methods}>
      <form>
        <Menu<FormValues>
          name="selectedOption"
          options={menuOptions}
          renderLabel={(option) => (
            <Typography sx={{ paddingX: 1 }}>{option.label}</Typography>
          )}
        />
      </form>
    </FormProvider>
  );
};

export { ThemeToggle };
