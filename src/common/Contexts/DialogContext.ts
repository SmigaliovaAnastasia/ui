import React from "react";

export type DialogContent = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const DialogContext = React.createContext<DialogContent>({ open: false, setOpen: () => { } });