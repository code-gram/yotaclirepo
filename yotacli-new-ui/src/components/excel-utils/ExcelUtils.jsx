import * as XLSX from 'xlsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ExportToExcel = (data, fileName) => {
    if(data.length === 0) {
        alert("Unable to generate report. Data is not available.");
        return;
    }else {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, fileName + '.xlsx');
        toast.success("report generated",{ className: 'toast-info' });
    }
    <div>
        <ToastContainer/>
    </div>
}