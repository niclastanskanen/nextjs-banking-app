"use client"

import { Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getColorByIndex } from "@/lib/utils"

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  
  const chartData = accounts.map((account, index) => ({
    accountName: account.name,
    balance: account.currentBalance,
    fill: getColorByIndex(index),
  }))

  const chartConfig = {
    banks: {
      label: "Banks",
    },
  }

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px] min-h-[200px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              labelKey="accountName"
              nameKey="balance"
              indicator="dot"
            />
          }
        />
        <Pie
          data={chartData}
          dataKey="balance"
          nameKey="accountName"
          innerRadius={60}
          outerRadius={85}
          paddingAngle={2}
        />
      </PieChart>
    </ChartContainer>
  )
}

export default DoughnutChart
