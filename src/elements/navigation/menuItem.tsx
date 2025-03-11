'use client'

import { Button } from "../../components/ui/button";
import { usePathname } from 'next/navigation'
import "./menuItem.css";

export default function MenuItem(props: any) {

    const path = usePathname()
    console.log(path)
    console.log(props.href)

    return (
      <a href={props.href}>
        <Button className="menu_item-font" variant={path === props.href ? "projectSelected" : "projectUnselected"}>
            {props.title}
        </Button>
      </a>
    );
}