import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken ,headerContents } from "../../../components/utils/Authentication";

const token = getAuthToken();
const fetchNotification = createAsyncThunk("notificationlist/fetchNotification", (email) => {
  return axios.get(`/yota-api/notifications/${email}`,
    {
      headers: headerContents()
    }
  )
    .then(response => response.data)
    .catch(error => error.error);
})

const updateNotification = createAsyncThunk("notificationList/updateNotification", (email) => {
  return axios.get(`/yota-api/notifications/${email}`, {
    headers: headerContents()
  }
  )
    .then(response => console.log("updated...."))
    .catch(error => error.error)
})

const postNotification = createAsyncThunk("notificationList/postNotification", (data) => {
  const notification = {
    email: data.email,
    message: data.message.subject
  }
  console.log(notification)
  return axios.post("/yota-api/notifications/", notification,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": token
      }
    }
  )
    .then(response => response.data)
    .catch(error => error.error);
})
const notificationList = createSlice({
  name: "notificationlist",
  initialState: {
    notifications: [],
    count: 0,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotification.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(fetchNotification.fulfilled, (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
      state.count = action.payload.filter(e => { return e.status === 'unread' }).length;
    })
    builder.addCase(fetchNotification.rejected, (state, action) => {
      state.loading = false;
      state.notifications = [];
      state.count = 0;
      state.error = action.payload;
    })
  }
})

export default notificationList.reducer;
export { fetchNotification, updateNotification, postNotification }