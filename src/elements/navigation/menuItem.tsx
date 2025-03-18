'use client'

import { Button } from "../../components/ui/button";
import { usePathname } from 'next/navigation'

export default function MenuItem(props: any) {

    const path = usePathname()
    console.log("path:", path)
    console.log(props.href)

    return (
      <a href={props.href}>
        <Button variant={path == props.href ? "projectSelected" : "projectUnselected"}>
            {props.title}
        </Button>
      </a>
    );
}