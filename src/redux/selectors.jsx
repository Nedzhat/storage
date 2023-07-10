import { statusFilters } from "./filterEquipment/constants";

export const getDevices = (state) => state.devices.items;

export const getEmployees = (state) => state.employees.items;

export const getStatusFilter = (state) => state.filter.status;

export const getTypeFilter = (state) => state.filter.type;

export const getUser = (state) => state.user.employee;

export const getUserDevices = (devices, email) => {
  return devices.filter((device) => device.employee_email === email);
};

export const getVisibleDevice = (devices, statusFilter, type) => {
  let res = [];
  let finallyRes = [];

  switch (statusFilter) {
    case statusFilters.use:
      res = devices.filter((device) => device.status === statusFilter);
      if (type === "all") {
        return res;
      }
      finallyRes = res.filter((device) => device.type === type);
      return finallyRes;

    case statusFilters.stock:
      res = devices.filter((device) => device.status === statusFilter);
      if (type === "all") {
        return res;
      }
      finallyRes = res.filter((device) => device.type === type);
      return finallyRes;

    default:
      if (type === "all") {
        return devices;
      }
      finallyRes = devices.filter((device) => device.type === type);
      return finallyRes;
  }
};
