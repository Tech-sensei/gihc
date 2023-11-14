import { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import "./FAQ.scss";
import { questionsData } from "../../data/data";


const FAQ = () => {
  const [showAnswers, setShowAnswers] = useState(
    questionsData.map((_, index) => index === 0)
  );

  const toggleAnswer = (index) => {
    setShowAnswers((prevShowAnswers) => {
      const newShowAnswers = prevShowAnswers.map((value, idx) => {
        return idx === index ? !value : false;
      });
      return newShowAnswers;
    });
  };

  return (
    <section className="section faq" id="faq">
      <article className="faq__container container">

        <div className="faq__container--header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq__container--contents">
          <div className="faq__container--contents-questions">
            {questionsData.map((question, index) => {
              const { id, title, info } = question;
              const isOpen = showAnswers[index];
              return (
                <div
                  key={id}
                  className="question-wrapper"
                  onClick={() => toggleAnswer(index)}
                >
                  <button className="question-btn">
                    {isOpen ? (
                      <AiOutlineMinusSquare />
                    ) : (
                      <AiOutlinePlusSquare />
                    )}
                  </button>
                  <div className="question">
                    <h3 className={isOpen ? "open-question" : ""}>{title}</h3>
                    {isOpen && <p className="answer">{info}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </article>
    </section>
  );
};

export default FAQ;
