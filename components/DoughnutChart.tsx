"use client"

import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Dummy data
const chartData = [
  { browser: "Bank 1", visitors: 1250, fill: "#0747b6" },
  { browser: "Bank 2", visitors: 2500, fill: "#2265d8" },
  { browser: "Bank 3", visitors: 3750, fill: "#2f91fa" },
]

const chartConfig = {
  visitors: {
    label: "Banks",
  },
}

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px] min-h-[200px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius={60}
          paddingAngle={2}
        />
      </PieChart>
    </ChartContainer>
  )
}

export default DoughnutChart
