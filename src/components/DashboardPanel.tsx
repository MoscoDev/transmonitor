import TransactionMetricCard from "./MetricCard";
import { Payment } from "./Payment";

export default function DashboardPanel() {

  const transactionMetrics: TransactionMetric[] = [
    {
      name: "Daily Transaction Volume",
      value: 2342,
    },
    {
      name: "Daily Transaction Value",
      value: 2342,
      currency: "₦",
    },
    {
      name: "Total Transaction Volume",
      value: 452000,
    },
    {
      name: "Total Transaction Value",
      value: 4000000,
      currency: "₦",
    },

    // Add more metrics as needed
  ];


  return (
    <div className="w-full flex-1 flex flex-col gap-8 py-8 pr-6">
      <div className="flex gap-3 flex-wrap">
        {transactionMetrics &&
          transactionMetrics.map(({ name, value, currency }, index) => (
            <div className="flex gap-3 relative " key={index}>
              <TransactionMetricCard
                key={index}
                name={name}
                value={value}
                currency={currency}
              />
            </div>
          ))}
      </div>
      <div className="flex w-full h-96 bg-brand-blue/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="689"
          height="160"
          viewBox="0 0 689 160"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 159.955L4.36103 142.455L19.6502 141.704L30.3373 135.14L41.5101 134.779L49.6521 125.128L56.8132 100.036L61.4039 91.0583L73.6643 109.785L83.6355 112.634L90.9314 107.198L99.7347 83.2335L124.975 131.823L135.367 110.895L147.281 121.399L153.703 105.384L154.956 97.7L164.628 89.8529L169.622 79.1894L175.143 94.085L174.229 103.866L179.322 105.312L183.273 100.958L193.342 32.03L203.185 122.417L211.734 109.533V102.174L219.042 94.5708L222.463 88.7426L228.759 79.9773L243.728 89.1173L251.179 94.085L257.195 90.8693L267.686 105.323L282.948 76.9154L287.413 92.4067L296.982 103.124L306.258 99.6912L310.591 92.4046L317.526 89.1131L318.4 82.8568L326.314 67.4743L337.933 71.8431L344.186 60.666L357.409 147.86L368.767 129.924L383.736 128.67L401.672 141.399L408.641 91.7448L417.382 94.5399L421.496 88.7042L423.814 90.5683L428.162 89.9992L430.647 92.5103L437.55 94.148L437.673 99.704L445.924 103.226L456.235 102.447L456.777 93.1466L459.37 56.6058L467.113 57.2357L476.173 65.6198L498.842 48.4747L508.615 30.8983L512.962 36.4639L514.605 41.9835L522.57 48.3082L536.104 36.6027L560.826 -3.05176e-05L568.003 13.6411L588.287 35.9194L595.927 26.1014L604.234 21.5437L618.401 28.3712L627.337 21.785L642.824 30.6773L650.069 13.1222L664.147 13.5984L666.671 17.6618L689 7.90266V159.955H57.0295H0Z"
            fill="url(#paint0_linear_1_25)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_25"
              x1="55.3508"
              y1="52.9883"
              x2="55.3508"
              y2="187.244"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0294FF" stop-opacity="0.45" />
              <stop offset="1" stop-color="white" stop-opacity="0.01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* payment section */}
      
      <Payment />
    </div>
  );
}
