export type AccessTokenPayload = {
  exp: number;
  iat: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  session_state: string;
  acr: string;
  "allowed-origins": string[];
  realm_access: {
    roles: string[];
  };
  resource_access: {
    account: {
      roles: string[];
    };
    "healthehr-web-app": {
      roles: string[];
    };
  };
  scope: string;
  sid: string;
  email_verified: boolean;
  preferred_username: string;
  email: string;
};
