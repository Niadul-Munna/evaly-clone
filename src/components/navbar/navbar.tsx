import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Menu from "./menu";
const Navbar = () => {
  return (
    <div className="shadow-md divide-y">
      <div className=" px-24 py-5 flex items-center justify-between ">
        <div className="flex items-center justify-between gap-12">
          <Image src={assets.logo} alt="logo" width={100} height={100} />
          <div className="flex items-center w-full">
            <Input
              className="rounded-r-none placeholder:text-sm bg-blue-50 w-[620px] py-5"
              placeholder="Search in Evaly"
            />
            <Button className="rounded-l-none font-semibold text-base py-5">
              Search
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <ShoppingCart />
          <span className="flex items-center gap-2">
            <User />
            Sign in
          </span>
        </div>
      </div>
      <div className="px-24 py-5">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
