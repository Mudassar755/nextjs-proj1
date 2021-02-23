import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useRouter } from "next/router";
import TestService from "../../services/Testservice";
import {
  useTemplate,
  previewTemplate,
  getRandomRgb,
} from "../../utils/commonMethods";
import {
  logo_categories,
  logo_categories_page_content,
} from "../../constants/logoMaker_content";
import styles from "../../styles/LogoMaker.module.css";
import Link from "next/link";
import Pagination from "react-js-pagination";

const Layout = dynamic(() => import("../../components/Layout"));
// const PopupModal = dynamic(() =>
//   import("../../components/popupmodal/PopupModal")
// );

const CategoryTemps = ({ currentCtg }) => {
  const router = useRouter();
  const [displayModal, setDisplay] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingFirst, setisLoadingFirst] = useState(true);
  const [currentTemplate, setTemplate] = useState("");
  const [thumbs, setThumbs] = useState("");
  const [dataLength, setDataLength] = useState(null);
  const todosPerPage = 19;
  const [activePage, setCurrentPage] = useState(1);

  let {
    query: { category },
  } = router;

  let { pathname } = router;
  let testService = new TestService();
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await testService.get_thumbs_logo(currentCtg[0].key).then((res) => {
        setDataLength(res.data.length);
        for (let i = 0; i < res.data.length; i++) {
          setThumbs(res.data);
        }
      });
      setLoading(false);
      setisLoadingFirst(false);
    }
    fetchData();
    localStorage.setItem("reqType", "logo");
  }, [router.query]);
  let pathName = pathname.split("/")[1].split("-")[0];

  //useThisTemplate
  const useThisTemplate = (e) => {
    useTemplate(e, pathName, currentCtg[0].key);
  };

  //modalShow
  const modalShow = (e) => {
    previewTemplate(e, pathName, currentCtg[0].key);
    setDisplay(true);
    setTemplate(e.target.parentNode.parentNode.parentNode.firstChild.src);
  };

  const templatesOne = [];
  const templatesOneImages = {
    one: {
      width: [476, 280, 280, 178, 178, 178],
      height: [476, 280, 280, 173, 173, 173],
    },
    two: {
      width: [476, 178, 178, 178, 280, 280],
      height: [476, 173, 173, 173, 280, 280],
    },
    three: {
      width: [198, 198, 198, 198, 198],
      height: [198, 198, 198, 198, 198],
    },
  };

  for (let i = 0; i < 6; i++) {
    templatesOne.push(
      // <Col xs={6} md={3} lg={3} key={i}>
      <div
        className={`${styles.templateItem}`}
        style={{
          width: `${templatesOneImages.one.width[i]}px`,
          height: `${templatesOneImages.one.width[i]}px`,
        }}
      >
        <img
          src={thumbs[i]}
          alt="logo-template"
          title={`template-${i}`}
          width={`100%`}
          height="auto"
          style={{ width: `100%` }}
        />
        <div className={`${styles.templateOverlay}`}>
          <div className={`${styles.templateBtns}`}>
            <Button onClick={useThisTemplate} variant="primary">
              Use This Template
            </Button>
            <br />
            <Button onClick={modalShow} variant="primary">
              Preview
            </Button>
          </div>
        </div>
      </div>
      // </Col>
    );
  }

  let LogoCategoryList = [];
  for (let c = 0; c < logo_categories.length; c++) {
    LogoCategoryList.push(
      <Link href={`${logo_categories[c].url}`} key={c}>
      <a href={`${logo_categories[c].url}`} title={logo_categories[c].name}>
        <Button
          key={c}
          className={`${styles.LogoCatgoerySpan} text-center`}
          style={{ background: `${getRandomRgb()}` }}
          onClick={() => handlePageChange(1)}
        >
          {logo_categories[c].name}
        </Button>
        </a>
      </Link>
    );
  }
  // Logic for displaying current todos
  const indexOfLastTodo = activePage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  let currentTodos = null;
  let renderTodosOne = null;
  let renderTodosTwo = null;
  let renderTodosThree = null;
  if (thumbs) {
    currentTodos = thumbs.slice(indexOfFirstTodo, indexOfLastTodo);
    let generalSplit = currentTodos;
    let firstSplit = generalSplit.slice(0, 6);
    let secondSplit = generalSplit.slice(6, 12);
    let thirdSplit = generalSplit.slice(12, 17);
    renderTodosOne = firstSplit.map((todo, index) => {
      return (
        <div
          className={`${styles.logoTempItems} LogoblockOne${index}`}
          key={index}
        >
          <img
            src={isLoading ? "/static/imgLoader.svg" : todo}
            alt="logo-template"
            title="logo category"
            width={`auto`}
            height={`auto`}
          />
          <div className={`${styles.templateOverlay}`}>
            <div className={`${styles.templateBtns}`}>
              <Button onClick={useThisTemplate} variant="primary">
                Use This Template
              </Button>
              <br />
              <Button onClick={modalShow} variant="primary">
                Preview
              </Button>
            </div>
          </div>
        </div>
      );
    });

    renderTodosTwo = secondSplit.map((todo, index) => {
      return (
        <div
          className={`${styles.logoTempItems} LogoblockTwo${index}`}
          key={index}
        >
          <img
            src={isLoading ? "/static/imgLoader.svg" : todo}
            alt="logo-template"
            title="logo category"
            width={`auto`}
            height={`auto`}
          />
          <div className={`${styles.templateOverlay}`}>
            <div className={`${styles.templateBtns}`}>
              <Button onClick={useThisTemplate} variant="primary">
                Use This Template
              </Button>
              <br />
              <Button onClick={modalShow} variant="primary">
                Preview
              </Button>
            </div>
          </div>
        </div>
      );
    });

    renderTodosThree = thirdSplit.map((todo, index) => {
      return (
        <div className={`${styles.logoTempItems} LogoblockThree`} key={index}>
          <img
            src={isLoading ? "/static/imgLoader.svg" : todo}
            alt="logo-template"
            title="logo category"
            width={`auto`}
            height={`auto`}
          />
          <div className={`${styles.templateOverlay} ml-2`}>
            <div className={`${styles.templateBtns}`}>
              <Button onClick={useThisTemplate} variant="primary">
                Use This Template
              </Button>
              <br />
              <Button onClick={modalShow} variant="primary">
                Preview
              </Button>
            </div>
          </div>
        </div>
      );
    });
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const categoryData = logo_categories_page_content.map((value) => (
    <div key={value.key}>
      {currentCtg[0].key === value.key ? (
        <>
          <Container
            fluid
            style={{
              marginTop: "-82px",
              paddingTop: "4%",
              background: "#F6F4EF",
            }}
          >
            <Container>
              <Row className="justify-content-md-center text-center justify-content-lg-center justify-content-sm-center">
                <Col
                  lg={{ span: 12, order: "first" }}
                  md={{ span: 12, order: "first" }}
                  sm={{ span: 12, order: "first" }}
                  xs={{ span: 12, order: "first" }}
                  style={{ marginTop: "3%", marginBottom: "3%" }}
                  className={`${styles.LogoTopTextCat}`}
                >
                  {value.h1 !== "" ? <h1>{value.h1}</h1> : null}
                  {value.h1desc !== "" ? <p>{value.h1desc}</p> : null}
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            fluid
            style={{
              background: "#FFF",
            }}
          >
            <Container style={{ paddingTop: "3%", paddingBottom: "3%" }}>
              <Row>
                {isLoadingFirst ? (
                  <Col xs="12" md="12" lg="12" style={{ textAlign: "center" }}>
                    <img
                      src="/static/imgLoader.svg"
                      alt="logo-template"
                      title={`loader`}
                      width="auto"
                      height="auto"
                    />
                  </Col>
                ) : (
                  <Col xs="12" md="12" lg="12">
                    {renderTodosOne}
                    {renderTodosTwo}
                    {renderTodosThree}
                  </Col>
                )}
              </Row>
              <Row className="justify-content-md-center text-center justify-content-lg-center justify-content-sm-center mt-5">
                <Col
                  className={`${styles.LogoPagination}`}
                  xs="12"
                  md="12"
                  lg="12"
                  style={{ textAlign: "center" }}
                >
                  <Pagination
                    hideFirstLastPages
                    firstPageText={null}
                    lastPageText={null}
                    prevPageText={
                      <img
                        src="/static/icons/logo/LeftArrow.svg"
                        alt="LeftArrow"
                        title="pagination left arrow"
                        width="20px"
                        height="20px"
                      />
                    }
                    nextPageText={
                      <img
                        src="/static/icons/logo/RightArrow.svg"
                        alt="RightArrow.svg"
                        title="pagination right arrow"
                        width="20px"
                        height="20px"
                      />
                    }
                    activePage={activePage}
                    itemsCountPerPage={todosPerPage}
                    totalItemsCount={thumbs.length}
                    // pageRangeDisplayed={8}
                    onChange={handlePageChange}
                  />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row
                className={`justify-content-md-center text-center justify-content-lg-center justify-content-sm-center `}
              >
                <Col
                  lg={{ span: 5 }}
                  md={{ span: 5 }}
                  sm={{ span: 12 }}
                  xs={{ span: 12 }}
                  className={`${styles.LogoTopTextCat}`}
                >
                  {value.h2A !== "" ? <h2>{value.h2A}</h2> : null}
                </Col>
              </Row>
              <Row
                className={`justify-content-md-center text-center justify-content-lg-center justify-content-sm-center `}
              >
                <Col
                  lg={{ span: 8 }}
                  md={{ span: 8 }}
                  sm={{ span: 12 }}
                  xs={{ span: 12 }}
                  className={`${styles.LogoTopTextCatMob}`}
                >
                  <p>
                    Make a logo in minutes. Just answer a few simple questions
                    about your business and personal style. Our online logo
                    maker will create a logo design that’s right for you.
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            fluid
            style={{
              background: "#FFF",
            }}
          >
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
                  {value.h3A !== "" ? (
                    <h3 className="mt-4">{value.h3A}</h3>
                  ) : null}
                  {value.h3Adesc !== "" ? <p>{value.h3Adesc}</p> : null}
                </Col>
                <Col
                  lg={{ span: 4, offset: 2, order: "last" }}
                  md={{ span: 4, offset: 2, order: "last" }}
                  sm={{ span: 12, order: "first" }}
                  xs={{ span: 12, order: "first" }}
                >
                  <img
                    src="/static/icons/logo/1.svg"
                    alt="logoCat"
                    title="logo category"
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
                    alt="logoCat"
                    title="logo category"
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
                  {value.h3B !== "" ? (
                    <h3 className="mt-4">{value.h3B}</h3>
                  ) : null}
                  {value.h3Bdesc !== "" ? <p>{value.h3Bdesc}</p> : null}
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
                  {value.h3C !== "" ? (
                    <h3 className="mt-4">{value.h3C}</h3>
                  ) : null}
                  {value.h3Cdesc !== "" ? <p>{value.h3Cdesc}</p> : null}
                </Col>
                <Col
                  lg={{ span: 4, offset: 2, order: "last" }}
                  md={{ span: 4, offset: 2, order: "last" }}
                  sm={{ span: 12, order: "first" }}
                  xs={{ span: 12, order: "first" }}
                >
                  <img
                    src="/static/icons/logo/3.svg"
                    alt="logoCat"
                    title="logo category"
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
          >
            <Container style={{ paddingTop: "2%", paddingBottom: "3%" }}>
              <Row
                className={`justify-content-md-center text-center justify-content-lg-center justify-content-sm-center mt-3`}
              >
                <Col
                  lg={{ span: 5, order: "first" }}
                  md={{ span: 5, order: "first" }}
                  sm={{ span: 12, order: "first" }}
                  xs={{ span: 12, order: "first" }}
                  className={`${styles.LogoTopTextCat}`}
                >
                  {value.h2B !== "" ? <h2>{value.h2B}</h2> : null}
                </Col>
              </Row>
              <Row className="justify-content-md-center text-center justify-content-lg-center justify-content-sm-center mt-5">
                <Col xs="12" sm="12" lg={{ span: 4, offset: 0 }} md="12">
                  <Card className={`${styles.logoCardsLayout}`}>
                    <Card.Img
                      variant="top"
                      src="/static/icons/logo/Layout.svg"
                      alt="logo-template"
                      title={`logo`}
                      style={{ width: "50%", marginLeft: "20%" }}
                      height="50%"
                      width="100%"
                    />
                    <Card.Body>
                      <Card.Title className={`${styles.logoCardsLayoutTitle}`}>
                        {value.h3D !== "" ? <h3>{value.h3D}</h3> : null}
                      </Card.Title>
                      <Card.Text className={`${styles.logoCardsLayoutText}`}>
                      {value.h3Ddesc !== "" ? <p>{value.h3Ddesc}</p> : null}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="12" sm="12" lg={{ span: 4, offset: 0 }} md="12">
                  <Card className={`${styles.logoCardsLayout}`}>
                    <Card.Img
                      variant="top"
                      src="/static/icons/logo/Typography.svg"
                      alt="logo-template"
                      title="logo"
                      style={{ width: "50%" }}
                      height="50%"
                      width="100%"
                    />
                    <Card.Body>
                      <Card.Title className={`${styles.logoCardsLayoutTitle}`}>
                        {value.h3E !== "" ? <h3>{value.h3E}</h3> : null}
                      </Card.Title>
                      <Card.Text className={`${styles.logoCardsLayoutText}`}>
                      {value.h3Edesc !== "" ? <p>{value.h3Edesc}</p> : null}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="12" sm="12" lg={{ span: 4, offset: 0 }} md="12">
                  <Card className={`${styles.logoCardsLayout}`}>
                    <Card.Img
                      variant="top"
                      src="/static/icons/logo/Symbol.svg"
                      alt="logo-template"
                      title="logo"
                      style={{ width: "50%" }}
                      height="50%"
                      width="100%"
                    />
                    <Card.Body>
                      <Card.Title className={`${styles.logoCardsLayoutTitle}`}>
                        {value.h3F !== "" ? <h3>{value.h3F}</h3> : null}
                      </Card.Title>
                      <Card.Text className={`${styles.logoCardsLayoutText}`}>
                      {value.h3Fdesc !== "" ? <p>{value.h3Fdesc}</p> : null}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            fluid
            style={{
              background: "#FFF",
            }}
          >
            <Container style={{ paddingTop: "2%", paddingBottom: "3%" }}>
              <Row
                className={`justify-content-md-center text-center justify-content-lg-center justify-content-sm-center mt-3`}
              >
                <Col
                  lg={{ span: 5, order: "first" }}
                  md={{ span: 5, order: "first" }}
                  sm={{ span: 12, order: "first" }}
                  xs={{ span: 12, order: "first" }}
                  className={`${styles.LogoTopTextCat}`}
                >
                  <h2>How To Make A Logo For Your Brand</h2>
                </Col>
              </Row>
              <Row className="justify-content-md-center text-center justify-content-lg-center justify-content-sm-center my-5">
                <div className={`${styles.FlyerCategoryListSty}`}>
                  <Col xs="12" lg="12" md="12" sm="12">
                    {LogoCategoryList}
                  </Col>
                </div>
              </Row>
              {/* {displayModal === true ? (
                <PopupModal
                  template={currentTemplate}
                  showModal={displayModal}
                  setDisplay={setDisplay}
                />
              ) : null} */}
            </Container>
          </Container>
        </>
      ) : null}
    </div>
  ));

  return (
    <Layout
      OG_TITLE={currentCtg[0].OG_TITLE}
      OG_DESCRIPTION={currentCtg[0].OG_DESCRIPTION}
      OG_URL={currentCtg[0].OG_URL}
      CANONICAL={currentCtg[0].CANONICAL}
      TWITTER_TITLE={currentCtg[0].TWITTER_TITLE}
      TWITTER_DESCRIPTION={currentCtg[0].TWITTER_DESCRIPTION}
    >
      {categoryData}
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = logo_categories.map((logo) => ({
    params: { category: `${logo.url}` },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let currentCtg = logo_categories.filter(
    (category) => category.url === params.category
  );

  return {
    props: { currentCtg },
    revalidate: 1,
  };
}
export default CategoryTemps;
