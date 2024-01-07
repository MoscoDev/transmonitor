import { useState } from "react";
import { getPaymentRecords } from "../services/paymentRecords.service";
import { abbreviate } from "../utils";
import TransactionMetricCard from "./MetricCard";

const paymentRecords = getPaymentRecords();
export default function DashboardPanel() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage, ] = useState<number>(5);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const displayedRecords = paymentRecords.slice(startIndex, endIndex);

  const totalRecords = paymentRecords.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

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

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "Reconciled":
        return "brand-green";
      case "Un-reconciled":
        return "[#787C90]";
      case "Settled":
        return "brand-blue";
      case "Unsettled":
        return "brand-yellow";
      case "Pending":
        return "brand-yellow";
      default:
        return "brand-green";
    }
  };

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
      <div className="flex flex-col flex-1">
        <h1 className="text-[#262626] text-3xl">Payments</h1>
        <div className="flex w-full h-24 bg-brand-blue/20">table-controls</div>
        <div className="table">
          <div className="overflow-x-auto">
            <table className=" text-sm w-full">
              <thead className="bg-[#EAECF0] relative">
                <tr>
                  <th className="p-3 text-left relative z-0">Item Type</th>
                  <th className="p-3 text-left relative z-0">Name</th>
                  <th className="p-3 text-left relative z-0">Price</th>

                  <th className="p-3 text-left relative z-0">Transaction No</th>

                  <th className="p-3 text-left relative z-0 whitespace-nowrap">
                    Time
                  </th>
                  <th className="p-3 text-left relative z-0">Status</th>
                  <th className="p-3 text-left relative z-0"></th>
                </tr>
              </thead>
              <tbody>
                {displayedRecords &&
                  displayedRecords.map(
                    (
                      {
                        img,
                        name,
                        price,
                        status,
                        transactionNumber,
                        transactionTime,
                      },
                      index
                    ) => (
                      <tr className="border-b py-3" key={index}>
                        <td className="p-3 text-left">
                          <div className="w-9 h-9 rounded-full text-white bg-[#7F8FA4] flex justify-center items-center">
                            {abbreviate(name)}
                          </div>
                        </td>
                        <td className="p-3 text-left text-[14px]">{name}</td>
                        <td className="p-3 text-left text-[14px]">{price}</td>
                        <td className="p-3 text-left text-[14px]">
                          {transactionNumber}
                        </td>
                        <td className="p-3 text-left text-[14px]">
                          {transactionTime}
                        </td>
                        <td className="p-3 text-left text-[14px]">
                          <div
                            className={`text-sm p-2 pl-4 items-center  flex gap-2 rounded-md text-center text-${getStatusColor(status)} border rounded-s-full rounded-e-full`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="9"
                              viewBox="0 0 9 9"
                              className={`fill-${getStatusColor(status)}`}
                              fill="none"
                            >
                              <circle
                                cx="4.5"
                                cy="4.5"
                                r="4.5"
                                fill={getStatusColor(status)}
                              />
                            </svg>
                            <p className="font-light text-[14px]">{status}</p>
                          </div>
                        </td>
                        <td className="p-3 text-left  gap-3 items-center ">
                          <img src="./img/Arrow.png" alt="" />
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
          <div className="page-controller-detail flex justify-between mt-6">
            <p className="font-sans text-xs">
              Showing {startIndex + 1} to {endIndex} of {paymentRecords.length}{" "}
              entries
            </p>
            <div className="page-controller">
              <button
                className="p-2 border border-brand-lighter-grey font-sans text-xs hover:bg-brand-blue/80 hover:text-white disabled:bg-transparent disabled:text-black"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={
                    pageNumber === currentPage
                      ? "bg-brand-blue text-white p-2 border-y font-sans text-xs border-brand-lighter-grey  hover:bg-brand-blue/80 hover:text-white disabled:bg-transparent disabled:text-black"
                      : "p-2 border border-brand-lighter-grey font-sans text-xs   hover:bg-brand-blue/80 hover:text-white disabled:bg-transparent disabled:text-black"
                  }
                >
                  {pageNumber}
                </button>
              ))}
              <button
                className="p-2 border border-brand-lighter-grey font-sans text-xs  hover:bg-brand-blue/80 hover:text-white disabled:bg-transparent disabled:text-black"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={endIndex >= paymentRecords.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
