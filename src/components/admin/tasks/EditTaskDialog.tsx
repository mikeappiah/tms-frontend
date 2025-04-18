import { Button } from '@/components/ui/button';

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';

const buttonClasses =
	'bg-[#5153FF] hover:bg-[#4649db] rounded-[1px] cursor-pointer';

export default function EditTaskDialog({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent className='py-10'>
				<SheetHeader>
					<SheetTitle className='text-2xl font-medium'>
						Begin Frontend Design
					</SheetTitle>
				</SheetHeader>

				<SheetFooter>
					<SheetClose asChild>
						<Button type='submit' className={buttonClasses}>
							Save
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
