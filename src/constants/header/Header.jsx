import React from 'react'

const Header = () => {
    return (
        <div className="py-4 px-8 border-b border-[#ccc] flex justify-between bg-white">
            <div className="flex items-center gap-3">
                <div className="text-[20px] font-medium ">Payouts</div>
                <div className="mt-1 flex gap-[6px] text-[12px] cursor:pointer text-[#71717a] items-center justify-center ">
                    <div className="cursor-pointer">
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
                        </svg>
                    </div>
                    <div className="">How it works?</div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center gap-[6px] py-[6px] px-4 rounded-lg bg-[#f7f7f7] text-[#71717a]">
                    <div className="">
                        <svg width="20" height="20" xmlns=" http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input className="placeholder:text-[#71717a] outline-none border-none bg-transparent w-[334px]" type="text" placeholder="Search features, tutorials, etc." />
                </div>
            </div>

            <div className="flex gap-[10px] ">
                <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] " >
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0789 0.021356L1.50421 3.04411C0.916842 3.14907 0.5 3.71583 0.5 4.36657V11.2517C0.5 11.9025 0.916842 12.4692 1.50421 12.5742L3.09579 12.8891C3.74 14.0646 4.95263 16.1007 6.58211 17.759C7.13158 18.3258 8.04105 17.822 7.92737 16.9824C7.77579 15.8698 7.81368 14.6733 7.87053 13.8337L17.0789 15.6389C17.8179 15.7859 18.5 15.1561 18.5 14.3165V1.34381C18.5 0.504157 17.8179 -0.125583 17.0789 0.021356ZM6.31684 8.66979C6.31684 8.9007 6.14632 9.08962 5.93789 9.08962H4.38421C4.17579 9.08962 4.00526 8.9007 4.00526 8.66979V6.9485C4.00526 6.7176 4.17579 6.52867 4.38421 6.52867H5.93789C6.14632 6.52867 6.31684 6.7176 6.31684 6.9485V8.66979ZM10.6558 8.66979C10.6558 8.9007 10.4853 9.08962 10.2768 9.08962H8.72316C8.51474 9.08962 8.34421 8.9007 8.34421 8.66979V6.9485C8.34421 6.7176 8.51474 6.52867 8.72316 6.52867H10.2768C10.4853 6.52867 10.6558 6.7176 10.6558 6.9485V8.66979ZM15.0137 8.66979C15.0137 8.9007 14.8432 9.08962 14.6347 9.08962H13.0811C12.8726 9.08962 12.7021 8.9007 12.7021 8.66979V6.9485C12.7021 6.7176 12.8726 6.52867 13.0811 6.52867H14.6158C14.8242 6.52867 14.9947 6.7176 14.9947 6.9485V8.66979H15.0137Z" fill="#4D4D4D"/>
                    </svg>
                </div>
                <div className="flex items-center justify-center bg-[#dfdddd] h-10 w-10 rounded-full cursor-pointer text-[#3f3f46] ">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6018 18.8073C13.0079 19.4502 11.992 19.4502 11.3981 18.8073L4.43352 11.2679C3.54605 10.3072 4.22745 8.75005 5.53535 8.75005L19.4646 8.75005C20.7725 8.75005 21.4539 10.3072 20.5664 11.2679L13.6018 18.8073Z" fill="#4D4D4D"/>
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Header