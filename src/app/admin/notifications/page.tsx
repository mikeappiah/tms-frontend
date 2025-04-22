"use client";
import { Bell, MessageSquare, MessageCircle, Users, X } from "lucide-react";

// Define notification types
type NotificationType = "joined" | "message" | "comment" | "connect";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  from: string;
  to?: string;
  timestamp: string;
}

const NotificationItem: React.FC<{ notification: Notification }> = ({
  notification,
}) => {
  const renderIcon = () => {
    switch (notification.type) {
      case "joined":
        return (
          <div className="bg-green-500 text-white text-xs py-1 px-2 rounded">
            Joined New User
          </div>
        );
      case "message":
        return (
          <div className="bg-orange-400 text-white text-xs py-1 px-2 rounded">
            Message
          </div>
        );
      case "comment":
        return (
          <div className="bg-purple-600 text-white text-xs py-1 px-2 rounded">
            Comment
          </div>
        );
      case "connect":
        return (
          <div className="bg-blue-500 text-white text-xs py-1 px-2 rounded">
            Connect
          </div>
        );
    }
  };

  const renderTitle = () => {
    switch (notification.type) {
      case "joined":
        return <div className="font-medium">{notification.title}</div>;
      case "message":
        return <div className="font-medium">{notification.title}</div>;
      case "comment":
        return <div className="font-medium">{notification.title}</div>;
      case "connect":
        return (
          <div className="font-medium">
            {notification.from} <span className="text-blue-500">Connect</span>{" "}
            {notification.to}
          </div>
        );
    }
  };

  return (
    <div className="py-6 border-b border-gray-200 last:border-0">
      <div className="flex items-start">
        <div className="p-1 bg-gray-100 rounded mr-3 hover:bg-gray-300 hover:text-gray-50 duration-300">
          <X className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            {renderIcon()}
            <div className="text-gray-400 text-sm">
              {notification.timestamp}
            </div>
          </div>
          {renderTitle()}
          <p className="text-gray-500 text-sm mt-1">
            {notification.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const NotificationsDashboard: React.FC = () => {
  // Sample notification data that matches your image
  const notifications: Notification[] = [
    {
      id: "1",
      type: "joined",
      title: "New Registration: Finibus Bonorum et Malorum",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      from: "Allen Deu",
      timestamp: "24 Nov 2018 at 9:30 AM",
    },
    {
      id: "2",
      type: "message",
      title: "Darren Smith sent new message",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      from: "Darren",
      timestamp: "24 Nov 2018 at 9:30 AM",
    },
    {
      id: "3",
      type: "comment",
      title: "Arin Gansihram Commented on post",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      from: "Arin Gansihram",
      timestamp: "24 Nov 2018 at 9:30 AM",
    },
    {
      id: "4",
      type: "connect",
      title: "Connect request",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      from: "Juliet Den",
      to: "Allen Depk",
      timestamp: "24 Nov 2018 at 9:30 AM",
    },
    {
      id: "5",
      type: "connect",
      title: "Connect request",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      from: "Juliet Den",
      to: "Allen Depk",
      timestamp: "24 Nov 2018 at 9:30 AM",
    },
    {
      id: "6",
      type: "message",
      title: "Darren Smith sent new message",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      from: "Juliet Den",
      timestamp: "24 Nov 2018 at 9:30 AM",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">NOTIFICATIONS</h1>

        <div className="bg-white shadow rounded p-6">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsDashboard;
