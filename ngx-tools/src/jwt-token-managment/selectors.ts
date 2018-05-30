import {
  createSelector,
  createFeatureSelector,
  MemoizedSelector, // tslint:disable-line no-unused-variable
} from '@ngrx/store';


import {
  State,
  JWT_TOKEN_MANAGEMENT_STATE_TOKEN,
} from './state';

import { jwtDecode } from '../jwt-decode/index';

export function getJwtTokenRoot<CM>() {
  return createFeatureSelector<State<CM> | undefined>(JWT_TOKEN_MANAGEMENT_STATE_TOKEN);
}

/**
 * Return all current tokens
 */
export function getTokens<CM>() {
  return createSelector(
    getJwtTokenRoot<CM>(),
    (jwtTokenState) => jwtTokenState ? jwtTokenState.jwtTokens.tokens : {},
  );
}

export function getDefaultToken() {
  return createSelector(
    getJwtTokenRoot(),
    (jwtTokenState) => jwtTokenState ? jwtTokenState.jwtTokens.defaultToken : undefined,
  );
}

export function tokenForWithoutDefault<
  CM,
  ServiceName extends keyof CM
  >(serviceName: ServiceName) {
    return createSelector(
      getTokens<CM>(),
      (userState): string | undefined => userState[serviceName],
    );
  }

export function tokenFor<
  CM,
  ServiceName extends keyof CM
  >(serviceName: ServiceName) {
    return createSelector(
      getDefaultToken(),
      tokenForWithoutDefault<CM, ServiceName>(serviceName),
      (defaultToken, serviceToken): string | undefined => serviceToken || defaultToken,
    );
  }

export function claimsFor<
  CM,
  ServiceName extends keyof CM
  >(serviceName: ServiceName) {
  return createSelector(
    tokenFor<CM, ServiceName>(serviceName),
    (token): CM[ServiceName] | null =>  {
      if (token) {
        try {
          return jwtDecode<CM[ServiceName]>(token);
        } catch (e) {
          // istanbul ignore else
          if (e.name === 'InvalidTokenError') {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        return null;
      }
    },
  );
}

export function claimValue<
  CM,
  ServiceName extends keyof CM,
  ClaimName extends keyof CM[ServiceName]
  >(serviceName: ServiceName, claimName: ClaimName) {
    return createSelector(
      claimsFor<CM, ServiceName>(serviceName),
      (claims): CM[ServiceName][ClaimName] | null => {
        return claims ? claims[claimName] : null;
      },
    );
  }
