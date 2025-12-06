"use client";

import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AdminHeaderProps {
  adminName: string;
}

export default function AdminHeader({ adminName }: AdminHeaderProps) {
  const notificationCount = 5;

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search candidates, documents..."
            className="pl-10 h-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative"
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
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" alt={adminName} />
            <AvatarFallback>
              {adminName.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium">{adminName}</div>
            <div className="text-xs text-muted-foreground">Administrator</div>
          </div>
        </div>
      </div>
    </header>
  );
}
