"use client";

import { PageHeader } from "@/components/header";
import NotificationItem from "@/components/notifications/NotificationItem";
import notificationsData from "@/data/notificationsData";

const NotificationsDashboard: React.FC = () => {
  return (
    <div>
      <div>
        <PageHeader
          title="Notifications"
          description="View your recent notifications"
        />
        <div className="bg-white rounded-md p-6 mt-10">
          {notificationsData.map((notification) => (
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
