import { Navbar } from 'flowbite-react';
import { DarkThemeToggle } from 'flowbite-react'

export default function NavBar({active}) {
    return (
        <Navbar
            fluid={true}
            rounded={false}
        >
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white dark:text-white">
                    E = MC<sup>2</sup>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={active === "home" ? true : false }
                    className="text-maroon-100"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/issues" active={active === "issues" ? true : false}>
                    Issues
                </Navbar.Link>
                <Navbar.Link href="/gallery" active={active === "gallery" ? true : false}>
                    Gallery
                </Navbar.Link>
                <Navbar.Link href="/about" active={active === "about" ? true : false}>
                    About
                </Navbar.Link>
                <Navbar.Link href="/resources" active={active === "resources" ? true : false}>
                    Resources
                </Navbar.Link>
                <Navbar.Link href="/support" active={active === "support" ? true : false}>
                    Support
                </Navbar.Link>
                <DarkThemeToggle />
            </Navbar.Collapse>
        </Navbar>
    );
}