import "./navigation.css";

function MenuItem(props: any) {
    return (
      <a href={props.href} className="text-black hover:text-accent">
        {props.children}
      </a>
    );
}

export default function Navigation({ children }: { children: any }) {
    return (
      <>
        <nav className="flex flex-row bg-quaternaryProject menu_appearance">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/projects">Projects</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <MenuItem href="/contact">Contact</MenuItem>
        </nav>
        {children}
        <nav className="flex flex-row bg-quaternaryProject tabbar_appearance">
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/projects">Projects</MenuItem>
            <MenuItem href="/about">About</MenuItem>
            <MenuItem href="/contact">Contact</MenuItem>
        </nav>
      </>
    );
  }
  