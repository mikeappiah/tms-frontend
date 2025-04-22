"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Megaphone,
  FileText,
  PieChart,
  Briefcase,
  Settings,
} from "lucide-react";
import { HiUser } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-transparent p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric Cards */}
        <MetricCard
          title="Total Users"
          value="1,234"
          change="35.19%"
          icon={<HiUser className="h-5 w-5 text-white" />}
          iconBg="bg-orange-500"
        />
        <MetricCard
          title="Total Tasks"
          value="2000"
          change="73.52%"
          icon={<FileText className="h-5 w-5 text-white" />}
          iconBg="bg-cyan-500"
        />
        <MetricCard
          title="Completed Tasks"
          value="1500"
          change="49.39%"
          icon={<PieChart className="h-5 w-5 text-white" />}
          iconBg="bg-pink-500"
        />
        <MetricCard
          title="Opened Tasks"
          value="300"
          change="18.33%"
          icon={<Briefcase className="h-5 w-5 text-white" />}
          iconBg="bg-green-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-4">
        {/* Chart Section */}

        <Component />

        {/* Updates Section */}
        <Card className="bg-white border border-gray-200 shadow-sm lg:col-span-2 relative">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Updates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <UpdateItem
              color="bg-blue-500"
              title="User confirmation"
              message="Hai Mike, are you available for todays session"
              time="2 months ago."
            />
            <UpdateItem
              color="bg-green-500"
              title="Continuous evaluation"
              message="Pick up Mary from school on the way to office"
              time="6 months ago."
            />
            <UpdateItem
              color="bg-red-500"
              title="Promotion"
              message="Can you please assign the task for the team"
              time="1 year ago."
            />
          </CardContent>
          <button className="absolute bottom-4 right-4 p-2 bg-green-500 rounded-full">
            <Settings className="h-5 w-5 text-white" />
          </button>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  icon,
  iconBg,
}: Readonly<{
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconBg: string;
}>) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl text-gray-800">{title}</CardTitle>
        <div className={cn("p-2 rounded", iconBg)}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <p className="text-gray-500 text-sm">{change} Since last month</p>
      </CardContent>
    </Card>
  );
}

function UpdateItem({
  color,
  title,
  message,
  time,
}: Readonly<{
  color: string;
  title: string;
  message: string;
  time: string;
}>) {
  return (
    <div className="flex gap-3">
      <div className={cn("h-3 w-3 rounded-full mt-1.5", color)} />
      <div className="space-y-1">
        <h4 className="font-medium text-gray-800">{title}</h4>
        <p className="text-gray-600">{message}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          {time}
        </div>
      </div>
    </div>
  );
}

export function Component() {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm lg:col-span-3">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
