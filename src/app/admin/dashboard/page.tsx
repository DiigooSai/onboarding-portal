"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, FileCheck, Laptop, Package, TrendingUp, TrendingDown } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import KanbanBoard from "@/components/admin/KanbanBoard";
import MetricsCard from "@/components/admin/MetricsCard";

export default function AdminDashboard() {
  const metrics = [
    {
      title: "Total Candidates",
      value: "48",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Documents Pending",
      value: "12",
      change: "-8%",
      trend: "down",
      icon: FileCheck,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "IT Setups Active",
      value: "8",
      change: "+3",
      trend: "up",
      icon: Laptop,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      title: "Assets Allocated",
      value: "35",
      change: "+15%",
      trend: "up",
      icon: Package,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  const alerts = [
    { id: 1, type: "urgent", message: "3 candidates have pending documents expiring today", count: 3 },
    { id: 2, type: "warning", message: "5 IT setup requests awaiting approval", count: 5 },
    { id: 3, type: "info", message: "New candidate added: John Doe", count: 1 },
  ];

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader adminName="Admin User" />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage employee onboarding and track progress</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {metrics.map((metric, index) => (
              <MetricsCard key={index} {...metric} />
            ))}
          </div>

          {/* Alerts Section */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
              <CardDescription>Important notifications requiring your attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border-l-4 flex items-start justify-between ${
                    alert.type === "urgent"
                      ? "bg-red-50 border-l-red-500"
                      : alert.type === "warning"
                      ? "bg-yellow-50 border-l-yellow-500"
                      : "bg-blue-50 border-l-blue-500"
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant={alert.type === "urgent" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {alert.type.toUpperCase()}
                      </Badge>
                      <span className="text-sm font-medium">{alert.message}</span>
                    </div>
                  </div>
                  {alert.count > 0 && (
                    <Badge variant="outline" className="ml-4">
                      {alert.count}
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Kanban Board */}
          <Card>
            <CardHeader>
              <CardTitle>Candidate Pipeline</CardTitle>
              <CardDescription>Drag and drop to update candidate status</CardDescription>
            </CardHeader>
            <CardContent>
              <KanbanBoard />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
