import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";
import { logOut } from "../auth/operations";
import { selectNameFilter } from "../filters/selectors";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

export const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        const contactIdx = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items[contactIdx] = action.payload;
      })
      .addCase(editContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = false;
        state.loading = false;
      }),
});

export const selectContacts = (state) => state.contacts.items;

export default slice.reducer;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);
