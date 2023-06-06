import { createReducer, on } from "@ngrx/store"
import { setIsMinimized } from "./sidebar.action"

const initialState = {
    isSidebarMinimized: false
}

export const sidebarReducer = createReducer(
    initialState,
    on(setIsMinimized, (state, { isMinimized }) => {
        return {
            ...state,
            isSidebarMinimized: isMinimized
        }
    })
)