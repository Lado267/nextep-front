'use client'

import { Button } from "../../components/ui/button";
import { usePathname } from 'next/navigation'
import Link from "next/link";

interface MenuItemProps {
    href: string;
    title: string;
}
import "./menuItem.css";

export default function MenuItem(props: MenuItemProps) {
    const path = usePathname()
    const split = path.split("/")
    return (
      <Link href={props.href}>
        <Button className="menu_item-font menu_item-width" variant={`/${split[1]}` == props.href ? "projectSelected" : "projectUnselected"}>
            {props.title}
        </Button>
      </Link>
    );
}