
import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid rounded className={'flex justify-center h-20'} style={{backgroundColor: '#3f1052'}}>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active><span className={'pr-20'}>MATCHES</span></NavbarLink>
        <NavbarLink href="/standings"><span className={'pr-20'}>STANDINGS</span></NavbarLink>
        <NavbarLink href="/stats"><span className={'pr-20'}>STATS</span></NavbarLink>
        <NavbarLink href="/players">PLAYERS</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
