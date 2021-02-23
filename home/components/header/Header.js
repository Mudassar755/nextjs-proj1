import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Form, Nav, Image, Button, NavDropdown, Row, Col } from "react-bootstrap";
// import Logo from "../../assets/icons/landing_page/header_logo.png";
import styles from "../../styles/Layout.module.css";
import { useRouter } from "next/router";
import Link from 'next/link'

import { logos, flyers, resume, poster } from '../../constants/commonData'

export default function Navigation() {
  const router = useRouter();
  let { pathname } = router;
  let maker = pathname.split("-")[0].split('/')[1]
  let makerPath = pathname.split('/')[1]

  const [showTemplates, setShowTemplates] = useState(false);
  const [showMakers, setShowMakers] = useState(false);
  const [data, setData] = useState({
    tempName: maker || "flyer",
    tempCategories: maker === "logo" && logos ||
      maker === "resume" && resume ||
      maker === "flyer" && flyers ||
      maker === "poster" && poster ||
      flyers,
    url: makerPath || "flyer-templates"
  });

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const Scroll = document.getElementsByClassName("nav-scroll-event")[0];
    if (Scroll === undefined) {
      return;
    }
    if (currentScrollY >= 70) {
      Scroll.style.backgroundColor = "#FFF";
      Scroll.style.boxShadow = "0 2px 2px -2px rgba(0,0,0,.2)";
    }
    if (currentScrollY < 70) {
      Scroll.style.backgroundColor = "transparent";
      Scroll.style.boxShadow = "";
    }
  };

  useEffect(() => {
    // document.getElementById("categories").addEventListener("click", () => setShowTemplates(!showTemplates))
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showTemplates]);
  const { tempName, tempCategories, url } = data;

  const handleChange = (name, categories, url) => {
    setData({ ...data, tempName: name, tempCategories: categories, url: url });
    setShowTemplates(true)
  }
  // console.log("data", data)

  return (
    <Navbar sticky="top" className="nav-scroll-event" expand="lg">
      <Navbar.Brand href="/" style={{ paddingLeft: "3%" }} title="Home">
        {/* <Image src={Logo} alt="logo" width="auto" height="36px" title="Design Studio" /> */}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="toggler-btn-header"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`${styles.nav_list} justify-content-center`}>
          {/* <Nav.Link href="/">
            Home
          </Nav.Link> */}

          <NavDropdown
            className={`nav-cat dropdown-arrow position-static ${showTemplates ? "showArrow" : "hideArrow"}`}
            title="Templates" id="categories"
            show={showTemplates}
            onMouseEnter={(e) => { setShowTemplates(true) }}
            onMouseLeave={() => setShowTemplates(false)}
          // onClick={() => setShowTemplates(!showTemplates)}
          >
            <Row className="m-0">
              <Col md={4} lg={3} sm={12} xs={12} className={`${styles.tempBtnWrapper} p-0`}>
                <Button
                  variant="light"
                  onClick={() => handleChange("flyer", flyers, "flyer-templates")}
                  className={`border-bottom ${styles.tempBtns} ${tempName === "flyer" && styles.active} `} >
                  Flyer Maker
                  </Button>
                <Button
                  variant="light"
                  onClick={() => handleChange("logo", logos, "logo-ideas")}
                  className={`border-bottom ${styles.tempBtns} ${tempName === "logo" && styles.active} `}>
                  Logo Maker
                  </Button>
                <Button
                  variant="light"
                  onClick={() => handleChange("resume", resume, "resume-templates")}
                  className={`border-bottom ${styles.tempBtns} ${tempName === "resume" && styles.active} `}>
                  Resume Builder
                  </Button>
                <Button
                  variant="light"
                  onClick={() => handleChange("poster", poster, "poster-templates")}
                  className={`${styles.tempBtns} ${tempName === "poster" && styles.active} `}>
                  Poster Maker
                  </Button>
              </Col>
              <Col md={8} lg={6} sm={12} xs={12} className="pb-3" >
                <Row className="pt-3 pl-4">
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <h5 className={styles.tempHeading}>{tempName}</h5>
                  </Col>
                  {tempCategories.map((category, index) => (
                    <Col md={4} lg={4} sm={6} xs={6} key={index}>
                      <Link
                        href={`/${category.origin}/${category.url}`}
                        onCLick={() => setShowTemplates(false)}>
                        <a><p className={styles.ctgName}>{category.name}</p></a>
                      </Link>
                    </Col>

                  ))}
                </Row>
                <div className={`pl-4 ${styles.viewAllBtn}`}>
                  <Button variant="danger">
                    <Link href={`/${url}`} locale="en">
                      <a>
                        View all
                      </a>
                    </Link>
                  </Button>
                </div>

              </Col>
              <Col md={4} lg={3} sm={12} xs={12}
                className={styles.tempImg}>
                <Image
                  src={`/static/icons/landing_page/${tempName}.png`}
                  alt="logo"
                  className="mw-100"
                  width="auto"
                  height="auto" />
              </Col>

            </Row>

          </NavDropdown>

          <NavDropdown
            className={`makerMenu dropdown-arrow ${showMakers ? "showArrow" : "hideArrow"}`}
            title="Makers" id="makers"
            show={showMakers}
            onMouseEnter={(e) => { setShowMakers(true) }}
            onMouseLeave={() => setShowMakers(false)}
            onClick={() => setShowMakers(!showMakers)}
          >
            <NavDropdown.Item
              href="/flyer-templates"
              className=" d-flex align-items-center justify-content-center">
              Flyer Maker
              </NavDropdown.Item>
            <hr className="m-0" />
            <NavDropdown.Item
              href="/logo-ideas"
              className=" d-flex align-items-center justify-content-center">
              Logo Maker
              </NavDropdown.Item>
            <hr className="m-0" />
            <NavDropdown.Item
              href="/resume-templates"
              className=" d-flex align-items-center justify-content-center">
              Resume Builder
              </NavDropdown.Item>

            <hr className="m-0" />
            <NavDropdown.Item
              href="/poster-templates"
              className=" d-flex align-items-center justify-content-center">
              Poster Maker
              </NavDropdown.Item>

          </NavDropdown>

        </Nav>

        {/* <Form inline style={{ justifyContent: "center" }}>
          <NavRightButton
            backgroundColor="transparent"
            color="black"
            hoverBg="black"
            hoverColor="white"
          >
            Sign In
          </NavRightButton>
          <NavRightButton
            backgroundColor="black"
            color="white"
            hoverBg="white"
            hoverColor="black"
          >
            Sign Up
          </NavRightButton>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
