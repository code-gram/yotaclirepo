import React from "react";
import Button from "../../../ui/button/Button";
import classes1 from "./HeaderItem.module.css";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";
import ReactDOM from "react-dom";
import "./styles.css";
import { createClientQuestion } from "../../../redux/features/client/CreateClientQuestionSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ClientQuestionForm = ({ cId }) => {
  const { id } = useParams();

  const ClientId = id;
 

  const { register, control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      clientQuestions: [{ Question: "", Answer: "" ,ClientId:ClientId}],
    },
  });

  const dispatch = useDispatch();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "clientQuestions",
  });

  const appendNewField = () => {
    const newField = {
      Question: "",

      Answer: "",

      ClientId: ClientId,
    };

    append(newField);
  };
  const onSubmit = (data) => {
    console.log("data---------", data);
    dispatch(createClientQuestion(data));
    window.location.reload();
    alert("Client Question uploaded successfully");
  };

  return (
    <>
      <form className="questionForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="row mt-3">
            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
              <h5 className={classes1.boxtitle}>Add Client Question</h5>
            </div>

            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
              <form className="form-inline">
                <div className={classes1.btn}>
                  <button
                    type="button"
                    className="client_button"
                    onClick={appendNewField}
                  >
                    <AiOutlinePlusCircle /> Create Question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        {fields.map((item, index) => {
          return (
            <li
              key={item.id}
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "",
                  width: "80%",
                }}
              >
                <div>
                  <input
                    type="hidden"
                    className="form-control RegisterTechnologyForm_inputField__kEsDI"
                    name={`clientQuestions.${index}.ClientId`}
                    defaultValue={ClientId}
                  />
                </div>
                <div>
                  <input
                    className="form-control RegisterTechnologyForm_inputField__kEsDI mx-4" 
                    style={{ border: "2px solid grey", marginTop: "40px" }}
                    placeholder="Enter Interview Question"
                    {...register(`clientQuestions.${index}.Question`, {
                      required: true,
                    })}
                  />
                </div>
                <br />
                <div>
                  <Controller
                    render={({ field }) => (
                      <input
                        style={{ border: "2px solid grey" }}
                        className="form-control RegisterTechnologyForm_inputField__kEsDI mx-4"
                        placeholder="Enter Answer"
                        {...field}
                      />
                    )}
                    name={`clientQuestions.${index}.Answer`}
                    control={control}
                  />
                </div>
                <br />
              </div>
              <div
                style={{
                  display: "flex",
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                  justifyItems: "center",
                }}
              >
                
                <div>
                <a className="dropdown-item" onClick={() => remove(index)}><i class="fa-solid fa-trash" title="Delete"></i></a>
                </div>
              </div>
            </li>
          );
        })}

        <input className="submit_btn" type="submit" />
      </form>
    </>
  );
};

export default ClientQuestionForm;
