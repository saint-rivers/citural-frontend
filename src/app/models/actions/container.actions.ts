import { createAction, props } from '@ngrx/store'
import { ContainerList, ContainerResponse } from '../container'

export const setContainers = createAction(
    '[Container Component] Fetch',
    props<ContainerList>()
)

