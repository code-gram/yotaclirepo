import { Routes, Route } from "react-router-dom";
import TitleDashboard from "./components/dashboard/TitleDashboard";
import TitleBatchList from "./components/batch/batchlist/TitleBatchList";
import TitleTechnologyList from "./components/technology/listTechnology/TitleTechnologyList";
import TitleCreateBatch from "./components/batch/createbatch/TitleCreateBatch";
import TitleUpdateBatch from "./components/batch/batchupdate/TitleUpdateBatch";
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
const routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TitleDashboard />} />
        <Route path="batchlist" element={<TitleBatchList />} />
        <Route path="createbatch" element={<TitleCreateBatch />} />
        <Route path="/updatebatch/:id" element={<TitleUpdateBatch />} />
        <Route path="/deletebatch/:id" element={<TitleBatchList />} />
        <Route path="technologylist" element={<TitleTechnologyList />} />
        <Route path="addtechnology" element={<TitleAddTechnology />} />
        <Route
          path="/updatetechnology/:id"
          element={<TitleUpdateTechnology />}
        />
        <Route path="/deletetechnology/:id" element={<TitleTechnologyList />} />
        {/* <Route path="questionlist" element={<TitleQuestionList />} /> */}
        <Route path="/recordTechnology" element={<TitleRecordTechnology />} />
        <Route
          path="/recordTechDetails/:name"
          element={<TitleRecordTechnology />}
        />
        <Route path="/associatelist" element={<TitleAssociateList />} />
        <Route path="/associatelist" element={<TitleAssociateList />} />
        <Route
          path="/registerAssociate/"
          element={<TitleRegisterAssociate />}
        />
        <Route path="listquestion" element={<TitleQuestionList />} />
        <Route path="addquestion" element={<TitleAddQuestion />} />
        <Route path="/updatequestion/:id" element={<TitleUpdateQuestion />} />
        <Route path="/deletequestion/:id" element={<TitleQuestionList />} />
        <Route path="/associatelist" element={<TitleAssociateList />} />
        <Route
          path="/registerAssociate/"
          element={<TitleRegisterAssociate />}
        />
        <Route path="/updateAssociate/:id" element={<TitleUpdateAssociate />} />
        <Route path="/deleteAssociate/:id" element={<TitleAssociateList />} />
        <Route path="testList" element={<TitleAssignTest />} />
        <Route path="/assignTest" element={<TestAssign />} />
        <Route path="/student" element={<Dashboard />} />
        <Route path="/addclient" element={<TitleAddClient />} />
        <Route path="/clientlist" element={<TitleClientList />} />
        <Route path="/viewQuestion" element={<TitleViewQuestion />} />
        {/* <Route path="/testlist" element={<TitleTestList />} /> */}
        <Route path="/addClientQuestion" element={<TitleAddClientQuestion />} />
        <Route path="/test" element={<TitleTestList />} />
      </Routes>
    </>
  );
};

export default routing;
