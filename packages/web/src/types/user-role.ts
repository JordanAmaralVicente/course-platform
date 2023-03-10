export enum UserRole {
  TEACHER = "T",
  STUDENT = "S",
}

export const UserRoles = [
  {
    value: UserRole.TEACHER,
    label: "Professor",
  },
  {
    value: UserRole.STUDENT,
    label: "Estudante",
  },
];

export const UserRoleLabelMap = new Map<UserRole, string>([
  [UserRole.STUDENT, "Estudante"],
  [UserRole.TEACHER, "Professor"],
]);
