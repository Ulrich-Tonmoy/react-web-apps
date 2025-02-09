import { ReactNode } from "react";

type Options = {
  title?: ReactNode;
  content?: ReactNode;
  confirmationText?: ReactNode;
  cancellationText?: ReactNode;
  onClose?: () => void;
  onConfirm?: () => Promise<void> | void;
};

export { type Options };
