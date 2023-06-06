import { createAction, props } from "@ngrx/store";

export const setIsMinimized = createAction(
    '[Sidebar Component] Set', props<{ isMinimized: boolean }>()
)