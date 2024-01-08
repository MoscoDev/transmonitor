export default function ProgressCard({
  title,
  pending,
  reconcilled,
}: ProgressCard) {
  const total = reconcilled + pending;
  return (
    <div className="w-full flex flex-col p-4 gap-1.5 rounded-sm border bg-white">
      <small className="text-sm text-black font-bold ">{title}</small>
      <div className="flex w-full">
        <hr
          style={{ width: `${(reconcilled / total) * 100}%` }}
          className={`text-brand-green bg-brand-green h-1.5`}
        />
        <hr
          style={{ width: `${(pending / total) * 100}%` }}
          className={`text-brand-yellow bg-brand-yellow h-1.5`}
        />
      </div>
      <div className="flex flex-row gap-2">
        <small className="text-sm text-[#262626] ">Pending {title}:</small>
        <small className="text-brand-yellow text-sm">{pending}</small>
      </div>
      <div className="flex flex-row gap-2">
        <small className="text-sm text-[#262626] ">Reconciled {title}:</small>
        <small className="text-brand-green text-sm">{reconcilled}</small>
      </div>
      <div className="flex flex-row gap-2">
        <small className="text-sm text-[#262626]">Total {title}:</small>
        <small className=" text-brand-blue  text-sm">
          {reconcilled + pending}
        </small>
      </div>
    </div>
  );
}
