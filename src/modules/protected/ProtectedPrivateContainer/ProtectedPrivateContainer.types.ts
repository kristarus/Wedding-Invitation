import { Roles } from 'types/auth';

export interface IProtectedPrivateContainerProps {
  children: React.ReactNode;
  requiredRoles?: Roles[];
  requiredAnyRoles?: Roles[];
  redirectOnFail?: string;
  redirectOnAuthorizationFail?: string;
  saveUrlOnFail?: boolean;
  fallback?: JSX.Element;
}
