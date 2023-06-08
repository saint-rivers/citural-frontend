import { createReducer, on } from "@ngrx/store";
import { setNavbar } from "./navbar.action";
import { NavbarLink } from "../../models/navbar-link.model";
import linkData from "../../data/preset-links.json"


export const initialState: { links: NavbarLink[] } = {
    links: linkData.containerLinks
}


export const navbarReducer = createReducer(
    initialState,
    on(setNavbar, (state, { links }) => {
        return {
            links: links
        }
    })
)