import { useRef } from 'react';

import '../CSS/landing.css';

const AccordionItem = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;

  return (
    <div className='accordion_container'>
      <li className={`accordion_item ${active ? "accordion_active" : ""}`}>
        {question}
        <div className={`accordion_answerWrapper ${active ? "accordion_open" : ""}`}>
          <div className="accordion_answer">{answer}</div>
        </div>
      </li>
      <button className="accordion_button" onClick={onToggle}>
        <span className="accordion_control">{active ? "-" : "+"}</span>
      </button>
    </div>
    
  )
}

export default AccordionItem;