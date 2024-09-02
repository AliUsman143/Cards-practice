"use client";
import PropTypes from "prop-types";

import { Button, MegaMenu, Navbar } from "flowbite-react";
import { propTypes } from "react-bootstrap/esm/Image";

function NavHeader(props) {
  return (
    <MegaMenu>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="img/ali.jpg"
            className="mr-3 rounded-full  h-6 sm:h-9"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {props.title}
          </span>
        </Navbar.Brand>
        <div className="order-2 hidden items-center md:flex">
          <a
            href="#"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 border-[1px] bg-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
          >
            Login
          </a>
          <Button href="#">Sign up</Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#">{props.home}</Navbar.Link>
          <Navbar.Link href="#">{props.about} </Navbar.Link>

          <Navbar.Link href="#">Team</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  );
}
export default NavHeader;
// hm aisy bi pas kr skty hy 
    {/* <NavHeader title="Flowbite2" home="HomeScreen" about="About Us"/> */}


NavHeader.propTypes = {
  title: propTypes.string,
  home: PropTypes.string,
  about: PropTypes.string,
};

NavHeader.defaultProps = {
  title: "Ali Usman",
  home: "HomeIs",
  about: "AboutIs",
};
