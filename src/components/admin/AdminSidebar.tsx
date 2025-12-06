"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, LayoutDashboard, Users, FileText, Laptop, Package, MapPin, HelpCircle, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminSidebar() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/admin/dashboard" },
    { id: "candidates", label: "Candidates", icon: Users, path: "/admin/candidates" },
    { id: "documents", label: "Documents", icon: FileText, path: "/admin/documents" },
    { id: "it-setup", label: "IT Setup", icon: Laptop, path: "/admin/it-setup" },
    { id: "assets", label: "Assets", icon: Package, path: "/admin/assets" },
    { id: "workspace", label: "Workspace", icon: MapPin, path: "/admin/workspace" },
  ];

  const bottomItems = [
    { id: "support", label: "Support", icon: HelpCircle, path: "/support" },
    { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
  ];

  const handleNavigation = (id: string, path: string) => {
    setActiveItem(id);
    router.push(path);
  };

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-sm">ONBOARDING</div>
            <div className="text-xs text-muted-foreground">Admin Portal</div>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id, item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-sidebar-border space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id, item.path)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
        <Button
          variant="ghost"
          onClick={() => router.push("/auth/login")}
          className="w-full justify-start gap-3 px-4 py-3 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Logout</span>
        </Button>
      </div>
    </div>
  );
}
