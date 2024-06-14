import _castArray from 'lodash/castArray';
import { Roles, User } from 'types/auth';

interface IUserHasPermissionProps {
  user: User;
  requiredRoles?: Roles[];
  requiredAnyRoles?: Roles[];
}

export const userHasPermission = ({ user, requiredRoles, requiredAnyRoles }: IUserHasPermissionProps) => {
  if (!user) {
    return false;
  }
  const checkRequiredRoles = (usersRoles: Roles[], requiredRoles: Roles[]) => {
    if (!usersRoles) {
      return true;
    }

    return _castArray(requiredRoles).every(role => {
      return !!usersRoles.includes(role);
    });
  };

  const checkPossibleRoles = (usersPermissions: Roles[], possibleRoles: Roles[]) => {
    return _castArray(possibleRoles).some(role => {
      return !!usersPermissions.includes(role);
    });
  };

  if (!requiredRoles && !requiredAnyRoles) {
    return true;
  }
  if (!requiredRoles && requiredAnyRoles) {
    return checkPossibleRoles(user.roles_array, requiredAnyRoles);
  }
  return checkRequiredRoles(user.roles_array, requiredRoles);
};
