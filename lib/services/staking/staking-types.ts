import { AmountHumanReadable } from '~/lib/services/token/token-types';

export interface StakingPendingRewardAmount {
    id: string;
    address: string;
    amount: AmountHumanReadable;
}
