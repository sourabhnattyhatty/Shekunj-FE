import React from "react";
import { Header, Footer, ScrollToTop } from "../../components";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import card1 from "../../assets/images/Success/card1.png";
import down1 from "../../assets/icons/down1.png";
import up from "../../assets/icons/up.png";
import double_quote from "../../assets/icons/double_quote.png";
import { useDispatch, useSelector } from "react-redux";
import { successStories } from "../../store/courses/action";
import global from "../../assets/icons/global.png";

function SuccessStory() {
  const [show, setShow] = React.useState(true);
  const dispatch = useDispatch();
  const {successStories} = useSelector(state => state.courseReducer)

  React.useEffect(() => {
    dispatch(successStories());
  }, [dispatch])

  return (
    <div>
      <Header loginPage={true} page='story' />
      <div className='SuccStory_banner'>
        <Container>
          <Row>
            <Col md={1}>
              <div className='global_img'>
                <img src={global} alt='' />
              </div>
            </Col>
            <Col md={6}>
              <h2>Over 5,000 students have learned with us</h2>
              <p>
                All over Indian Girl students are taking their web design
                careers to the next-level with Shekunj Academy. Here are some of
                their stories.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className='suc_box'>
          <Row>
            <Col md={8} xs={12}>
              <h2>
                <img className='quote_img' src={double_quote} alt='' /> Masha
                Eizner Web Designer
              </h2>
              <h3>Lorem ipsum consectetur adipiscing elit. </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                neque nulla at vitae ac dolor tortor at. Sollicitudin aliquet
                dignissim arcu nam in sit magna. Nisi senectus proin amet, amet.
                Volutpat auctor sit orci, ac ante quam molestie.
              </p>
              {show && (
                <ul>
                  <li>
                    Company : <b>Tata consultancy Services</b>
                  </li>
                  <li>
                    Certification :<b> Diploma in Web designing</b>
                  </li>
                  <li>
                    Duration : <b> 1 Year</b>
                  </li>
                </ul>
              )}
              <div className='suc_btn'>
                <hr />
                <button onClick={() => setShow((prev) => !prev)}>
                  Show {show ? "Less" : "More"}{" "}
                  <img src={show ? up : down1} alt='' />
                </button>
                <hr />
              </div>
            </Col>

            <Col md={4} xs={12}>
              <img src={card1} alt='' />
            </Col>
          </Row>
        </div>

        <div className='suc_box'>
          <Row>
            <Col md={4} xs={12}>
              <img src={card1} alt='' />
            </Col>
            <Col md={8} xs={12}>
              <h2>
                <img className='quote_img' src={double_quote} alt='' /> Masha
                Eizner Web Designer
              </h2>
              <h3>Lorem ipsum consectetur adipiscing elit. </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                neque nulla at vitae ac dolor tortor at. Sollicitudin aliquet
                dignissim arcu nam in sit magna. Nisi senectus proin amet, amet.
                Volutpat auctor sit orci, ac ante quam molestie.
              </p>
              {show && (
                <ul>
                  <li>
                    Company : <b>Tata consultancy Services</b>
                  </li>
                  <li>
                    Certification :<b> Diploma in Web designing</b>
                  </li>
                  <li>
                    Duration : <b> 1 Year</b>
                  </li>
                </ul>
              )}
              <div className='suc_btn'>
                <hr />
                <button onClick={() => setShow((prev) => !prev)}>
                  Show {show ? "Less" : "More"}{" "}
                  <img src={show ? up : down1} alt='' />
                </button>
                <hr />
              </div>
            </Col>
          </Row>
        </div>

        <div className='suc_box'>
          <Row>
            <Col md={8} xs={12}>
              <h2>
                <img className='quote_img' src={double_quote} alt='' /> Masha
                Eizner Web Designer
              </h2>
              <h3>Lorem ipsum consectetur adipiscing elit. </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                neque nulla at vitae ac dolor tortor at. Sollicitudin aliquet
                dignissim arcu nam in sit magna. Nisi senectus proin amet, amet.
                Volutpat auctor sit orci, ac ante quam molestie.
              </p>
              {show && (
                <ul>
                  <li>
                    Company : <b>Tata consultancy Services</b>
                  </li>
                  <li>
                    Certification :<b> Diploma in Web designing</b>
                  </li>
                  <li>
                    Duration : <b> 1 Year</b>
                  </li>
                </ul>
              )}
              <div className='suc_btn'>
                <hr />
                <button onClick={() => setShow((prev) => !prev)}>
                  Show {show ? "Less" : "More"}{" "}
                  <img src={show ? up : down1} alt='' />
                </button>
                <hr />
              </div>
            </Col>

            <Col md={4} xs={12}>
              <img src={card1} alt='' />
            </Col>
          </Row>
        </div>

        <div className='suc_box'>
          <Row>
            <Col md={4} xs={12}>
              <img src={card1} alt='' />
            </Col>
            <Col md={8} xs={12}>
              <h2>
                <img className='quote_img' src={double_quote} alt='' /> Masha
                Eizner Web Designer
              </h2>
              <h3>Lorem ipsum consectetur adipiscing elit. </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                neque nulla at vitae ac dolor tortor at. Sollicitudin aliquet
                dignissim arcu nam in sit magna. Nisi senectus proin amet, amet.
                Volutpat auctor sit orci, ac ante quam molestie.
              </p>
              {show && (
                <ul>
                  <li>
                    Company : <b>Tata consultancy Services</b>
                  </li>
                  <li>
                    Certification :<b> Diploma in Web designing</b>
                  </li>
                  <li>
                    Duration : <b> 1 Year</b>
                  </li>
                </ul>
              )}
              <div className='suc_btn'>
                <hr />
                <button onClick={() => setShow((prev) => !prev)}>
                  Show {show ? "Less" : "More"}{" "}
                  <img src={show ? up : down1} alt='' />
                </button>
                <hr />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className='want'>
        <Container>
          <h2>Want to become our next success story?</h2>
          <button className='want_btn'>Start Learning</button>
        </Container>
      </div>

      <ScrollToTop />

      <Footer loginPage={false} />
    </div>
  );
}

export default SuccessStory;
