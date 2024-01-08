import React from 'react'

const Overview = () => {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between">
                <div className="text-[20px] font-medium  ">Overview</div>
                <div className="flex items-center cursor-pointer gap-[6px] py-[6px] px-[10px] border border-[#ccc] bg-white rounded-[4px] text-[#3f3f46]   ">
                    <span>Last month</span>
                    <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="stroke-2   ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>


            <div className="mt-7 flex justify-between gap-6 ">
                <div className="py-6 px-5 bg-white rounded-lg w-full flex flex-col gap-4 h-fit relative">
                    <div className="flex gap-[6px] items-center text-[#3f3f46]">
                        <div className="">Online Orders</div>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="font-[600] text-[28px] ">231</div>
                    </div>
                </div>
                <div className="py-6 px-5 bg-white rounded-lg w-full flex flex-col gap-4 h-fit relative">
                    <div className="flex gap-[6px] items-center text-[#3f3f46]">
                        <div className="">Amount Processed</div>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="font-[600] text-[28px] ">₹23,92,312.19</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview