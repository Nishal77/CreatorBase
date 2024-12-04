import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  MoreHorizontal,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  Download,
  Send,
  Repeat,
  Wallet,
  ArrowRight,
  RefreshCcw,
  IndianRupee,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerWithRange } from "@/components/ui/DataPickerWithRange";
import { TransactionCard } from "./TransactionDetails";
import "../styles/style.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Image, FileText, DollarSign, Phone, Key } from "lucide-react";

export function WalletDashboard() {
  return (
    <div className="flex-1 space-y-6 p-8 font-satoshi">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Hello! Name</h2>
        <DatePickerWithRange />
      </div>

      <div className="grid gap-3 lg:grid-cols-6">
        <Card className="lg:col-span-2 bg-[#D3D3D3]/10">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium font-s">
              Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 overflow-y-auto h-60 hide-scrollbar">
            <div className="space-y-3">
              <TransactionCard
                date="2023-10-01"
                time="10:00 AM"
                number="+91 9876543210"
                amount="₹5000"
                status="paid"
              />
              <TransactionCard
                date="2023-10-02"
                time="11:30 AM"
                number="+91 9123456789"
                amount="₹3000"
                status="pending"
              />
              <TransactionCard
                date="2023-10-03"
                time="01:45 PM"
                number="+91 9988776655"
                amount="₹4500"
                status="paid"
              />
              <TransactionCard
                date="2023-10-04"
                time="03:20 PM"
                number="+91 9876543211"
                amount="₹2000"
                status="pending"
              />
              <TransactionCard
                date="2023-10-05"
                time="04:50 PM"
                number="+91 9123456788"
                amount="₹3500"
                status="paid"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-4 bg-[#D3D3D3]/10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">
                Total Balance
              </CardTitle>
              <Button variant="ghost" size="sm">
                View Info
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex items-baseline">
                  <span className="flex items-center text-2xl font-bold">
                    <IndianRupee className="mr-1" />
                    289352.07
                  </span>
                  <span className="ml-2 text-xs text-green-500">+2.5%</span>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 border p-2 rounded-md">
                  <div className="p-2 border rounded-md">
                    <p className="text-xs text-muted-foreground">
                      Cardholder name
                    </p>
                    <p className="text-sm font-medium">Nishal Poojary</p>
                  </div>
                  <div className="p-2 border rounded-md">
                    <p className="text-xs text-muted-foreground">Card number</p>
                    <p className="text-sm font-medium">Nill</p>
                  </div>
                  <div className="p-2 border rounded-md">
                    <p className="text-xs text-muted-foreground">CVV</p>
                    <p className="text-sm font-medium">Nill</p>
                  </div>
                  <div className="p-2 border rounded-md">
                    <p className="text-xs text-muted-foreground">Expiry date</p>
                    <p className="text-sm font-medium">Nill</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4">
                <div className="grid grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-300">
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <p className="text-xs text-gray-500">Total Design</p>
                    <div className="flex items-center">
                      <p className="text-base font-semibold text-gray-900">
                        120
                      </p>
                      <ArrowUp className="ml-2 h-4 w-4 text-green-500" />
                      <p className="text-xs text-green-500 ml-1">+10</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                    <p className="text-xs text-gray-500">Monthly Design</p>
                    <div className="flex items-center">
                      <p className="text-base font-semibold text-gray-900">
                        30
                      </p>
                      <ArrowDown className="ml-2 h-4 w-4 text-red-500" />
                      <p className="text-xs text-red-500 ml-1">-5</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center">
                    <p className="text-xs text-gray-500">Backend Status</p>
                    <div className="flex items-center ml-auto">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <p className="ml-2 text-base font-semibold text-red-500">
                        Offline
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 ">
        <div className=" flex justify-end items-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-48 flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload Design
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Upload Design</DialogTitle>
                <DialogDescription>
                  Fill in the details below to upload your design.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Image className="h-4 w-4" />
                    Add Image
                  </label>
                  <Input id="image" type="file" className="mt-1" />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4" />
                    Add Description
                  </label>
                  <Textarea id="description" rows="3" className="mt-1" />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <DollarSign className="h-4 w-4" />
                    Add Price
                  </label>
                  <Input id="price" type="number" className="mt-1" />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Add Contact Number
                  </label>
                  <Input id="contact" type="tel" className="mt-1" />
                </div>
                <div>
                  <label
                    htmlFor="special-key"
                    className="block text-sm font-medium text-gray-700 flex items-center gap-2"
                  >
                    <Key className="h-4 w-4" />
                    Add Special Key
                  </label>
                  <Input id="special-key" type="text" className="mt-1" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Upload</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Client Space</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/path/to/logo1.png" alt="Logo" className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">John Doe</p>
            <p className="text-sm text-gray-500">+91 9876543210</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              View
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/path/to/logo2.png" alt="Logo" className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">Jane Smith</p>
            <p className="text-sm text-gray-500">+91 9123456789</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              View
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/path/to/logo3.png" alt="Logo" className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">Alice Johnson</p>
            <p className="text-sm text-gray-500">+91 9988776655</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              View
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/path/to/logo4.png" alt="Logo" className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">Bob Brown</p>
            <p className="text-sm text-gray-500">+91 9876543211</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              View
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/path/to/logo5.png" alt="Logo" className="h-12 w-12 mb-4" />
            <p className="text-lg font-medium">Charlie Green</p>
            <p className="text-sm text-gray-500">+91 9123456788</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">
              View
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <Button variant="outline" size="icon" className="w-full h-full flex items-center justify-center">
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
