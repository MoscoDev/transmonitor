interface TransactionMetric {
  name: string;
  value: number;
  currency?: string;
}
declare global {
  interface Window {
    TransactionMetric: TransactionMetric;
  }
}
