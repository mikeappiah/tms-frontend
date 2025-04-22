import {
	Card,
	CardContent,
	CardHeader,
	CardDescription,
	CardTitle
} from '@/components/ui/card';

import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartConfig = {
	open: {
		label: 'Open',
		color: '#5153FF'
	},
	completed: {
		label: 'Completed',
		color: '#2FBA56'
	},
	overdue: {
		label: 'Overdue',
		color: '#d32f2f'
	}
} satisfies ChartConfig;

import chartData from '@/data/chartData';

export default function TaskBarChart() {
	return (
		<Card className='lg:col-span-3 bg-white rounded-[8px] shadow-none border-0'>
			<CardHeader>
				<CardTitle className='text-[#232526] text-xl'>
					Tasks Overview Chart
				</CardTitle>
				<CardDescription>Jan - Dec 2025</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator='dashed' />}
						/>
						<Bar dataKey='open' fill='var(--color-open)' radius={4} />
						<Bar dataKey='completed' fill='var(--color-completed)' radius={4} />
						<Bar dataKey='overdue' fill='var(--color-overdue)' radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
