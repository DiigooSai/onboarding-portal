"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bell, FileText, Laptop, Package, MapPin, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import EmployeeSidebar from "@/components/employee/EmployeeSidebar";
import EmployeeHeader from "@/components/employee/EmployeeHeader";
import NotificationsPanel from "@/components/employee/NotificationsPanel";

export default function EmployeeDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);

  const onboardingProgress = 65;
  const employeeName = "Jenny Smith";

  const tasks = [
    { id: 1, title: "Review Offer Letter", status: "completed", icon: FileText, color: "text-green-600" },
    { id: 2, title: "Upload Documents", status: "completed", icon: FileText, color: "text-green-600" },
    { id: 3, title: "IT Setup Request", status: "in_progress", icon: Laptop, color: "text-blue-600" },
    { id: 4, title: "Asset Allocation", status: "pending", icon: Package, color: "text-gray-400" },
    { id: 5, title: "Workspace Assignment", status: "pending", icon: MapPin, color: "text-gray-400" },
  ];

  const documents = [
    { name: "Offer Letter", status: "signed", date: "Dec 1, 2024" },
    { name: "Tax Forms", status: "pending", date: "Due: Dec 15, 2024" },
    { name: "Background Check", status: "verified", date: "Dec 3, 2024" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <EmployeeSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <EmployeeHeader 
          employeeName={employeeName}
          onNotificationClick={() => setShowNotifications(!showNotifications)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Hello {employeeName}!</h1>
            <p className="text-muted-foreground mt-1">Welcome back to your Onboarding Portal</p>
          </div>

          {/* Onboarding Progress */}
          <Card className="mb-6 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Onboarding Progress</CardTitle>
                  <CardDescription>Complete all tasks to finish your onboarding</CardDescription>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {onboardingProgress}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={onboardingProgress} className="h-3 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">2 Completed</div>
                    <div className="text-sm text-muted-foreground">Tasks finished</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold">1 In Progress</div>
                    <div className="text-sm text-muted-foreground">Currently working</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold">2 Pending</div>
                    <div className="text-sm text-muted-foreground">Not started yet</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Task Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {tasks.map((task) => (
              <Card key={task.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${
                        task.status === "completed" ? "bg-green-100" : 
                        task.status === "in_progress" ? "bg-blue-100" : "bg-gray-100"
                      } flex items-center justify-center`}>
                        <task.icon className={`w-5 h-5 ${task.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{task.title}</CardTitle>
                      </div>
                    </div>
                    <Badge variant={
                      task.status === "completed" ? "default" :
                      task.status === "in_progress" ? "secondary" : "outline"
                    }>
                      {task.status === "completed" ? "Done" :
                       task.status === "in_progress" ? "In Progress" : "Pending"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full" 
                    variant={task.status === "completed" ? "outline" : "default"}
                    disabled={task.status === "pending"}
                  >
                    {task.status === "completed" ? "View Details" : 
                     task.status === "in_progress" ? "Continue" : "Starts Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Documents & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Documents</CardTitle>
                <CardDescription>Track your document status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-medium">{doc.name}</div>
                        <div className="text-sm text-muted-foreground">{doc.date}</div>
                      </div>
                    </div>
                    <Badge variant={
                      doc.status === "signed" || doc.status === "verified" ? "default" : "outline"
                    }>
                      {doc.status}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  View All Documents
                </Button>
              </CardContent>
            </Card>

            {/* IT & Assets */}
            <Card>
              <CardHeader>
                <CardTitle>IT & Assets</CardTitle>
                <CardDescription>Your equipment and workspace info</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5">
                  <div className="flex items-center gap-3 mb-3">
                    <Laptop className="w-6 h-6 text-primary" />
                    <div className="font-semibold">IT Setup in Progress</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Your laptop and accessories are being prepared
                  </p>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div className="font-medium">Workspace Assignment</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pending IT setup completion
                  </p>
                </div>

                <Button className="w-full mt-4">
                  Request Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <NotificationsPanel onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
}
