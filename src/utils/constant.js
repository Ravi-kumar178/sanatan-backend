export const UserRolesEnum = {
  SUPER_ADMIN: "super_admin",
  COURSE_ADMIN: "course_admin",
  CUSTOMER_PANEL_ADMIN: "customer_panel_admin",
  USER: "user",
};

export const AvailableUserRoles = Object.values(UserRolesEnum);

export const UserCourseStatusEnum = {
  Active: "active",
  Revoked: "revoked",
  Expired: "expired",
};

export const AvailableUserCourseStatus = Object.values(UserCourseStatusEnum);
