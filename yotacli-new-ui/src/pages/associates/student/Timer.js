import { useRef } from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Timer = ({ totaltime }) => {
  const totalMinutes = typeof totaltime === 'number' ? totaltime : parseInt(totaltime, 10);
  const totalSeconds = totalMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      setIsRunning(false);
      setOpen(true);
    }

    if (timeLeft === 300) {
      setAlertOpen(true);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="container text-start">
        <div className="row">
          <div className="col">
            <Card>
              <Card.Header>Timer</Card.Header>
              <Card.Body>
                <div className="timer" role="timer">
                  <div className="timer">
                    <span className="text"> Time Left: </span>
                    <span id="hour">{hours < 10 ? "0" + hours : hours}</span>
                    <span className="text"> Hrs </span>
                    <span id="minute">{minutes < 10 ? "0" + minutes : minutes}</span>
                    <span className="text"> Min </span>
                    <span id="second">{seconds < 10 ? "0" + seconds : seconds}</span>
                    <span className="text"> Sec</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Modal
        show={open}
        onHide={() => setOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Exam is over!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mr-4">
          <div>
            <h5>Thank you! Time's up!</h5>
          </div>
          <button
            className="submitt-button btn btn-success"
            type="submit"
            style={{ borderRadius: "revert-layer", marginLeft: "390px" }}>
            <Link className="nav-link" to="/test-result">
              Submit
            </Link>
          </button>
        </Modal.Body>
      </Modal>
      <Modal
        show={alertOpen}
        onHide={() => setAlertOpen(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Only 5 minutes left.....!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mr-4">
          <div>
            <h5>Please speed up your exam......!</h5>
          </div>
        </Modal.Body>
        <button onClick={()=>setAlertOpen(false)}>Ok</button>
      </Modal>
    </>
  );
};

export default Timer;