export { JwtTokenManagementModule } from './module';
export { ClaimMap } from './claim-map';
export {
  tokenFor,
  tokenForWithoutDefault,
  claimsFor,
  claimValue,
} from './selectors';


export {
  ActionTypes as JwtTokenManagementActionTypes,
  StoreToken as StoreJwtToken,
  TokenExpired as JwtTokenExpired,
  TokenNearingExpiration as JwtTokenNearingExpiration,
  AllTokensExpired as AllJwtTokensExpired,
  EscalateToken as EscalateJwtToken,
  StoreTokenConstructor,
} from './actions';


export { TokenEscalator } from './utilities/token-escalator';
export { RetryWithEscalation } from './utilities/retry-with-escalation';
export { TokenExtractor } from './utilities/token-extractor';
export { regenerateOnRetry } from './utilities/regenerate-on-retry';

import {
  JWT_TOKEN_MANAGEMENT_STATE_TOKEN, jwtModuleEmptyState,
} from './state';

export const jwtEmptyStateReset = {
  [JWT_TOKEN_MANAGEMENT_STATE_TOKEN]: jwtModuleEmptyState,
};
