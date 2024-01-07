import React, { useState } from "react";
import { abbreviate } from "../utils";
import { getPaymentRecords } from "../services/paymentRecords.service";

export const Payment = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage] = useState<number>(5);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const displayedRecords = getPaymentRecords().slice(startIndex, endIndex);

  const totalRecords = getPaymentRecords().length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();


  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-[#262626] text-3xl">Payments</h1>
      <div className="flex w-full gap-12 py-3 items-center justify-between">
        <div className="left flex gap-2 items-center text-sm">
          <p>showing</p>
          <select className="text-brand-blue" name="record" id="record">
            <option value={10}>5</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
          <p>out of {totalRecords} payments</p>
        </div>
        <div className="middle flex flex-1 px-2 justify-center borde-b border-brand-lighter-grey w-[60%]">
            <img src="./img/Search.svg" alt="" />
          <input
            type="text"
            className="input-field w-full p-2 text-sm border-none outline-none"
            placeholder="Type here..."
          />
        </div>
        <div className="right flex gap-2 items-center">
          <p>show</p>
          <select
            className="accent-brand-blue text-[#414042] text-sm p-2"
            name="record"
            id="record"
          >
            <option value={"All"}>All</option>
            <option value={"Reconciled"}>Reconciled</option>
            <option value={"Un-reconciled"}>Un-reconciled</option>
            <option value={"Settled"}>Settled</option>
            <option value={"Unsettled"}>Unsettled</option>
            <option value={"Pending"}>Pending</option>
          </select>
        </div>
      </div>
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
                      <td className={`p-3 text-left text-[14px]`}>{name}</td>
                      <td className="p-3 text-left text-[14px]">{price}</td>
                      <td className="p-3 text-left text-[14px]">
                        {transactionNumber}
                      </td>
                      <td className="p-3 text-left text-[14px]">
                        {transactionTime}
                      </td>
                      <td className="p-3 text-left text-[14px]">
                        <div
                          className={`text-sm p-2 pl-4 items-center  flex gap-2 rounded-md text-center ${
                            status === "Reconciled"
                              ? "text-brand-green"
                              : status === "Un-reconciled"
                              ? "text-[#787C90]"
                              : status === "Settled"
                              ? "text-brand-blue"
                              : status === "Unsettled"
                              ? "text-brand-yellow"
                              : "text-brand-yellow"
                          } border rounded-s-full rounded-e-full`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            className={
                              status === "Reconciled"
                                ? "fill-brand-green"
                                : status === "Un-reconciled"
                                ? "fill-[#787C90]"
                                : status === "Settled"
                                ? "fill-brand-blue"
                                : status === "Unsettled"
                                ? "fill-brand-yellow"
                                : "fill-brand-yellow"
                            }
                            fill="none"
                          >
                            <circle cx="4.5" cy="4.5" r="4.5" />
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
            Showing {startIndex + 1} to {endIndex} of{" "}
            {getPaymentRecords().length} entries
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
              disabled={endIndex >= getPaymentRecords().length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
