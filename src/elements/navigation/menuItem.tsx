'use client'

import { Button } from "../../components/ui/button";
import { usePathname } from 'next/navigation'

export default function MenuItem(props: any) {
    const path = usePathname()
    const split = path.split("/")
    return (
      <a href={props.href}>
        <Button variant={`/${split[1]}` == props.href ? "projectSelected" : "projectUnselected"}>
            {props.title}
        </Button>
      </a>
    );
}