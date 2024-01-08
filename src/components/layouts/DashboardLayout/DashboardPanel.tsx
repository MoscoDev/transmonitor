import TransactionMetricCard from "../../MetricCard";
import { Payment } from "../../Payment";
import ProgressCard from "../../ProgressCard";
import Chart from "./Chart";

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
  ];

  function formatDate(date: Date) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return `Today: ${formattedDate}`;
  }

  // Get today's date
  const today = new Date();

  // Format the date
  const formattedToday = formatDate(today);
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
      <div className="flex w-full items-center">
        <div className="w-[65%] flex-wrap">
          <div className="flex w-full justify-between items-center">
            <h4 className="text-lg font-bold text-brand-grey p-2.5">
              {formattedToday}
            </h4>
            <div className="flex flex-row gap-6">
              <select
                name="date-range"
                className="accent-brand-blue text-[#414042] border border-[#CED0DA] text-xs p-1"
                id="date-range"
              >
                <option className="text-xs" value="daily">Daily</option>
                <option className="text-xs" value="weekly">Weekly</option>
                <option className="text-xs" value="monthly">Monthly</option>
                <option className="text-xs" value="yearly">Yearly</option>
              </select>
              <div className="control flex gap-3 items-center">
                <button className="p-1 bg-white border border-brand-nav-color">
                  <img
                    src="./img/left-arrow.png"
                    className="w-5 h-5"
                    alt="left-arrow"
                  />
                </button>{" "}
                <button className="p-1 bg-white border border-brand-nav-color">
                  <img
                    src="./img/right-arrow.png"
                    className="w-5 h-5"
                    alt="right-arrow"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* <img. src="./img/mainChart.svg" className="w-full" alt="" /> */}
          <Chart />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <ProgressCard title="Orders" pending={20} reconcilled={80} />
          <ProgressCard title="Payments" pending={20} reconcilled={80} />
        </div>
      </div>
      {/* payment section */}

      <Payment />
    </div>
  );
}
