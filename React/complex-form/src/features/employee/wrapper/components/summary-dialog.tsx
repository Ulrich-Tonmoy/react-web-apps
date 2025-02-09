import { useEmployeeAdditionalInfoStore } from "@/features/employee/additional-info/hooks/useStore";

import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { EmployeeAdditionalInfo } from "@/features/employee/additional-info/page";
import { useEmployeeHistoryStore } from "@/features/employee/history/hooks/useStore";
import { EmployeeHistory } from "@/features/employee/history/page";
import { useEmployeePersonalInfoStore } from "@/features/employee/personal-info/hooks/useStore";
import { EmployeePersonalInfo } from "@/features/employee/personal-info/page";
import { useEmployeeReviewStore } from "@/features/employee/review/hooks/useStore";
import { EmployeeReview } from "@/features/employee/review/page";
import { useEmployeeSkillsStore } from "@/features/employee/skills/hooks/useStore";
import { EmployeeSkills } from "@/features/employee/skills/page";
import { useCreate } from "@/features/employee/wrapper/hooks/useMutations";
import { useStore } from "@/features/employee/wrapper/hooks/useStore";
import { schema } from "@/features/employee/wrapper/types/schema";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { showSnack } from "@/utils/showSnack";
import { LoadingButton } from "@mui/lab";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import { FormEvent } from "react";
import { d } from "@/utils/dictionary";

const SummaryDialog = () => {
  const { summaryDialogOpen, updateSummaryDialogOpen } = useStore();
  const createMutation = useCreate();

  const { formData: employeePersonalInfoFormData } =
    useEmployeePersonalInfoStore();
  const { formData: employeeHistoryFormData } = useEmployeeHistoryStore();
  const { formData: employeeSkillsFormData } = useEmployeeSkillsStore();
  const { formData: employeeAdditionalInfoFormData } =
    useEmployeeAdditionalInfoStore();
  const { formData: employeeReviewFormData } = useEmployeeReviewStore();

  const allFormData = {
    ...employeePersonalInfoFormData,
    ...employeeHistoryFormData,
    ...employeeSkillsFormData,
    ...employeeAdditionalInfoFormData,
    ...employeeReviewFormData,
  };

  const handleClose = () => {
    if (!createMutation.isPending) {
      updateSummaryDialogOpen(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      schema.parse(allFormData);
      createMutation.mutate(undefined, { onSuccess: handleClose });
    } catch (error) {
      showSnack(getErrorMessage(error), { variant: "error" });
    }
  };

  return (
    <Dialog
      open={summaryDialogOpen}
      component="form"
      onSubmit={onSubmit}
      fullWidth
      maxWidth="md"
      onClose={handleClose}
    >
      <DialogTitle variant="h5">{d.confirmInformation}</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <EmployeePersonalInfo readOnly />
        <Divider />
        <EmployeeHistory readOnly />
        <Divider />
        <EmployeeSkills readOnly />
        <Divider />
        <EmployeeAdditionalInfo readOnly />
        <Divider />
        <EmployeeReview readOnly />
        <Divider />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          {d.close}
        </Button>
        <LoadingButton
          type="submit"
          loading={createMutation.isPending}
          variant="contained"
          startIcon={<SendOutlinedIcon />}
        >
          {d.submit}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export { SummaryDialog };
