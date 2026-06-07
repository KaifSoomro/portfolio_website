import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "projectSlice",
    initialState: {
        projects: []
    },
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        }
    }
});

export const { setProjects } = projectSlice.actions;
export default projectSlice.reducer;