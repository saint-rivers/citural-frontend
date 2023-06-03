import { createReducer, on } from "@ngrx/store";
import { setContainers } from "./container.actions";
import { ContainerList, ContainerResponse } from "../container";

export const initialState: Array<ContainerResponse> = []

export const containerReducer = createReducer(
    initialState,
    on(setContainers, (state, { containers }) => containers)
)