import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("userSlice/getUser", async (arg) => {
  try {
    //fetch axios

    // const res = await axios.get(`url`);
    const data = {
      name: "Mr. Rios",
      dob: "03-11-1982",
      country: "UK",
    };

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userDetails: {
      name: "rafa Lima",
      dob: "03-11-1987",
      country: "BR",
    },
    address: {
      add_1: "",
      add_2: "",
      add_3: "",
      add_4: "",
      city: "",
      county: "",
    },
    isLogged: false,
    requestStatus: "",
  },

  reducers: {
    addUserName: (state, { payload }) => {
      console.log(payload, "from reducer add user");
      state.userDetails.name = payload;
    },
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {
      state.requestStatus = "loading";
    },
    [getUser.fulfilled]: (state, { payload }) => {
      // the payload is going to be your return
      console.log(payload, "from fulfilled");
      state.requestStatus = "success";
      state.userDetails = payload;
    },
    [getUser.rejected]: (state, action) => {
      state.requestStatus = "failed";
    },
  },
});

export const { addUserName } = userSlice.actions;

export default userSlice.reducer;
