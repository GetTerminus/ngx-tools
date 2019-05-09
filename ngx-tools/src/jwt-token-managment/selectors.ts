import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { jwtDecode } from './../jwt-decode/index';
import {
  JWT_TOKEN_MANAGEMENT_STATE_TOKEN,
  State,
} from './state';


export function getJwtTokenRoot<CM>() {
  return createFeatureSelector<State<CM> | undefined>(JWT_TOKEN_MANAGEMENT_STATE_TOKEN);
}


/**
 * Return all current tokens
 */
export function getTokens<CM>() {
  return createSelector(
    getJwtTokenRoot<CM>(),
    jwtTokenState => (jwtTokenState ? jwtTokenState.jwtTokens.tokens : {}),
  );
}


export function getDefaultToken() {
  return createSelector(
    getJwtTokenRoot(),
    jwtTokenState => (jwtTokenState ? jwtTokenState.jwtTokens.defaultToken : undefined),
  );
}


export function tokenForWithoutDefault<CM, ServiceName extends Extract<keyof CM, string>>(serviceName: ServiceName) {
  return createSelector(
    getTokens<CM>(),
    (userState): string | undefined => userState[serviceName],
  );
}


export function tokenFor<CM, ServiceName extends Extract<keyof CM, string>>(serviceName: ServiceName) {
  return createSelector(
    getDefaultToken(),
    tokenForWithoutDefault<CM, ServiceName>(serviceName),
    (defaultToken, serviceToken): string | undefined => serviceToken || defaultToken,
  );
}


export function claimsFor< CM, ServiceName extends Extract<keyof CM, string>>(serviceName: ServiceName) {
  return createSelector(
    tokenFor<CM, ServiceName>(serviceName),
    (token): CM[ServiceName] | null =>  {
      if (token) {
        try {
          return jwtDecode<CM[ServiceName]>(token);
        } catch (e) {
          // tslint:disable-next-line no-unsafe-any
          if (e.name === 'InvalidTokenError') {
            return null;
          }
          throw e;
        }
      } else {
        return null;
      }
    },
  );
}


export function claimValue<CM, ServiceName extends Extract<keyof CM, string>, ClaimName extends keyof CM[ServiceName]>(
  serviceName: ServiceName,
  claimName: ClaimName,
) {
  return createSelector(
    claimsFor<CM, ServiceName>(serviceName),
    (claims): CM[ServiceName][ClaimName] | null => (claims ? claims[claimName] : null),
  );
}
