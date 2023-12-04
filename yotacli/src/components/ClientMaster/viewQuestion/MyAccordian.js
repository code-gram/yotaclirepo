import React, { useEffect, useState } from 'react'
import {  fetchClientQuestion } from '../../../redux/features/client/ClientQuestionListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
const MyAccordian = () => {
  const { clientId } = useParams();
  console.log("Client Question id="+clientId);
    const [show, setShow] = useState(false);
    const list = useSelector((state) => state.clientQuestionsList);
    console.log("list="+list);
   
    const dispatch = useDispatch();
     useEffect(() => {
       dispatch(fetchClientQuestion(clientId));
       console.log(list);
   },  [dispatch, clientId]);

    return (
      <>
    {list
        ? list.clientQuestions.map((list, key) => (
            <div>
              <div className="main-heading" key={key}>
               
                <p>{key+1}</p>
                <div className="sub">
                  {" "}
                  <h3> {list.Question}</h3>
                </div>
              </div>
              <div key={key}>{<p className="answers"> {list.Answer} </p>}</div>
            </div>
          ))
        : null}
 </>
  )
}

export default MyAccordian