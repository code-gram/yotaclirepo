import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
// import MyTestButton from "./MyTestButton";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./StartTest.css";
import { updateTestStatus } from "../../features/TestResult/testResultAction";
import parse, { domToReact } from 'html-react-parser';

const StartTest = () => {
  const { associates } = useSelector((state) => state.associates);
  const { token, email } = useSelector((state) => state.auth.userData);
  const { id } = useParams("id");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(updateTestStatus(id));
    }
  }, []);

  const description = associates.filter((des) => {
    return des.id == id ? des.testDescription : null;
  });
  const instruction = associates.filter((des) => {
    return des.id == id ? des.testInstruction : null;
  });

  const testTitle = associates.filter((des) => {
    return des.id == id ? des.testTitle : null;
  });
  

  return (
    <>
      <Card>
        {testTitle.map((des) => {
          return <h5>{des.testTitle}-Test</h5>;
        })}
        <div className="p-3">
          <h5 className="instruction">DESCRIPTION</h5>
          <hr />
          {description.map((des) => {
            // return <p>{parse(des.testDescription)}</p>;
            return (
              <ul className="inst">
                <li>{parse(des.testDescription)}</li>
              </ul>
            );
          })}

          <h5 className="instruction">INSTRUCTION</h5>
          <hr />
          {instruction.map((ins) => {
            return (
              <ul className="inst">
                <li>{parse(ins.testInstruction)}</li>
              </ul>
            );
          })}
          <Link to={`/my-test/` + id}>
            {/* to={"/my-test"} */}
            <button type="button" class="btn btn-warning">
              Start Test
            </button>
          </Link>
        </div>
      </Card>
    </>
  );
};
export default StartTest;
