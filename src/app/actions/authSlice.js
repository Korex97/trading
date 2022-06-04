import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";


export const setToken = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("lastTimeLogin", new Date(Date.now()).getTime());
};

export const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const timeAllowed = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem("lastTimeLogin");
    if (timeSinceLastLogin < timeAllowed){
        return JSON.parse(localStorage.getItem("user"));
    }
};

export const deleteToken = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("lastTimeLogin");
}

// Get user from localStorage

const user = getToken();

const initialState = {
    user: user ? user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// Login
export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        return await authService.login(credentials)
    } catch (error) {
        const message = error.response.data.detail;
        return thunkAPI.rejectWithValue(message)
    }
});

export const getUser = createAsyncThunk("user/get", async (thunkAPI) => {
    try {
        return await authService.getUser()
    } catch (error) {
        const message = error.response.data.detail;
        return thunkAPI.rejectWithValue(message);
    }
});

export const logout = createAsyncThunk("auth/logout", async (thunkAPI) => {
    try {
        deleteToken();
    } catch (error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
    }
})

export const register = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData)
    } catch (error) {
        const message = error.response.data.detail || error.response.data.detail[0].msg;
        return thunkAPI.rejectWithValue(message)
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = "Kindly Login User Not Authorized ";
                state.user = null;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = null;
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer