import { UnsubscribeReason } from "../constants/formConst";

export type UnsubscribePayload = {
  reason: UnsubscribeReason;
  otherReason?: string;
};
