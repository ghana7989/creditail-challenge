export type OnboardingStackParamList = {
  OnboardingStep1: undefined;
};
export interface OnboardingStep1Props {}

export type OnChangeTextEvent = {
  target: {
    name: string;
    value: string;
  };
  type: string;
};

export type Form1Inputs = {
  ownerName: string;
  emailAddress: string;
  aadharNumber: string;
  panNumber: string;
};
