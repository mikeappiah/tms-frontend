import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function MetricCard({
	title,
	value,
	icon,
	bgColor,
	iconBg
}: Readonly<{
	title: string;
	value: string;
	bgColor: string;
	icon: React.ReactNode;
	iconBg: string;
}>) {
	return (
		<Card className={`${bgColor} text-white rounded-[10px]`}>
			<CardHeader className='flex flex-row items-center justify-between pb-2'>
				<CardTitle className='text-xl'>{title}</CardTitle>
				<div className={cn('p-2 rounded-full', iconBg)}>{icon}</div>
			</CardHeader>
			<CardContent>
				<div className='text-xl font-bold'>{value}</div>
			</CardContent>
		</Card>
	);
}
