import { NextPage } from "next";
import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import {
  LuArrowUpRight,
  LuMapPin,
  LuShare,
  LuScanLine,
  LuQrCode,
  LuUsers,
  LuSearch,
} from "react-icons/lu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

const GuestList = [
  {
    name: "Juan Dela Cruz",
    email: "jdcruz@me.com",
    status: 0,
    date: "Sept 20, 2024",
  },
  {
    name: "Jirumaa Dev",
    email: "dev.jirumaa@me.com",
    status: 0,
    date: "Sept 20, 2024",
  },
  {
    name: "Sandugo Dimagiba",
    email: "jdcruz@me.com",
    status: 1,
    date: "Sept 20, 2024",
  },
  {
    name: "Juan Dela Cruz",
    email: "jdcruz@me.com",
    status: 0,
    date: "Sept 20, 2024",
  },
];

const ManageEvent: NextPage = () => {
  const [guest, setGuest] = useState(45);
  return (
    <div className="min-h-screen bg-black bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat">
      <Header />
      <Navbar />
      <section className="h-[727px] pb-[14px] pt-[48px]">
        <div className="mx-auto flex max-w-[788px] items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <img
              className="h-5 rounded-full"
              src="/assets/logo/icon.png"
              alt=""
            />
            <div className="text-[32px] font-medium text-[#FFFFFFC8]">
              DvCode General Assembly
            </div>
          </div>
          <a
            href="#"
            className="flex h-7 items-center justify-center gap-1 rounded-md bg-[#FFFFFF14] px-[12px] py-[11px] text-[14px] font-medium leading-none text-[#FFFFFFA3] hover:bg-gray-400"
          >
            Event Page <LuArrowUpRight />
          </a>
        </div>

        <div>
          <Tabs defaultValue="guest" className="pt-[8px]">
            <TabsList className="mx-auto flex max-w-[788px] items-start justify-start px-0 dark:bg-transparent dark:text-[#818384]">
              <TabsTrigger
                value="overview"
                className="items-start rounded-none text-[16px] dark:data-[state=active]:border-b dark:data-[state=active]:bg-transparent"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="guest"
                className="items-start rounded-none text-[16px] dark:data-[state=active]:border-b dark:data-[state=active]:bg-transparent"
              >
                Guests
              </TabsTrigger>
              <TabsTrigger
                value="registration"
                className="items-start rounded-none text-[16px] dark:data-[state=active]:border-b dark:data-[state=active]:bg-transparent"
              >
                Registration
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="overview"
              className="border-t border-gray-600/30"
            >
              <div className="mx-auto mt-[28px] flex max-w-[788px] flex-col gap-[20px]">
                <div>
                  <a
                    href="#"
                    className="flex w-fit items-center gap-2 rounded-lg border border-gray-600/30 bg-gray-800/40 px-[22px] py-[9px] text-[18px] font-semibold text-white backdrop-blur-sm"
                  >
                    <LuShare /> Share Event
                  </a>
                </div>

                <div className="flex gap-x-[20px] rounded-lg border border-gray-600/30 bg-gray-800/40 p-[12px] text-white backdrop-blur-sm">
                  <div className="flex flex-1">
                    <div className="relative h-[280px] w-[371px] overflow-hidden rounded-lg bg-blue-950">
                      <div className="absolute bottom-2 left-1/2 mx-auto flex w-[355px] -translate-x-1/2 justify-between rounded-md bg-[#13151752] py-2 backdrop-blur-md">
                        <div className="flex items-center gap-1 pl-4 text-[14px] text-[#FFFFFFCC]">
                          happ3n/654jhsd78 <LuArrowUpRight />
                        </div>
                        <div className="pr-4 text-[14px] uppercase text-[#FFFFFF7A]">
                          Copy
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="mb-[16px] mt-[8px]">
                      <h3 className="text-[18px] font-medium">When & Where</h3>
                    </div>

                    <div className="flex flex-col gap-[20px]">
                      <div className="flex gap-4">
                        <div className="h-[50px] w-[50px] rounded-lg border border-gray-600/30 text-center">
                          <div className="rounded-t-md bg-[#FFFFFF14] py-1 text-[9px] font-medium uppercase text-gray-300">
                            May
                          </div>
                          <div className="flex flex-1 items-center justify-center rounded-b-md p-0.5 text-[16px] font-medium uppercase text-gray-300">
                            10
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="text-[16px] font-medium">Today</div>
                          <div className="text-[14px] text-[#FFFFFFC9]">
                            10:00 PM - May 29, 11:00 PM GMT+8
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg border border-gray-600/30 text-center">
                          <LuMapPin className="text-xl text-gray-300" />
                        </div>
                        <a
                          href="#"
                          className="ml-4 flex flex-col justify-center gap-0.5 text-white"
                        >
                          <div className="flex gap-1 text-[16px] font-medium">
                            Mendez Resort and Events Place{" "}
                          </div>
                          <div className="text-[14px] font-medium text-[#FFFFFFC9]">
                            San Jose Delmonte Bulacan, Central Luzon
                          </div>
                        </a>
                      </div>

                      <div className="flex flex-col">
                        <div className="text-[13px] text-[#FFFFFFC9]">
                          The Address is shown publicly on the event page.
                        </div>
                        <button className="mt-[16px] flex items-center justify-center gap-1 rounded-lg bg-[#FFFFFF14] px-[10px] py-[6px] text-[14px] font-medium text-[#FFFFFFA3]">
                          <LuScanLine /> Check In Guests
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-[10px] text-[20px] font-medium text-[#FFFFFF]">
                    Host
                  </h2>
                  <div className="flex gap-x-[20px] rounded-lg border border-gray-600/30 bg-gray-800/40 p-[12px] text-white backdrop-blur-sm">
                    <div className="flex items-center text-[14px] text-[#818384]">
                      <img
                        className="h-5 rounded-full"
                        src="/assets/logo/icon.png"
                        alt=""
                      />
                      <h1 className="ml-2 text-[16px] font-medium text-white">
                        Jirumaa Dev
                      </h1>
                      <p className="ml-2 text-[16px] font-light text-white">
                        dev.jirumaa@gmail.com
                      </p>
                      <div className="ml-2 flex items-center justify-center rounded-2xl bg-[#07A46022] px-[7px] py-[4px] text-[12px] font-medium leading-none text-[#47C97E]">
                        Creator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="guest" className="border-t border-gray-600/30">
              <div className="mx-auto mt-[28px] flex max-w-[788px] flex-col gap-[20px]">
                <div className="flex text-[20px] font-semibold text-white">
                  At a Glance
                </div>
                <div className="flex flex-col">
                  <div className="flex w-full justify-between pb-[8px]">
                    <div className="text-[24px] text-[#939597]">
                      {guest} <span className="text-[16px]">guests</span>
                    </div>
                    <div className="text-[24px] text-[#939597]">
                      <span className="text-[16px]">cap</span> 50
                    </div>
                  </div>

                  <progress
                    value={guest}
                    max={50}
                    className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
                  />
                </div>

                <div className="flex gap-4 border-b border-gray-600/30 pb-[32px]">
                  <a
                    href="#"
                    className="flex w-fit items-center gap-2 rounded-lg border border-gray-600/30 bg-gray-800/40 py-[9px] pl-[10px] pr-[40px] text-[18px] font-semibold text-white backdrop-blur-sm"
                  >
                    <div className="rounded-md bg-[#29804e]/25 p-2">
                      <LuQrCode className="text-[25px] text-[#50bd7d]" />
                    </div>
                    Check In Guests
                  </a>
                  <a
                    href="#"
                    className="flex w-fit items-center gap-2 rounded-lg border border-gray-600/30 bg-gray-800/40 py-[9px] pl-[10px] pr-[40px] text-[18px] font-semibold text-white backdrop-blur-sm"
                  >
                    <div className="rounded-md bg-[#FBD85B]/25 p-2">
                      <LuUsers className="text-[25px] text-[#FBD85B]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="flex">Guest List</p>
                      <span className="text-[13px] text-[#939597]">
                        Shown to guests
                      </span>
                    </div>
                  </a>
                </div>

                <div>
                  <div className="flex pb-[12px] text-[20px] font-semibold text-white">
                    Guest List
                  </div>
                  <div className="relative">
                    <Input
                      className="pl-10 text-[18px] font-semibold text-[#939597] dark:bg-transparent placeholder:dark:text-[#939597]"
                      placeholder="Search..."
                    />
                    <LuSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#939597]" />
                  </div>
                </div>

                <Table className="border-gray-600/30">
                  <TableBody className="rounded-lg border-gray-600/30">
                    {GuestList.map((guest, index) => (
                      <TableRow
                        key={index}
                        className="border-gray-600/30 bg-gray-800/40"
                      >
                        <TableCell className="flex gap-2 ">
                          <img
                            className="h-5 rounded-full"
                            src="/assets/logo/icon.png"
                            alt=""
                          />
                          <p className="text-[16px] font-medium text-[#FFFFFF]">
                            {guest.name}{" "}
                            <span className="ml-2 text-[15px] text-[#FFFFFF80]">
                              {guest.email}
                            </span>
                          </p>
                        </TableCell>
                        {/* <TableCell className="text-[16px] text-[#FFFFFF80]">
                          
                        </TableCell> */}
                        <TableCell className="text-right">
                          <div className="rounded-md bg-[#29804e]/25 text-center text-[12px] font-medium text-[#29804e] ">
                            Going
                          </div>
                        </TableCell>
                        <TableCell className="text-right text-[14px] font-medium text-[#FFFFFF80]">
                          {guest.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent
              value="registration"
              className="border-t border-gray-600/30"
            >
              <div className="mx-auto mt-[28px] flex max-w-[788px] text-white">
                Registration
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default ManageEvent;
