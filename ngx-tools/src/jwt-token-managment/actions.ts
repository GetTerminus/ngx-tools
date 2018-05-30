import { defineTypeEnum } from '../define-type/define-type';
import { Action } from '@ngrx/store';

// tslint:disable: variable-name
export enum ActionTypes  {
  StoreToken             = '[ngx-tools-jwt-token-provider] Store Token',
  TokenNearingExpiration = '[ngx-tools-jwt-token-provider] Token Nearing Expiration',
  TokenExpired           = '[ngx-tools-jwt-token-provider] Token Expired',
  EscalateToken          = '[ngx-tools-jwt-token-provider] Escalate Token',
  EscalationSuccess      = '[ngx-tools-jwt-token-provider] Escalation Success',
  EscalationFailed       = '[ngx-tools-jwt-token-provider] Escalation Failed',
  AllTokensExpired       = '[ngx-tools-jwt-token-provider] All Tokens have Expired',
}
// tslint:enable: variable-name
defineTypeEnum(ActionTypes);

export interface StoreTokenConstructor<C> {
  tokenName: keyof C;
  token: string;
  isDefaultToken?: boolean;
  resetAllOtherTokens?: boolean;
}

export class StoreToken<C> implements Action {
  type: typeof ActionTypes.StoreToken = ActionTypes.StoreToken;

  public tokenName: keyof C;
  public token: string;
  public isDefaultToken: boolean;
  public resetAllOtherTokens: boolean;

  constructor(
    {
      tokenName,
      token,
      isDefaultToken,
      resetAllOtherTokens,
    }: StoreTokenConstructor<C>,
  ) {
    this.tokenName = tokenName;
    this.token = token;
    this.isDefaultToken = !!isDefaultToken;
    this.resetAllOtherTokens = !!resetAllOtherTokens;
  }
}
export class TokenExpired<C> implements Action {
  type: typeof ActionTypes.TokenExpired = ActionTypes.TokenExpired;

  public tokenName: keyof C;
  public token: string;

  constructor(
    {
      tokenName,
      token,
    }: {tokenName: keyof C; token: string},
  ) {
    this.tokenName = tokenName;
    this.token = token;
  }
}

export class AllTokensExpired implements Action {
  type: typeof ActionTypes.AllTokensExpired = ActionTypes.AllTokensExpired;
}


export class TokenNearingExpiration<C> implements Action {
  type: typeof ActionTypes.TokenNearingExpiration = ActionTypes.TokenNearingExpiration;

  public tokenName: keyof C;
  public token: string;

  constructor(
    {
      tokenName,
      token,
    }: {tokenName: keyof C; token: string},
  ) {
    this.tokenName = tokenName;
    this.token = token;
  }
}

export class EscalateToken<C> implements Action {
  type: typeof ActionTypes.EscalateToken = ActionTypes.EscalateToken;

  constructor(public tokenName: keyof C) {}
}

export class EscalationSuccess<C> implements Action {
  type: typeof ActionTypes.EscalationSuccess = ActionTypes.EscalationSuccess;

  constructor(public tokenName: keyof C) {}
}

export class EscalationFailed<C> implements Action {
  type: typeof ActionTypes.EscalationFailed = ActionTypes.EscalationFailed;

  constructor(public tokenName: keyof C) {}
}

export type Actions<C>
  = AllTokensExpired
  | StoreToken<C>
  | EscalateToken<C>
  | EscalationFailed<C>
  | EscalationSuccess<C>
  | TokenExpired<C>
  | TokenNearingExpiration<C>
;


