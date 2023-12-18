import { Routes, Route } from "react-router-dom";
import TitleDashboard from "./components/dashboard/TitleDashboard";
import TitleTrainingList from "./components/training/traininglist/TitleTrainingList";
import TitleTechnologyList from "./components/technology/listTechnology/TitleTechnologyList";
import TitleCreateTraining from "./components/training/createtraining/TitleCreateTraining";
import TitleUpdateTraining from "./components/training/trainingupdate/TitleUpdateTraining";
import TitleAddTechnology from "./components/technology/addTechnology/TitleAddTechnology";
import TitleUpdateTechnology from "./components/technology/updateTechnology/TitleUpdateTechnology";
import TitleRecordTechnology from "./components/technology/recordTechnology/TitleRecordTechnology";
import TitleAssociateList from "./components/associate/listAssociates/TitleAssociateList";
import TitleUpdateAssociate from "./components/associate/updateAssociate/TitleUpdateAssociate";
import TitleRegisterAssociate from "./components/associate/registerAssociate/TitleRegisterAssociate";
import TestAssign from "./components/assignTest/TestAssign";
import TitleAssignTest from "./components/assignTest/TitleAssignTest";
import TitleQuestionList from "./components/Question/listQuestion/TitleQuestionList";
import TitleAddQuestion from "./components/Question/addQuestion/TitleAddQuestion";
import TitleUpdateQuestion from "./components/Question/updateQuestion/TitleUpdateQuestion";
import { Dashboard } from "./student/pages/Dashboard";
import TitleAddClient from "./components/ClientMaster/addClient/TitleAddClient";
import TitleClientList from "./components/ClientMaster/listClient/TitleClientList";
import TitleViewQuestion from "./components/ClientMaster/viewQuestion/TitleViewQuestion";
import TitleTestList from "./components/test/listTest/TitleTestList";
import TitleAddClientQuestion from "./components/ClientMaster/addClientQuestion/TitleAddClientQuestion";
import TitleUpdateClient from "./components/ClientMaster/updateClient/TitleUpdateClient";

const routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitleDashboard />} />
        <Route path="/traininglist" element={<TitleTrainingList />} />
        <Route path="createtraining" element={<TitleCreateTraining />} />
        <Route path="/updatetraining/:id" element={<TitleUpdateTraining />} />
        <Route path="/deletetraining/:id" element={<TitleTrainingList />} />
        <Route path="technologylist" element={<TitleTechnologyList />} />
        <Route path="addtechnology" element={<TitleAddTechnology />} />
        <Route path="/updatetechnology/:id" element={<TitleUpdateTechnology />}/>
        <Route path="/deletetechnology/:id" element={<TitleTechnologyList />} />
        <Route path="/recordTechnology" element={<TitleRecordTechnology />} />
        <Route path="/recordTechDetails/:name" element={<TitleRecordTechnology />} />
        <Route path="/registerAssociate/" element={<TitleRegisterAssociate />} />
        <Route path="listquestion" element={<TitleQuestionList />} />
        <Route path="/addquestion" element={<TitleAddQuestion />} />
        <Route path="/updatequestion/:id" element={<TitleUpdateQuestion/>}/>
        <Route path="/deletequestion/:id" element={<TitleQuestionList />} />
        <Route path="/associatelist" element={<TitleAssociateList />} />
        <Route path="/registerAssociate/" element={<TitleRegisterAssociate />}/>
        <Route path="/updateAssociate/:id" element={<TitleUpdateAssociate />} />
        <Route path="/deleteAssociate/:id" element={<TitleAssociateList />} />
        <Route path="testList" element={<TitleAssignTest/> } />
        <Route path="/assignTest" element={<TestAssign/>}/>
        <Route path="/student" element={<Dashboard/>}/>
        <Route path="/addclient"element={<TitleAddClient/>} />
        <Route path="/clientlist" element={<TitleClientList />} /> 
        <Route path="/viewQuestion" element={<TitleViewQuestion />} /> 
         <Route path="/addClientQuestion" element={<TitleAddClientQuestion/>} /> 
         <Route path="/test" element={<TitleTestList />} />
        <Route path="/viewQuestion/:clientId" element={<TitleViewQuestion />} /> 
        <Route path="/addClientQuestion" element={<TitleAddClientQuestion/>} /> 
        <Route path="/test" element={<TitleTestList />} />
        <Route path="/addClientQuestion/:id" element={<TitleAddClientQuestion />} /> 
        <Route path="/deleteclient/:id" element={<TitleClientList />} />
        <Route path="/updateclient/:id" element={<TitleUpdateClient />} />
       
      </Routes>
    </>
  );
};

export default routing;