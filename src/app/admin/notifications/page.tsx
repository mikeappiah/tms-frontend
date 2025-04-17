import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock3, X } from "lucide-react";

const NotificationsData = [
  {
    id: 1,
    title: "New Registration: Finibus Bonorum et Malorum",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex adipisci deserunt, ",
    date: "24 Nov 2018 at 9:30 AM",
    user: "Allen Deu",
    label: "Joined New User",
  },
  {
    id: 2,
    title: "New Registration: Finibus Bonorum et Malorum",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex adipisci deserunt, ",
    date: "24 Nov 2018 at 9:30 AM",
    user: "Allen Deu",
    label: "message",
  },
  {
    id: 3,
    title: "New Registration: Finibus Bonorum et Malorum",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex adipisci deserunt, ",
    date: "24 Nov 2018 at 9:30 AM",
    user: "Allen Deu",
    label: "connect",
  },
  {
    id: 4,
    title: "New Registration: Finibus Bonorum et Malorum",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex adipisci deserunt, ",
    date: "24 Nov 2018 at 9:30 AM",
    user: "Allen Deu",
    label: "Joined New User",
  },
];
function page() {
  return (
    <section className="px-10 w-full min-xl:grid min-xl:grid-cols-2 gap-x-8">
      {NotificationsData.map((notification) => (
        <div
          className="w-full flex max-lg:flex-col justify-between items-start gap-5 bg-white px-8 py-5 my-5 rounded-[10px] shadow-2xl relative"
          key={notification.id}
        >
          <div className="flex items-start gap-10">
            <Button className="rounded-[10px] w-[40px] h-[40px] shadow-lg cursor-pointer" variant={"outline"}>
              <X />{" "}
            </Button>
            <div>
              <Badge variant="default" className="py-2 px-4 text-white mb-2 rounded-[5px] font-semibold">
                {notification.label}
              </Badge>
              <div>
                <h4 className="font-semibold">{notification.title}</h4>
                <p>{notification.description}</p>
                <h5 className="mt-1 font-semibold text-red-500">{notification.user}</h5>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 min-lg:absolute top-5 right-10">
            <Clock3 size={20} className="text-gray-400" />
            <p className="text-gray-400 text-sm">{notification.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default page;
