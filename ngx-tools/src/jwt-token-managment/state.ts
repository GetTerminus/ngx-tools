import { ClaimMap } from './claim-map';

import {
  JwtTokenProviderState,
} from './reducer';


export const JWT_TOKEN_MANAGEMENT_STATE_TOKEN = 'ngx-tools-jwtTokenManagement';

export interface State<C = ClaimMap> {
  jwtTokens: JwtTokenProviderState<C>;
}

