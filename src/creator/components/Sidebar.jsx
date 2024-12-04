"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import {
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Sidebar({ className }) {
  const [isIncomeOpen, setIsIncomeOpen] = React.useState(false);

  const SidebarContent = React.forwardRef((props, ref) => (
    <div ref={ref} {...props}>
      <div className="flex flex-col h-full font-satoshi bg-[#D3D3D3]/10">
        <div className="flex items-center justify-center text-2xl font-bold p-4 ">
          CPanel
        </div>
        {/* Profile Section */}
        <div className="p-4">
          <div className="flex items-center gap-3 border border-gray-300 p-2 bg-white rounded-lg shadow-sm">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatars/01.png" alt="Profile" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-bold">Nishal Poojary</span>
              <span className="text-xs text-gray-500">Business Account</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-3 overflow-y-auto">
          <div className="space-y-1">
            <p className="text-xs font-medium text-gray-500 px-4 py-2">MAIN</p>
            <Button variant="ghost" className="w-full justify-start gap-3 px-4">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3 px-4">
              <Users className="h-4 w-4" />
              Manage Content
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-4 font-medium"
            >
              <FileText className="h-4 w-4" />
              Subscription
            </Button>

            <Button
              variant="ghost"
              className="w-full justify-start gap-3 px-4"
              onClick={() => setIsIncomeOpen(!isIncomeOpen)}
            >
              <BarChart3 className="h-4 w-4" />
              Payments
              {isIncomeOpen ? (
                <ChevronUp className="ml-auto h-4 w-4" />
              ) : (
                <ChevronDown className="ml-auto h-4 w-4" />
              )}
            </Button>
            {isIncomeOpen && (
              <div className="pl-11 space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-500 hover:text-black"
                >
                  Earnings
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-500 hover:text-black"
                >
                  Refunds
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-500 hover:text-black"
                >
                  Declines
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-500 hover:text-black"
                >
                  Payouts
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto p-3 space-y-1">
          <Button variant="ghost" className="w-full justify-start gap-3 px-4">
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 px-4 text-red-500 hover:text-red-500 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Logout Account
          </Button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72 overflow-y-auto">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:block fixed top-0 left-0 h-full border-r",
          className
        )}
      >
        <SidebarContent className="w-72 h-full" />
      </div>
    </>
  );
}
