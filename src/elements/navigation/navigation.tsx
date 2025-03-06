import "./navigation.css";
import "../../app/globals.css";
import { Button } from "../../components/ui/button";

function MenuItem(props: any) {
    return (
      <a href={props.href}>
        {props.children}
      </a>
    );
}

export default function Navigation({ children }: { children: any }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-quaternaryProject menu_appearance">
        <ol className="content-margin flex flex-row ">
          <li>
            <MenuItem href="/">
              <Button variant="projectSelected">Home</Button>
            </MenuItem>
          </li>
          <li>
            <MenuItem href="/projects">Projects</MenuItem>
          </li>
          <li>
            <MenuItem href="/about">About</MenuItem>
          </li>
          <li>
            <MenuItem href="/contact">Contact</MenuItem>
          </li>
        </ol>
      </nav>
      <div className="flex-grow">
        {children}
      </div>
      <nav className="bg-quaternaryProject tabbar_appearance">
          <ol className="flex flex-row content-margin">
              <li>
                  <MenuItem href="/">Home</MenuItem>
              </li>
              <li>
                  <MenuItem href="/projects">Projects</MenuItem>
              </li>
              <li>
                  <MenuItem href="/about">About</MenuItem>
              </li>
              <li>
                  <MenuItem href="/contact">Contact</MenuItem>
              </li>
          </ol>
      </nav>
    </div>
  );
}