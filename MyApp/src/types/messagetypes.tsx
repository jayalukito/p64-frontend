export type RiskType = 'smish' | 'normal' | 'promo';
export type MessageItem = {
  id: string;
  sender: string;
  time: string;
  text: string;
  risk: RiskType;
  score: number;
};
