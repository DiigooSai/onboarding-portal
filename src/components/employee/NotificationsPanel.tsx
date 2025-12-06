"use client";

import { X, CheckCircle2, Clock, AlertCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NotificationsPanelProps {
  onClose: () => void;
}

export default function NotificationsPanel({ onClose }: NotificationsPanelProps) {
  const notifications = [
    {
      id: 1,
      type: "success",
      icon: CheckCircle2,
      title: "Document Approved",
      message: "Your offer letter has been signed and approved",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "warning",
      icon: Clock,
      title: "Action Required",
      message: "Please complete your tax forms by Dec 15",
      time: "5 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "info",
      icon: FileText,
      title: "IT Setup Update",
      message: "Your laptop configuration is 60% complete",
      time: "1 day ago",
      unread: true,
    },
    {
      id: 4,
      type: "success",
      icon: CheckCircle2,
      title: "Background Check Complete",
      message: "Your background verification was successful",
      time: "2 days ago",
      unread: false,
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "info":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="w-96 border-l border-border bg-card h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-lg">Notifications</h2>
          <p className="text-sm text-muted-foreground">
            {notifications.filter(n => n.unread).length} unread
          </p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Notifications List */}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors hover:bg-accent/50 ${
                  notification.unread ? "bg-primary/5 border-primary/20" : "bg-muted/30"
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-lg ${getIconColor(notification.type)} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-medium text-sm">{notification.title}</h3>
                      {notification.unread && (
                        <Badge variant="default" className="text-xs px-1.5 py-0">
                          New
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full">
          Mark All as Read
        </Button>
      </div>
    </div>
  );
}
