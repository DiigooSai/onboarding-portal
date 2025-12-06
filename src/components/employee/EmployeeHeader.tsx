"use client";

import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface EmployeeHeaderProps {
  employeeName: string;
  onNotificationClick: () => void;
}

export default function EmployeeHeader({ employeeName, onNotificationClick }: EmployeeHeaderProps) {
  const notificationCount = 3;

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-sm text-muted-foreground">
          Last login: <span className="text-foreground font-medium">Today at 9:30 AM</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={onNotificationClick}
        >
          <Bell className="w-5 h-5" />
          {notificationCount > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
              {notificationCount}
            </Badge>
          )}
        </Button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <Avatar className="w-9 h-9">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt={employeeName} />
            <AvatarFallback>
              {employeeName.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium">{employeeName}</div>
            <div className="text-xs text-muted-foreground">Employee</div>
          </div>
        </div>
      </div>
    </header>
  );
}
