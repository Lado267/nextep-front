'use client'

import { Button } from "../../components/ui/button";
import { usePathname } from 'next/navigation'
import "./menuItem.css";

export default function MenuItem(props: any) {
    const path = usePathname()
    const split = path.split("/")
    return (
      <a href={props.href}>
        <Button className="menu_item-font menu_item-width" variant={`/${split[1]}` == props.href ? "projectSelected" : "projectUnselected"}>
            {props.title}
        </Button>
      </a>
    );
}