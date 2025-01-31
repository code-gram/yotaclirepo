import Circle from "./Circle ";
import { useDispatch, useSelector } from "react-redux";

function ItereateCircle({ selectedOptions ,onCircleClick}) {

  const { questions } = useSelector((state) => state.questions);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            {questions.map((data, index) => {
              return <Circle key={index} index={index} isAttempted={!!selectedOptions?.[index]} 
                onCircleClick={onCircleClick}
              />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItereateCircle;
