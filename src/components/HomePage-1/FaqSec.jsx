import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaqData } from "../../content/data";

import Book from "../../assets/common/MiniTitIcons/profile-2user.svg";

const FaqSec = () => {
  const firstFiveItems = FaqData.slice(0, 4); // First 5 items
  const remainingItems = FaqData.slice(4);

  return (
    <>
      <section className="home-one-faq-sec">
        <div className="home-one-faq-tit-wrap">
          <span className="common-mini-tit">
            <img src={Book} alt="" />
            FAQ
          </span>
          <h2 className="home-one-faq-main-tit">
            Got Questions? We have got Answers
          </h2>
          <p>
            Still you have any questions? Contact our Team via
            support@Nexora.digital.com
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {firstFiveItems.map((items, index) => (
                  <Accordion.Item key={index} eventKey={items.id}>
                    <Accordion.Header>{items.qus}</Accordion.Header>
                    <Accordion.Body>{items.ans}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {remainingItems.map((items, index) => (
                  <Accordion.Item key={index} eventKey={items.id}>
                    <Accordion.Header>{items.qus}</Accordion.Header>
                    <Accordion.Body>{items.ans}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSec;
