import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./filterEquipment/constants";

export const getDevices = (state) => state.devices.items;

export const getEmployees = (state) => state.employees.items;

export const getStatusFilter = (state) => state.filterDevices.status;

export const getTypeFilter = (state) => state.filterDevices.type;

export const getQueryFilter = (state) => state.filterDevices.query;

export const getEmployeesFilter = (state) => state.filterEmployees;

export const getUser = (state) => state.user.employee;

export const getUserDevices = (devices, email) => {
  return devices.filter((device) => device.employee_email === email);
};

export const getVisibleDevice = createSelector(
  [getDevices, getStatusFilter, getTypeFilter, getQueryFilter],
  (devices, statusFilter, type, query) => {
    return devices.filter((device) => {
      console.log(device);
      const statusMatch =
        statusFilter === "all" || device.status === statusFilter;
      const typeMatch = type === "all" || device.type === type;
      const nameMatch =
        query === "" || device.name.toLowerCase().includes(query.toLowerCase());
      return statusMatch && typeMatch && nameMatch;
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
