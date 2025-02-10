import { useState } from "react";
import { BasicInfo } from "./BasicInfo";
import { TestSetting } from "./TestSetting";
import { AddQuestionTest } from "./AddQuestionTest";
import { useParams } from "react-router-dom";

export const AddTest = () => {
  const { screen } = useParams("screen");
  console.log("Screen: " + screen);
  let defaultScreen = "screen1";
  if(screen){
    console.log("Screen: " + true);
    defaultScreen = screen;
  }
  const [nextScreen, setNextScreen] = useState(defaultScreen);
  const [formData, setFormData] = useState({
    basicInfo: {},
    testSetting: {},
    addQuestionTest: {}
  });

  const updateFormData = (screen, data) => {
    setFormData(prevData => ({
      ...prevData,
      [screen]: data
    }));
  };

  const renderScreen = () => {
    switch (nextScreen) {
      case "screen1":
        return <BasicInfo nextScreen={setNextScreen} formData={formData.basicInfo} updateFormData={updateFormData}/>;
      case "screen2":
        return <TestSetting nextScreen={setNextScreen} formData={formData.testSetting} updateFormData={updateFormData}/>;
      case "screen3":
        return <AddQuestionTest nextScreen={setNextScreen} formData={formData.addQuestionTest} updateFormData={updateFormData}/>;
      default:
        return <TestSetting nextScreen={setNextScreen} formData={formData.testSetting} updateFormData={updateFormData}/>;
    }
  };

  return <div>{renderScreen()}</div>;
};
