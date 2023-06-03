import { createAction, props } from "@ngrx/store";
import { NavbarLink } from "../navbar-link.model";


export const setNavbar = createAction(
    '[Navbar Component] Set', props<{ links: NavbarLink[] }>()
)