import axios from "axios";
import { AXIOS_BASE_URL } from "../../constants/helperConstants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTraining = createAsyncThunk(
    "training/addTraining",
    async (trainingObject, { rejectWithValue }) => {
        try {
            console.log("trainingObject: " , trainingObject);
            const response = await axios.post(
                AXIOS_BASE_URL + "/training/addTraining", trainingObject
            );
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const listTrainings = createAsyncThunk(
    "training/listTrainings",
    async (_, { rejectWithValue }) => {
        try {
            console.log("Trying fetching associates...");
            const response = await axios.get(
                AXIOS_BASE_URL + "/training/listTraining"
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const assignTraining = createAsyncThunk(
    "training/assignTraining",
    async ({ emailIds, trainingId }, { rejectWithValue }) => {
        try {
            console.log("Trying fetching associates...");
            const response = await axios.post(
                `${AXIOS_BASE_URL}/training/assign`,
                JSON.stringify(emailIds),
                {
                    params: {
                        trainingId: trainingId 
                    }
                }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const assignedAssociateList = createAsyncThunk(
    "training/assignedAssociateList",
    async (trainingId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                AXIOS_BASE_URL + "/training/assigned-associated", {
                params: {
                    trainingId: trainingId
                }
            }
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);	

export const getAllAssignedTraining = createAsyncThunk(
    "training/getAllAssignedTraining",
    async (_, { rejectWithValue }) => {
        try {
            console.log("Trying fetching associates...");
            const response = await axios.get(
                AXIOS_BASE_URL + "/training/get-all-assigned-training"
            );
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);