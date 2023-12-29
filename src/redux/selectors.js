// export const selectContacts = state => state.contacts.items;

// export const selectFilter = state => state.filter.filter;

import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;

export const selectIsLoggenIn = state => state.auth.isLoggenIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFilter = state => state.filter.filter;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => [
    ...contacts.filter(contact => {
      const hasContact = contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return hasContact;
    }),
  ]
);