import { RiHourglass2Fill } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FcExpired } from "react-icons/fc";

export default function getStatusIcon(status: string) {
  let icon: React.ComponentType = () => null;

  switch (status) {
    case "open":
      icon = RiHourglass2Fill;
      break;
    case "completed":
      icon = IoMdCheckmarkCircleOutline;
      break;
    case "overdue":
      icon = FcExpired;
  }

  return icon;
}
