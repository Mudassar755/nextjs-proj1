import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "../../styles/LogoMaker.module.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  logo_categories,
} from "../../constants/logoMaker_content";
import { getRandomRgb } from "../../utils/commonMethods";

const Layout = dynamic(() => import("../../components/Layout"));
// const Search = dynamic(() => import("../../components/search/Search"));

export default function categories() {
  let thumbsNails = [];
  for (let i = 0; i < logo_categories.length; i++) {
    thumbsNails.push(
      <Link
        href={`/logo-ideas/${logo_categories[i].url}`}
        title="logo-ideas"
        key={i}
      >
      <a href={`/logo-ideas/${logo_categories[i].url}`} className={`${styles.logoCategoriesContainer}`} title={logo_categories[i].name}>
        <div>
          <div
            style={{ background: `${getRandomRgb()}` }}
            className={`${styles.logoCategoriesList}`}
          >
            <img
              src={logo_categories[i].icon}
              alt="logoCategories"
              title={logo_categories[i].name}
              width="50%"
            />
          </div>
          <p className="text-center ml-4">{logo_categories[i].name}</p>
        </div>
        </a>
      </Link>
    );
  }
  return (
    <Layout
      OG_TITLE={`Logo Ideas - Explore Free Logo Design Ideas by Industry`}
      OG_DESCRIPTION={`Explore our cool logo design ideas by different industries. Get inspired by our free logo ideas & create one for your business in minutes.`}
      OG_URL={`/logo-ideas`}
      CANONICAL={`/logo-ideas`}
      className={styles.logoMaker}
      TWITTER_TITLE={`Logo Ideas - Explore Free Logo Design Ideas by Industry`}
      TWITTER_DESCRIPTION={`Explore our cool logo design ideas by different industries. Get inspired by our free logo ideas & create one for your business in minutes.`}
    >
      <Container
        fluid
        style={{
          marginTop: "-90px",
          background: "#F6F4EF",
          paddingBottom: "7%",
        }}
      >
        <Container>
          <Row className="mb-4">
            <Col
              lg={{ span: 6, order: "first" }}
              md={{ span: 6, order: "first" }}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}
              className={`${styles.LogoCatTopText}`}
            >
              <h1 className="text-left">
                Logo Ideas: Explore Cool Logo Design
              </h1>
              <p className="text-left">
                Galvanize the appearance of your brand and outshine your
                competitors with the assistance of our well-crafted logo ideas.
                Our cool logo ideas are flawless and provide you a chance to get
                a visual icon just like you dreamt of. The flexible logo
                templates can be adjusted on any medium. The copious amount of
                curated logo designs will allow you to make a logo for your
                business, spark your imagination, and give you the inspiration
                you require. You will get a vast collection of premium logo
                design ideas on this platform.
              </p>
            </Col>
            <Col
              lg={{ span: 6, order: "last" }}
              md={{ span: 6, order: "first" }}
              sm={{ span: 12, order: "last" }}
              xs={{ order: "first" }}
              className={`${styles.FlyrTopImg}`}
            >
              <img
                src="/static/icons/logo/header logo.svg"
                alt="logo ideas"
                title="logo ideas"
                style={{ width: "100%" }}
                height="auto"
                width="100%"
              />
            </Col>
          </Row>
        </Container>
        <div className="mt-5">
          {/* <Search
            categories={logo_categories}
            searchform="logoCategory-searchForm"
          /> */}
        </div>
      </Container>
      <Container fluid style={{ marginTop: "-90px", background: "#FFF" }}>
        <Container>
          <Row
            className={`justify-content-md-center text-center justify-content-lg-center justify-content-sm-center `}
          >
            <Col
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              className={`${styles.LogoTopTextCat} mb-5`}
            >
              <h2>Cool Logo Design Ideas & Inspiration by Industries</h2>
              <p>
                Get a perfect logo for your brand by exploring any of the
                categories given below. No matter what type of business you are
                running, Make the perfect logo for your business using a{" "}
                <a
                  style={{ color: "#0056b3" }}
                  href="https://smallseotools.com/logo-maker/"
                  title="https://smallseotools.com/logo-maker/"
                >
                  Small SEO tool logo maker.
                </a>{" "}
                On our online platform, you will get a vast collection of
                premium logo design ideas free of cost.
              </p>
            </Col>
          </Row>
          <div className={`d-flex flex-wrap justify-content-center `}>
            {thumbsNails}
          </div>
        </Container>
        <Container>
          <Row
            className={`justify-content-md-center text-center justify-content-lg-center justify-content-sm-center `}
          >
            <Col
              lg={{ span: 12 }}
              md={{ span: 12 }}
              sm={{ span: 12 }}
              xs={{ span: 12 }}
              className={`${styles.LogoTopTextCat}`}
            >
              <h2>Here’s How We Help You Create Unique Logo</h2>
              <p>
                Logo designing isn’t hectic anymore. You no longer have to
                depend on taking assistance from professional designers. Just
                follow the simple steps given below to create your own logo.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className={`${styles.logoUsePoints}`}>
          <Row className="justify-content-md-center text-left justify-content-lg-center justify-content-sm-center mt-5">
            <Col
              lg={{ span: 6, order: "first" }}
              md={{ span: 6, order: "first" }}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}
              className={`${styles.logoUsePointsCol}`}
            >
              <span className={`${styles.LogoDigitFirst}`}>1</span>
              <h3 className="mt-4">Select A Template</h3>
              <p>
                Select a cool logo template from a wide variety of logo ideas
                differentiated by Industries and logo type. You can also choose
                a logo design idea from inside the editor.
              </p>
            </Col>
            <Col
              lg={{ span: 4, offset: 2, order: "last" }}
              md={{ span: 4, offset: 2, order: "last" }}
              sm={{ span: 12, order: "first" }}
              xs={{ span: 12, order: "first" }}
            >
              <img
                src="/static/icons/logo/1.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoUseImg}`}
                height="auto"
                width="100%"
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center text-left justify-content-lg-center justify-content-sm-center mt-5">
            <Col
              lg={{ span: 4, order: "first" }}
              md={{ span: 4, order: "first" }}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}
            >
              <img
                src="/static/icons/logo/2.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoUseImg}`}
                height="auto"
                width="100%"
              />
            </Col>
            <Col
              lg={{ span: 6, offset: 2, order: "first" }}
              md={{ span: 6, offset: 2, order: "first" }}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}
              className={`${styles.logoUsePointsCol}`}
            >
              <span className={`${styles.LogoDigitFirst}`}>2</span>
              <h3 className="mt-4">Customize the Logo</h3>
              <p>
                Now start designing a logo according to your business needs,
                alter, or remove the elements of the logo template. Customize
                the logo text, shape, background, and colors with the editing
                features.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center text-left justify-content-lg-center justify-content-sm-center mt-5">
            <Col
              lg={{ span: 6, order: "first" }}
              md={{ span: 6, order: "first" }}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}
              className={`${styles.logoUsePointsCol}`}
            >
              <span className={`${styles.LogoDigitFirst}`}>3</span>
              <h3 className="mt-4">Download free logo</h3>
              <p>
                When you are done with the customization of your logo design,
                Now to save the logo in a high-resolution file click on the
                download button given on the top right corner to save the
                customized logo template on your device.
              </p>
            </Col>
            <Col
              lg={{ span: 4, offset: 2, order: "last" }}
              md={{ span: 4, offset: 2, order: "last" }}
              sm={{ span: 12, order: "first" }}
              xs={{ span: 12, order: "first" }}
            >
              <img
                src="/static/icons/logo/3.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoUseImg}`}
                height="auto"
                width="100%"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container
        fluid
        style={{
          background: "#F9F9F8",
        }}
        className={`${styles.logoCardsMobileView} py-3`}
      >
        <Row
          className="justify-content-md-around text-left justify-content-lg-around justify-content-sm-around"
          noGutters={true}
        >
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCard} m-3`}>
              <div className={`${styles.logoCatCardFirstSec}`}>
                <img
                  src="/static/icons/logo/leftdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg1}`}
                />
                <div className={`${styles.logoCatCardFirst}`}>
                  <span>
                    I was in search of some ideas about the logos for my salon.
                    This online utility has resolved my worries about getting a
                    splendid logo. Thanks to the team!
                  </span>
                </div>
                <img
                  src="/static/icons/logo/rightdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg2}`}
                />
              </div>
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>George</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCard} m-3`}>
              <div className={`${styles.logoCatCardFirstSec}`}>
                <img
                  src="/static/icons/logo/leftdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg1}`}
                />
                <div className={`${styles.logoCatCardFirst}`}>
                  <span>
                    This user-friendly interface of this platform made the
                    process of customizing the logo template easy for me.
                  </span>
                </div>
                <img
                  src="/static/icons/logo/rightdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg2}`}
                />
              </div>
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Helen</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCardMob} m-3 `}>
              <div className={`${styles.logoCatCardFirstSec}`}>
                <img
                  src="/static/icons/logo/leftdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg1}`}
                />
                <div className={`${styles.logoCatCardFirst}`}>
                  <span>
                    The logo design ideas assist me in getting a perfect logo
                    for my brand. I am really grateful for multiple ideas.
                  </span>
                </div>
                <img
                  src="/static/icons/logo/rightdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg2}`}
                />
              </div>
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Charles</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCardMob} m-3`}>
              <div className={`${styles.logoCatCardFirstSec}`}>
                <img
                  src="/static/icons/logo/leftdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg1}`}
                />
                <div className={`${styles.logoCatCardFirst}`}>
                  <span>
                    It’s a great opportunity for small businesses that cannot
                    afford to hire professional designers to get an exclusive
                    logo.
                  </span>
                </div>
                <img
                  src="/static/icons/logo/rightdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg2}`}
                />
              </div>
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Alexis</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCardMob} m-3`}>
              <div className={`${styles.logoCatCardFirstSec}`}>
                <img
                  src="/static/icons/logo/leftdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg1}`}
                />
                <div className={`${styles.logoCatCardFirst}`}>
                  <span>
                    I’m in love with the collection of mesmerizing logo ideas
                    available on this site. Now, I don’t have to make efforts to
                    install large-sized applications on my device or learning
                    new skills to make one.
                  </span>
                </div>
                <img
                  src="/static/icons/logo/rightdoublequote.svg"
                  alt="logo"
                  title="logo ideas"
                  className={`${styles.logoCatCardImg2}`}
                />
              </div>
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Henry</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-md-center text-left justify-content-lg-center justify-content-sm-center"
          noGutters={true}
        >
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCardMob} m-3`}>
              <img
                src="/static/icons/logo/leftdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg1}`}
              />
              <div className={`${styles.logoCatCardFirst}`}>
                <span>
                  I really appreciate the team of this fabulous site for
                  providing me a great facility to design as many logos as I
                  desire without any hassle.
                </span>
              </div>
              <img
                src="/static/icons/logo/rightdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg2}`}
              />
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Nicole</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCardMob} m-3`}>
              <img
                src="/static/icons/logo/leftdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg1}`}
              />
              <div className={`${styles.logoCatCardFirst}`}>
                <span>
                  I have tried many tools, but none of them could provide me
                  what I was looking for. However, this online tool is the one
                  that helped me in getting an outclass logo for my business.
                </span>
              </div>
              <img
                src="/static/icons/logo/rightdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg2}`}
              />
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Leo</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCardMob} m-3`}>
              <img
                src="/static/icons/logo/leftdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg1}`}
              />
              <div className={`${styles.logoCatCardFirst}`}>
                <span>
                  You don’t have to be a professional designer for making a logo
                  with the help of logo templates available on this site. The
                  simple and easy layout will enable you to make an emblem in no
                  time.
                </span>
              </div>
              <img
                src="/static/icons/logo/rightdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg2}`}
              />
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Sara</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={2}>
            <div className={`${styles.logoCategoryCardMob} m-3`}>
              <img
                src="/static/icons/logo/leftdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg1}`}
              />
              <div className={`${styles.logoCatCardFirst}`}>
                <span>
                  One of the best online site that has plenty of the best logo
                  ideas.
                </span>
              </div>
              <img
                src="/static/icons/logo/rightdoublequote.svg"
                alt="logo"
                title="logo ideas"
                className={`${styles.logoCatCardImg2}`}
              />
              <div className={`${styles.logCatBottomSec}`}>
                <div className={`${styles.logoCatCardFooterImg}`}>
                  <img
                    src="/static/icons/landing_page/user_icon.svg"
                    alt="logo"
                    title="logo ideas"
                  />
                </div>
                <div className={`${styles.logoCatCardFooter}`}>
                  <span>Rocky</span>
                  <p>Kay Kay’s Fashion</p>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                  <img src="/static/icons/resumeBuilder/star.png"  alt="star" title="star"/>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
