"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import react, { useState } from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Logo from "./logo";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure
      as="nav"
      className="bg-[#242424] z-50 fixed top-0 left-0 right-0"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-5 sm:px-5 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center md:mr-0 sm:mr-3">
                  <Logo />
                </div>
                <div className="hidden md:flex md:items-center md:justify-between flex-1">
                  <div className="flex ml-auto mr-auto">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium lg:mr-[30px] sm:mr-[15px] flex items-center md:mr-[15px] menu_drop">
                          Services
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute xl:left-[-100px] lg:left-[-180px] md:left-0 z-10 pt-9 w-max focus:outline-none mt-2">
                          <div className="sm:p-6 lg:p-[35px_49px_35px_49px] bg-[#4E4E4E] rounded-xl sm:w-full sm:max-w-[54%] lg:max-w-full">
                            <div className="flex flex-wrap">
                              <div className="mr-5 md:mb-7 lg:mb-0">
                                <Menu.Item>
                                  <h3 className="text-white text-xl lg:mb-10 mb-7">
                                    Design Services
                                  </h3>
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ UI/UX Design
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ Animations & Motion Design
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm"
                                      )}
                                    >
                                      ‣ Graphic Design Service
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="mr-5 md:mb-7 lg:mb-0">
                                <Menu.Item>
                                  <h3 className="text-white text-xl lg:mb-10 mb-7">
                                    Tech Services
                                  </h3>
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ Website Development
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ Intranet System
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm"
                                      )}
                                    >
                                      ‣ Applications Development
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="mr-5">
                                <Menu.Item>
                                  <h3 className="text-white text-xl mb-3">
                                    Video Production
                                    <br /> Services
                                  </h3>
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ Drone, Film, Photo, and Video
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ Documentaries
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm"
                                      )}
                                    >
                                      ‣ Reels Editing
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="">
                                <Menu.Item>
                                  <h3 className="text-white text-xl mb-10">
                                    Media Services
                                  </h3>
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ Social Media Management
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm mb-4"
                                      )}
                                    >
                                      ‣ Branding
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-sm"
                                          : "text-white",
                                        "block text-sm"
                                      )}
                                    >
                                      ‣ Events Management
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium lg:mr-[30px] sm:mr-[15px] flex items-center md:mr-[15px] menu_drop">
                          Case Studies
                          <ChevronDownIcon
                            className="-mr-1 h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute xl:left-0 lg:left-[-120px] md:left-[-220px] z-10 pt-9 w-max focus:outline-none mt-2">
                          <div className="sm:p-6 lg:p-[35px_49px_35px_49px] bg-[#4E4E4E] rounded-xl">
                            <div className="flex">
                              <div className="mr-5">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-xl"
                                          : "text-white",
                                        "block text-xl mb-4"
                                      )}
                                    >
                                      ‣ Legendairs Website
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-xl"
                                          : "text-white",
                                        "block text-xl mb-4"
                                      )}
                                    >
                                      ‣ Studijo BOS Website
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-xl"
                                          : "text-white",
                                        "block text-xl"
                                      )}
                                    >
                                      ‣ ECC Website
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="mr-5">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-xl"
                                          : "text-white",
                                        "block text-xl mb-4"
                                      )}
                                    >
                                      ‣ ECC Application
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-xl"
                                          : "text-white",
                                        "block text-xl mb-4"
                                      )}
                                    >
                                      ‣ Elysian Application
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-xl"
                                          : "text-white",
                                        "block text-xl"
                                      )}
                                    >
                                      ‣ BIZETRIX Dashboard
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? " text-white block text-xl"
                                          : "text-white",
                                        "block text-xl"
                                      )}
                                    >
                                      ‣ Slideonline Website
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </div>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <a className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium lg:mr-[30px] sm:mr-[15px] flex items-center md:mr-[15px]">
                      About Us
                    </a>
                    <a className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium flex items-center">
                      Careers
                    </a>
                  </div>
                  <div className="flex gap-4 text items-center">
                    {path !== "/" && (
                      <button className="bg-white border-2 border-[#D4D4D4] rounded-lg lg:py-2 lg:px-3 md:p-2 sm:p-3 text-sm shadow-btn-light">
                        <Image
                          src="/icons/search.svg"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>
                    )}
                    <Link
                      href="/contact"
                      className="bg-white border-2 border-[#D4D4D4] rounded-lg lg:py-2 lg:px-3 md:p-2 sm:px-4 sm:py-3 shadow-btn-light text-sm"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-5 pt-2 pb-6">
              <div className="flex flex-col">
                <Menu as="div" className="relative inline-block text-left p-2">
                  <div>
                    <Menu.Button className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium lg:mr-[30px] sm:mr-[15px] flex items-center md:mr-[15px]">
                      Services
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-[-10px] z-10 pt-1 w-max focus:outline-none mt-2">
                      <div className="p-4 bg-[#4E4E4E] rounded-xl max-w-[32%] overflow-auto h-[360px]">
                        <div className="flex flex-wrap">
                          <div className="mb-7">
                            <Menu.Item>
                              <h3 className="text-white text-xl mb-4">
                                Design Services
                              </h3>
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ UI/UX Design
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ Animations & Motion Design
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm"
                                  )}
                                >
                                  ‣ Graphic Design Service
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="mb-7">
                            <Menu.Item>
                              <h3 className="text-white text-xl mb-4">
                                Tech Services
                              </h3>
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ Website Development
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ Intranet System
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm"
                                  )}
                                >
                                  ‣ Applications Development
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="mr-5">
                            <Menu.Item>
                              <h3 className="text-white text-xl mb-3">
                                Video Production
                                <br /> Services
                              </h3>
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ Drone, Film, Photo, and Video
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ Documentaries
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm"
                                  )}
                                >
                                  ‣ Reels Editing
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="">
                            <Menu.Item>
                              <h3 className="text-white text-xl mb-10">
                                Media Services
                              </h3>
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ Social Media Management
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm mb-4"
                                  )}
                                >
                                  ‣ Branding
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-sm"
                                      : "text-white",
                                    "block text-sm"
                                  )}
                                >
                                  ‣ Events Management
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative inline-block text-left p-2">
                  <div>
                    <Menu.Button className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium lg:mr-[30px] sm:mr-[15px] flex items-center md:mr-[15px]">
                      Case Studies
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute xl:left-0 lg:left-[-120px] md:left-[-220px] z-10 pt-1 w-max focus:outline-none mt-2">
                      <div className="p-4 bg-[#4E4E4E] rounded-xl">
                        <div className="flex flex-col">
                          <div className="mr-5">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-lg"
                                      : "text-white",
                                    "block text-lg mb-4"
                                  )}
                                >
                                  ‣ Legendairs Website
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-lg"
                                      : "text-white",
                                    "block text-lg mb-4"
                                  )}
                                >
                                  ‣ Studijo BOS Website
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-lg"
                                      : "text-white",
                                    "block text-lg mb-4"
                                  )}
                                >
                                  ‣ ECC Website
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="mr-5">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-lg"
                                      : "text-white",
                                    "block text-lg mb-4"
                                  )}
                                >
                                  ‣ ECC Application
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-lg"
                                      : "text-white",
                                    "block text-lg mb-4"
                                  )}
                                >
                                  ‣ Elysian Application
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-lg"
                                      : "text-white",
                                    "block text-lg mb-4"
                                  )}
                                >
                                  ‣ BIZETRIX Dashboard
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                          <div className="">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? " text-white block text-lg"
                                      : "text-white",
                                    "block text-lg"
                                  )}
                                >
                                  ‣ Slideonline Website
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <a className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium flex items-center p-2">
                  About Us
                </a>
                <a className="text-white hover:text-white rounded-md md:text-xl text-sm font-medium flex items-center p-2">
                  Careers
                </a>
              </div>
              <div className="flex gap-4 text items-center mt-3">
                {path !== "/" && (
                  <button className="bg-white border-2 border-[#D4D4D4] rounded-lg text-sm p-2 shadow-btn-light">
                    <Image
                      src="/icons/search.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  </button>
                )}
                <Link
                  href="/contact"
                  className="bg-white border-2 border-[#D4D4D4] rounded-lg p-2 shadow-btn-light text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
