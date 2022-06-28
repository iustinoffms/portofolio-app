import React from "react";
import styled from "styled-components";

import { StyledAbout } from "../styles";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do i start?</h4>
        <div className="answer ">
          <p>The response right here</p>
          <p>
            The response right here and some more text because it's cool to have
            more text
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question ">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>The response right here</p>
          <p>
            The response right here and some more text because it's cool to have
            more text
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methonds</h4>
        <div className="answer">
          <p>The response right here</p>
          <p>
            The response right here and some more text because it's cool to have
            more text
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>The response right here</p>
          <p>
            The response right here and some more text because it's cool to have
            more text
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    color: white;
  }

  .answer {
    padding: 2rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`;

export default FaqSection;
