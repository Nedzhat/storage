import { createSelector } from "@reduxjs/toolkit";

export const getDevices = (state) => state.devices.items;

export const getEmployees = (state) => state.employees.items;

export const getStatusFilter = (state) => state.filterDevices.status;

export const getTypeFilter = (state) => state.filterDevices.type;

export const getQueryFilter = (state) => state.filterDevices.query;

export const getEmployeesFilter = (state) => state.filterEmployees;

export const getUser = (state) => state.user.employee;

export const getWorkplacesSix = (state) => state.workplaces.sixFloor;

export const getWorkplacesFive = (state) => state.workplaces.fiveFloor;

export const getWorkplacesRemote = (state) => state.workplaces.remote;

export const getUserDevices = (devices, email) => {
  return devices.filter((device) => device.employee_email === email);
};

export const getVisibleDevice = createSelector(
  [getDevices, getStatusFilter, getTypeFilter, getQueryFilter],
  (devices, statusFilter, type, query) => {
    const searchQuery = query.toLowerCase();
    return devices.filter((device) => {
      const statusMatch =
        statusFilter === "all" || device.status === statusFilter;
      const typeMatch = type === "all" || device.type === type;
      const nameMatch =
        query === "" || device.name.toLowerCase().includes(searchQuery);
      const snMatch =
        query === "" || device.sn.toLowerCase().includes(searchQuery);
      const typeMatchQuery =
        query === "" || device.type.toLowerCase().includes(searchQuery);
      return (
        statusMatch && typeMatch && (nameMatch || snMatch || typeMatchQuery)
      );
    });
  }
);

export const getVisibleEmployees = createSelector(
  [getEmployees, getEmployeesFilter],
  (employees, filter) => {
    const normalizedFilter = filter.query.toLowerCase();
    const visibleContacts = employees.filter((employee) => {
      return employee.name.toLowerCase().includes(normalizedFilter);
    });

    return visibleContacts;
  }
);
