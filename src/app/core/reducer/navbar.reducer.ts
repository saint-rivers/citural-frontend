import { createReducer, on } from "@ngrx/store";
import { setNavbar } from "../models/action/navbar.action";
import { NavbarLink } from "../models/navbar-link.model";


export const initialState: { links: NavbarLink[] } = {
    links: [
        {
            path: '/containers/databases/listing',
            name: 'Databases'
        },
        {
            path: '/containers/api/listing',
            name: 'API'
        },
    ]
}


export const navbarReducer = createReducer(
    initialState,
    on(setNavbar, (state, { links }) => {
        return {
            links: links
        }
    })
)