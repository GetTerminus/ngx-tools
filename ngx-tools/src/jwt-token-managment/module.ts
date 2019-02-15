import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  StoreModule,
  ActionReducerMap,
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import {
  jwtTokenProviderReducer,
} from './reducer';

import { JwtTokenProviderEffects } from './effects';
import { State, JWT_TOKEN_MANAGEMENT_STATE_TOKEN } from './state';
import { TokenEscalator } from './utilities/token-escalator';
import { RetryWithEscalation } from './utilities/retry-with-escalation';
import { TokenExtractor } from './utilities/token-extractor';
import { ClaimMap } from './claim-map';
import { INITIAL_TOKEN_NAME } from './tokens';
import { DefaultTokenRequired } from './guards/defaultTokenRequired';


// Not sure why this second param is required in strict mode
export const reducers: ActionReducerMap<State, any> = {
  jwtTokens: jwtTokenProviderReducer,
};


@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature(
      JWT_TOKEN_MANAGEMENT_STATE_TOKEN,
      reducers,
    ),
    EffectsModule.forFeature([
      JwtTokenProviderEffects,
    ]),
  ],
  providers: [
    RetryWithEscalation,
    TokenEscalator,
    TokenExtractor,
    DefaultTokenRequired,
  ],
})
export class JwtTokenManagementModule {
  static forRoot<CM>({
    initialTokenName,
  }: {initialTokenName: keyof CM}) {
    return {
      ngModule: JwtTokenManagementModule,
      providers: [
        {
          provide: INITIAL_TOKEN_NAME,
          useValue: initialTokenName,
        },
      ],
    };
  }
}

