import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts: { contacts } }) => contacts.items;
export const selectIsLoading = ({ contacts: { contacts } }) =>
  contacts.isLoading;
export const selectError = ({ contacts: { contacts } }) => contacts.error;
export const selectFilter = ({ contacts }) => contacts.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().trim().includes(filter.toLowerCase().trim()) ||
        (number && number.trim().includes(filter.toLowerCase().trim()))
    );
  }
);