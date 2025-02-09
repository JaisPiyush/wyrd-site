import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import Link from "next/link";

const NavigationHeader = () => (
    <Navbar>
        <NavbarBrand>
            <p className="font-bold text-inherit">WYRD</p>
        </NavbarBrand>
    </Navbar>
);

export default NavigationHeader;