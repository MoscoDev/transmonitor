interface ProgressCard {
  title: string;
  pending: number;
  reconcilled: number;
}



declare global {
  interface Window {
    ProgressCard: ProgressCard;
  }
}
