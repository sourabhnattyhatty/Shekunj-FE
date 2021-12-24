import React from "react";
import "./index.scss";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/icons/logo.png";

function index() {
  return (
    <div>
      <div className='email_bg'></div>
      <Container>
        <div className='main_box_email'>
          <img src={logo} alt="" />
          <hr />
          <h2>Hello Swati Jain,</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ipsum, erat viverra rhoncus massa in enim fermentum vel. In mi ut
            amet, vitae massa ipsum. Maecenas faucibus et eget nibh netus
            molestie volutpat dignissim vulputate. Arcu hendrerit netus
            pellentesque pellentesque diam suscipit turpis. Amet orci vitae quam
            id pulvinar consectetur. Facilisi enim turpis urna amet purus enim
            ac tortor lectus justo.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            ipsum, erat viverra rhoncus massa in enim fermentum vel. In mi ut
            amet, vitae massa ipsum.
          </p>

          <h5>Thank you again,</h5>
        </div>
      </Container>

      <div className='email_bg2'></div>
    </div>
  );
}

export default index;
