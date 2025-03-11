import "./navigation.css";
import "../../app/globals.css";
import { Button } from "../../components/ui/button";
// import { headers } from "next/headers";
import MenuItem from "./menuItem";

export default function Navigation({ children }: { children: any }) {

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-quaternaryProject menu_appearance">
        <ol className="content-margin flex flex-row items-center">
          <li>
            <MenuItem href="/" title="HOME"/>
          </li>
          <li>
            <MenuItem href="/projects" title="PROJECTS"/>
          </li>
          <li>
            <MenuItem href="/about" title="ABOUT"/>
          </li>
          <li>
            <MenuItem href="/contact" title="CONTACT"/>
          </li>
        </ol>
      </nav>
      <div className="flex-grow">
        {children}
      </div>
      <nav className="bg-quaternaryProject tabbar_appearance">
          <ol className="flex flex-row content-margin items-center">
            <li>
              <MenuItem href="/" title="HOME"/>
            </li>
            <li>
              <MenuItem href="/projects" title="PROJECTS"/>
            </li>
            <li>
              <MenuItem href="/about" title="ABOUT"/>
            </li>
            <li>
              <MenuItem href="/contact" title="CONTACT"/>
            </li>
          </ol>
      </nav>
    </div>
  );
}