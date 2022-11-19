import React from "react";
import { defaultPagedRequest } from "../Constants/DefaultPagedRequest";
import { PagedRequest } from "../Models/PagedRequest/PagedRequest";
import { PagedRequestAction } from "../Reducers/PagedRequestAction";

export type PagedRequestContent = {
  state: PagedRequest;
  dispatch: React.Dispatch<PagedRequestAction>;
}

export const PagedRequestContext = React.createContext<PagedRequestContent>({ state: defaultPagedRequest, dispatch: () => null });