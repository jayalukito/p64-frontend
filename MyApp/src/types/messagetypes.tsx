export type RiskType = 'High Risk' | 'Medium Risk' | 'Safe';
export type MessageItem = {
  id: string;
  sender: string;
  time: string;
  text: string;
  risk: RiskType;
  score: number;
};