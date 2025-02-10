import Circle from "./Circle ";
import { useSelector } from "react-redux";
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
              // return <Circle key={index} index={index} isAttempted={selectedOptions?.[index]} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItereateCircle;
