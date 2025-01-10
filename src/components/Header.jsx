import * as React from "react";
import { Menu } from "lucide-react";

import "../index.css";
import "../App.css";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink, useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import logo from "../assets/img/logo.png";

const navLinks = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#services",
    dropdown: [
      {
        name: "Web Development",
        href: "/services/web-development",
        description:
          "Build a powerful online presence for your business with responsive and scalable web development services.",
      },
      {
        name: "Mobile Apps",
        href: "/services/app-development",
        description:
          "Create seamless mobile experiences with custom mobile apps tailored to your business goals.",
      },
      {
        name: "Graphic Design",
        href: "/services/graphic-design",
        description:
          "Enhance your brand’s visual identity with stunning graphic designs that engage and inspire your audience.",
      },
      {
        name: "UI/UX Design",
        href: "/services/ui-ux-design",
        description:
          "Create intuitive, user-friendly interfaces that enhance user experience and drive conversions.",
      },
      {
        name: "Digital Marketing",
        href: "/services/digital-marketing",
        description:
          "Grow your brand's reach and visibility with tailored digital marketing strategies that drive results.",
      },
      {
        name: "Blockchain",
        href: "/services/blockchain",
        description:
          "Leverage blockchain technology for secure, transparent solutions that enhance business processes.",
      },
    ],
  },
  { name: "Why Us", href: "#boxes-hero" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto flex h-20 items-center px-4">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <NavLink to="/client/form">
              <li className="login-nav">
                <button className="cunsulBtn">Free Consultation</button>
              </li>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

function MainNav() {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <NavLink href="/" className="flex items-center space-x-2">
        <img src={logo} className="h-10" />
      </NavLink>
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.name}>
              {link.dropdown ? (
                <NavigationMenuTrigger className="bg-zinc-950 hover:bg-zinc-950">
                  {link.name}
                </NavigationMenuTrigger>
              ) : (
                <NavLink href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-zinc-950 hover:bg-zinc-950 hover:text-zinc-400 transition"
                    )}
                  >
                    {link.name}
                  </NavigationMenuLink>
                </NavLink>
              )}
              {link.dropdown && (
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-4 p-4 bg-zinc-950 rounded-lg shadow-md md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {link.dropdown.map((item) => (
                      <ListItem
                        key={item.name}
                        title={item.name}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5 text-white" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="pr-0 bg-zinc-900/90 backdrop-blur-lg"
      >
        <MobileLink
          href="/"
          className="flex items-center text-white"
          onOpenChange={() => {}}
        >
          <span className="font-bold">Zenth Solutions</span>
        </MobileLink>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={() => {}}
                  >
                    {item.name}
                  </MobileLink>
                )
            )}
          </div>
          <div className="mt-4">
            <Button asChild>
              <NavLink href="/consultation" className="text-white">
                Free Consultation
              </NavLink>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <NavLink
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors bg-zinc-900 text-white hover:bg-zinc-950 hover:text-white",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-zinc-400">
              {children}
            </p>
          </NavLink>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  const navigate = useNavigate();
  return (
    <NavLink
      href={href}
      onClick={() => {
        navigate(href);
        onOpenChange?.(false);
      }}
      className={cn("text-white hover:text-zinc-400 transition", className)}
      {...props}
    >
      {children}
    </NavLink>
  );
}