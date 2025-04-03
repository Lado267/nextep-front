import "./navigation.css";
import "../../app/globals.css";
import { Button } from "../../components/ui/button";
// import { headers } from "next/headers";
import "./menuItem.css";
import MenuItem from "./menuItem";

export default function Navigation({ children }: { children: any }) {

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-quaternaryProject menu_appearance">
        <ol className="content-margin flex flex-row gap-2 items-center">
          <li>
            <MenuItem href="/" title="HOME"/>
          </li>
          <li>
            <MenuItem href="/services" title="SERVICES"/>
          </li>
          <li>
            <MenuItem href="/projects" title="PROJECTS"/>
          </li>
          <li>
            <MenuItem href="/contact" title="CONTACT"/>
          </li>
        </ol>
      </nav>
      <div className="flex-grow flex flex-col">
        {children}
      </div>
      <nav className="bg-quaternaryProject tabbar_appearance">
          <ol className="flex flex-row menu-gap h-full content-margin items-center justify-center p-[8px]">
            <li className="menu_item-width">
              <MenuItem href="/" title="HOME"/>
            </li>
            <li className="menu_item-width">
              <MenuItem href="/services" title="SERVICES"/>
            </li>
            <li className="menu_item-width">
              <MenuItem href="/projects" title="PROJECTS"/>
            </li>
            <li className="menu_item-width">
              <MenuItem href="/contact" title="CONTACT"/>
            </li>
          </ol>
      </nav>
    </div>
  );
}