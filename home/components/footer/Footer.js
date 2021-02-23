import { Row, Container, Col } from "react-bootstrap";
import Link from "next/link";
// import FooterLogo from "../../assets/icons/landing_page/footer_logo.svg";
import styles from "../../styles/Layout.module.css";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={`${styles.outer_container}`}>
        <Container>
          <Row className="justify-content-lg-center justify-content-md-center">
            <Col
              xs="12"
              sm="12"
              lg="3"
              md="3"
              className={`${styles.inner_col}`}
            >
              <ul>
                <li>
                  {/* <img
                    src={FooterLogo}
                    alt="logo"
                    width="auto"
                    height="auto"
                    title="Design Studio"
                  /> */}
                </li>
                <li>
                  <span>
                    Small SEO Tool Design studio provide you the world’s best
                    creative apps & services. It’s not just a game of design,
                    but it’s more than you think.
                    <br></br>
                    <br></br>A product of SmallSEOTools.com, Made with ❤️
                  </span>
                </li>
              </ul>
            </Col>
            <Col xs sm="12" lg="2" md="2" className={`${styles.inner_col}`}>
              <ul>
                <li className="li-first-child">
                  <span>Discover</span>
                </li>
                <li>
                  <Link
                    href="/resume-templates"
                    title="resume-templates"
                    onClick={() =>
                      window.localStorage.setItem("reqType", "resume")
                    }
                  >
                    <a href="/resume-templates" title="resume-templates">
                      Resume Builder
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logo-ideas"
                    title="logo-ideas"
                    onClick={() =>
                      window.localStorage.setItem("reqType", "logo")
                    }
                  >
                    <a href="/logo-ideas" title="logo-ideas">
                      Logo Maker
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/flyer-templates"
                    title="flyer-templates"
                    onClick={() =>
                      window.localStorage.setItem("reqType", "flyer")
                    }
                  >
                    <a href="/flyer-templates" title="flyer-templates">
                      Flyer Maker
                    </a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/poster-templates"
                    title="poster-templates"
                    onClick={() =>
                      window.localStorage.setItem("reqType", "poster")
                    }
                  >
                    <a href="/poster-templates" title="poster-templates">
                      Poster Maker
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs sm="12" lg="2" md="2" className={`${styles.inner_col}`}>
              <ul>
                <li className="li-first-child">
                  <span>Company</span>
                </li>
                <li>
                  <a
                    href="https://smallseotools.com/about-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="https://smallseotools.com/about-us/"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://smallseotools.com/contact-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="https://smallseotools.com/contact-us/"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://smallseotools.com/blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="https://smallseotools.com/blog/"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://smallseotools.com/term-of-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="https://smallseotools.com/term-of-services/"
                  >
                    Term & Conditions
                  </a>
                </li>
              </ul>
            </Col>
            {/* <InnerCol xs sm="12" lg="2" md="2">
              <ul>
                <li className="li-first-child">
                  <span>
                    Follow Us
                  </span>
                </li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Dribbble</li>
                <li>Pinterest</li>
              </ul>
            </InnerCol> */}
            <Col xs sm="12" lg="3" md="3" className={`${styles.inner_col}`}>
              <ul>
                <li className="li-first-child">
                  <span>Contact</span>
                </li>
                <li>Support Email</li>
                <li>
                  <a
                    href={"mailto:support@smallseotools.com"}
                    title="mailto:support@smallseotools.com"
                  >
                    support@smallseotools.com
                  </a>
                </li>
                <li>Address</li>
                <li>438, Streatham High Road London, UK. SW16 3PX</li>
                {/* <li>
                  <EmailInput placeholder="Your email address"></EmailInput>
                </li>
                <li>
                  <CategoryButton variant="danger">Subscribe</CategoryButton>
                </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className={`${styles.copy_right_container}`}>
        <Container>
          <Row
            className={`justify-content-lg-center justify-content-md-center justify-content-sm-center ${styles.copy_right}`}
          >
            <Col sm="12" lg="12" md="12">
              <span>
                Copyright © by <a href="/">Design Studio</a> All Rights
                Reserved.
              </span>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
