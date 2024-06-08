import "./style.css";
import teesign from "../../../assets/Hole1.png";
import { questions } from "../questions";

export const Quiz = () => {
  return (
    <div className="question">
      <div className="question__infoside">
        <h2 className="question__title">Jamka #2</h2>
        <img
          className="question__teesign"
          src={teesign}
          alt="Teesign jamky č.2"
        />
        <img src="./icon-sun.png" alt="" className="question__weather" />
      </div>
      <div className="question__textside">
        <p className="question__textQuestion">{questions[0].question}</p>
        {questions[0].answers.map((answer, index) => (
          <p className="question__answer" key={index}>
            {answer.text}
          </p>
        ))}
        <button type="button">Přeskočit</button>
        <button type="button">OK</button>
      </div>
    </div>
  );
};
