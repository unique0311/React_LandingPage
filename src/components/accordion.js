import { faqs } from "./faqData";
import React, { useState } from "react";
import AccordionItem from "./accordionItem";

import '../CSS/landing.css';

const Accordion = () => {

  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} active = {clicked === index} />
      ))}
    </ul>
  )
}

export default Accordion;