/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { abbreviate } from "../utils";
import { getPaymentRecords } from "../services/paymentRecords.service";

export const Payment = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [recordsPerPage, setRecordsPerPage] = useState<number>(10);
  const [filter, setFilter] = useState<string>("All");
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(recordsPerPage);
  const [displayedRecords, setDisplayedRecords] = useState<any[]>([]);
  const [serachFocus, setSerachFocus] = useState<boolean>(false)
  const totalRecords = getPaymentRecords().length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  

  const getPageNumbers = () => {
    const pageNumbersList = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbersList.push(i);
    }
    return pageNumbersList;
  };

  useEffect(() => {
    const newStartIndex = (currentPage - 1) * recordsPerPage;
    const newEndIndex = newStartIndex + recordsPerPage;

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);

    const filteredRecords =
      filter === "All"
        ? getPaymentRecords().slice(newStartIndex, newEndIndex)
        : getPaymentRecords()
            .filter((item) => item.status === filter)
            .slice(newStartIndex, newEndIndex);

    setDisplayedRecords(filteredRecords);
  }, [filter, currentPage, recordsPerPage]);

  useEffect(() => {
    const updatedPageNumbers = getPageNumbers();
    setPageNumbers(updatedPageNumbers);
  }, [totalPages]);

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-[#262626] text-3xl">Payments</h1>
      <div className="flex w-full gap-12 py-3 items-center justify-">
        {/* Left section */}
        <div className="left flex gap-2 items-center text-sm">
          <p>showing</p>
          <select
            className="text-brand-blue"
            name="record"
            id="record"
            onChange={(e) => setRecordsPerPage(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
          <p>out of {totalRecords} payments</p>
        </div>
        {/* Middle section */}
        <div
          className={`middle flex px-2 border-b ${
            serachFocus ? "border-brand-blue" : "border-brand-lighter-grey"
          } w-[40%]`}
        >
          <img src="./img/Search.svg" alt="" />
          <input
            type="text"
            className="input-field w-full bg-transparent p-2 text-sm border-none outline-none"
            placeholder="Search payments"
            onChange={(e) => {
              const searchQuery = e.target.value.toLowerCase();
              const filteredRecords = getPaymentRecords().filter(
                (record) =>
                  record.name.toLowerCase().includes(searchQuery) ||
                  record.status.toLowerCase().includes(searchQuery) ||
                  record.transactionNumber.toLowerCase().includes(searchQuery)
              );
              setDisplayedRecords(filteredRecords.slice(startIndex, endIndex));
            }}
            onFocus={() => setSerachFocus(true)}
            onBlur={() => setSerachFocus(false)}
          />
        </div>
        {/* Right section */}
        <div className="right flex gap-2 items-center justify-center flex-1">
          <p>show</p>
          <select
            className="accent-brand-blue text-[#414042] border border-[#CED0DA] text-sm p-2"
            name="record"
            id="record"
            onChange={(e) => setFilter(e.target.value)}
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
      {/* Table section */}
      <div className="table">
        <div className="overflow-x-auto">
          <table className="text-sm w-full">
            {/* ... (table header) */}
            <thead className="bg-[#EAECF0] relative">
              <tr>
                <th className="p-3 text-left relative z-0 font-normal text-[#7F8FA4]">
                  Item Type
                </th>
                <th className="p-3 text-left relative z-0 font-normal text-[#7F8FA4]">
                  Name
                </th>
                <th className="p-3 text-left relative z-0 font-normal text-[#7F8FA4]">
                  Price
                </th>
                <th className="p-3 text-left relative z-0 font-normal text-[#7F8FA4]">
                  Transaction No
                </th>
                <th className="p-3 text-left relative z-0 font-normal text-[#7F8FA4] whitespace-nowrap">
                  Time
                </th>
                <th className="p-3 text-left relative z-0 font-normal text-[#7F8FA4]">
                  Status
                </th>
                <th className="p-3 text-left relative z-0 font-normal text-[#7F8FA4]"></th>
              </tr>
            </thead>
            {/* ... (table body) */}
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
                      <td className="p-3 text-left font-normal text-[#7F8FA4]">
                        <div className="w-9 h-9 rounded-full text-white bg-[#7F8FA4] flex justify-center items-center">
                          {abbreviate(name)}
                        </div>
                      </td>
                      <td
                        className={`p-3 text-left text-[14px] font-normal text-[#414042]`}
                      >
                        {name}
                      </td>
                      <td className="p-3 text-left text-[14px] font-normal text-[#7F8FA4]">
                        {price}
                      </td>
                      <td className="p-3 text-left text-[14px] font-normal text-[#7F8FA4]">
                        {transactionNumber}
                      </td>
                      <td className="p-3 text-left text-[14px] font-normal text-[#7F8FA4]">
                        {transactionTime}
                      </td>
                      <td className="p-3 text-left text-[14px] font-normal text-[#7F8FA4]">
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
        {/* Pagination section */}
        <div className="page-controller-detail flex justify-between mt-6">
          <p className="font-sans text-xs">
            Showing {startIndex + 1} to {endIndex} of {totalRecords} entries
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
                    ? "bg-brand-blue text-white p-2 border-y font-sans text-xs border-brand-lighter-grey hover:bg-brand-blue/80 hover:text-white disabled:bg-transparent disabled:text-black"
                    : "p-2 border border-brand-lighter-grey font-sans text-xs hover:bg-brand-blue/80 hover:text-white disabled:bg-transparent disabled:text-black"
                }
              >
                {pageNumber}
              </button>
            ))}
            <button
              className="p-2 border border-brand-lighter-grey font-sans text-xs hover:bg-brand-blue/80 hover:text-white disabled:bg-transparent disabled:text-black"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= totalRecords}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
