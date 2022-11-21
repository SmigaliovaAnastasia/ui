import React from "react";

export type ComplexityLevelContent = {
  complexityLevelId: string
  setComplexityLevelId: (complexityLevelId : string) => void;
}

export const ComplexityLevelContext = React.createContext<ComplexityLevelContent>({ complexityLevelId: '', setComplexityLevelId: () => { } });