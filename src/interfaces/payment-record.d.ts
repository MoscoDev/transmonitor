interface PaymentRecord {
  name: string;
  img: string;
  price: string;
  transactionNumber: string;
  transactionTime: string;
  status: "Reconciled" | "Un-reconciled" | "Settled" | "Unsettled" | "Pending";
}

declare global {
  interface Window {
    PaymentRecord: PaymentRecord;
  }
}
