interface TransactionMetricCardProp {
  name: string;
  value: number;
  currency?: string;
}
export default function TransactionMetricCard({
  name,
  value,
  currency,
}: TransactionMetricCardProp) {
  return (
    <div className="w-full flex p-4 gap-6 items-center rounded-sm border shadow-brand-blue/50 bg-white">
      <div className="flex flex-col">
        <small className="text-sm text-brand-lighter-grey ">{name}</small>
        <p className="text-[#262626] text-lg">{(currency ? currency : "") + value}</p>
      </div>
      <img src="./img/small chart.svg" alt="chart" />
    </div>
  );
}
