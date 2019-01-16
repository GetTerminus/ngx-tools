import { ClaimMap } from './claim-map';

import * as JwtTokenProviderActions from './actions';


export interface JwtTokenProviderState<C = ClaimMap>  {
  defaultToken?: string;
  tokens: { [P in Extract<keyof C, string>]?: string };
}

export const initialState: JwtTokenProviderState = {
  tokens: {},
};

export function jwtTokenProviderReducer<C = ClaimMap>(
  state = initialState,
  action: JwtTokenProviderActions.Actions<C>,
): JwtTokenProviderState {
  switch (action.type) {
    case JwtTokenProviderActions.ActionTypes.StoreToken: {
      let newState: JwtTokenProviderState = {
        ...state,
        tokens: {...state.tokens},
      };

      if (action.resetAllOtherTokens) {
        newState = {tokens: {}};
      }


      if (action.isDefaultToken) {
        newState.defaultToken = action.token;
      }

      newState.tokens[action.tokenName] = action.token;

      return newState;
    }
    case JwtTokenProviderActions.ActionTypes.TokenExpired: {
      const newState = {
        ...state,
        tokens: {...state.tokens},
      };

      if (state.defaultToken && state.defaultToken === action.token) {
        delete newState.defaultToken;
      }

      for (const k in state.tokens) {
        if (state.tokens[k] && state.tokens[k] === action.token) {
          delete newState.tokens[k];
        }
      }

      return newState;
    }
    default: {
      return state;
    }
  }
}
