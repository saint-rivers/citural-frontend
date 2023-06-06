import { createAction, props } from "@ngrx/store";
import { NavbarLink } from "../../models/navbar-link.model";


export const setNavbar = createAction(
    '[Navbar Component] Set', props<{ links: NavbarLink[] }>()
)