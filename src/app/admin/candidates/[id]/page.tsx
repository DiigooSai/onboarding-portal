"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Mail, Phone, Calendar, MapPin, FileText, Laptop, Package, CheckCircle2, Clock, Upload } from "lucide-react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { Progress } from "@/components/ui/progress";

export default function CandidateDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const candidate = {
    id: params.id,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    position: "Software Engineer",
    department: "Engineering",
    joinDate: "Jan 15, 2025",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    status: "In Progress",
    progress: 60,
  };

  const documents = [
    { name: "Offer Letter", status: "signed", uploadDate: "Dec 1, 2024", type: "PDF" },
    { name: "Tax Form W-4", status: "pending", uploadDate: "Pending", type: "PDF" },
    { name: "I-9 Form", status: "verified", uploadDate: "Dec 3, 2024", type: "PDF" },
    { name: "Background Check", status: "completed", uploadDate: "Dec 5, 2024", type: "PDF" },
  ];

  const itAssets = [
    { item: "MacBook Pro 16\"", serialNumber: "MBP-2024-001", status: "assigned", assignedDate: "Dec 10, 2024" },
    { item: "iPhone 14 Pro", serialNumber: "IPH-2024-045", status: "pending", assignedDate: "-" },
    { item: "Dell Monitor 27\"", serialNumber: "MON-2024-123", status: "assigned", assignedDate: "Dec 10, 2024" },
  ];

  const workspace = {
    floor: "3rd Floor",
    desk: "3B-42",
    building: "Main Office",
    amenities: ["Standing Desk", "Dual Monitor Setup", "Cable Management"],
    status: "pending",
  };

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader adminName="Admin User" />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          {/* Candidate Header */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={candidate.avatar} alt={candidate.name} />
                  <AvatarFallback className="text-2xl">
                    {candidate.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{candidate.name}</h1>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="text-sm">
                          {candidate.position}
                        </Badge>
                        <Badge variant="outline" className="text-sm">
                          {candidate.department}
                        </Badge>
                      </div>
                    </div>
                    <Badge className="text-base px-4 py-1">
                      {candidate.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{candidate.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{candidate.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Join Date: {candidate.joinDate}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Onboarding Progress</span>
                      <span className="text-muted-foreground">{candidate.progress}%</span>
                    </div>
                    <Progress value={candidate.progress} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="it-setup">IT Setup</TabsTrigger>
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="workspace">Workspace</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Onboarding Checklist</CardTitle>
                    <CardDescription>Track completion status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { label: "Offer Accepted", completed: true },
                      { label: "Documents Signed", completed: true },
                      { label: "Background Check", completed: true },
                      { label: "IT Equipment Assigned", completed: false },
                      { label: "Workspace Allocated", completed: false },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="font-medium">{item.label}</span>
                        {item.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates and actions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { action: "Background check completed", date: "Dec 5, 2024", type: "success" },
                      { action: "Documents uploaded", date: "Dec 3, 2024", type: "info" },
                      { action: "Offer letter signed", date: "Dec 1, 2024", type: "success" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === "success" ? "bg-green-600" : "bg-blue-600"
                        }`} />
                        <div className="flex-1">
                          <div className="font-medium">{activity.action}</div>
                          <div className="text-sm text-muted-foreground">{activity.date}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Documents</CardTitle>
                      <CardDescription>Manage candidate documentation</CardDescription>
                    </div>
                    <Button>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Document
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{doc.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {doc.uploadDate} • {doc.type}
                            </div>
                          </div>
                        </div>
                        <Badge variant={
                          doc.status === "signed" || doc.status === "verified" || doc.status === "completed"
                            ? "default"
                            : "outline"
                        }>
                          {doc.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="it-setup">
              <Card>
                <CardHeader>
                  <CardTitle>IT Equipment</CardTitle>
                  <CardDescription>Assigned devices and accessories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {itAssets.map((asset, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                            <Laptop className="w-6 h-6 text-indigo-600" />
                          </div>
                          <div>
                            <div className="font-semibold">{asset.item}</div>
                            <div className="text-sm text-muted-foreground">
                              S/N: {asset.serialNumber}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={asset.status === "assigned" ? "default" : "outline"}>
                            {asset.status}
                          </Badge>
                          <div className="text-xs text-muted-foreground mt-1">
                            {asset.assignedDate}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assets">
              <Card>
                <CardHeader>
                  <CardTitle>Physical Assets</CardTitle>
                  <CardDescription>Office equipment and accessories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>No physical assets assigned yet</p>
                    <Button className="mt-4">Assign Assets</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="workspace">
              <Card>
                <CardHeader>
                  <CardTitle>Workspace Assignment</CardTitle>
                  <CardDescription>Office location and amenities</CardDescription>
                </CardHeader>
                <CardContent>
                  {workspace.status === "pending" ? (
                    <div className="p-6 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5">
                      <MapPin className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Workspace Pending</h3>
                      <p className="text-muted-foreground mb-4">
                        This candidate's workspace will be assigned once IT setup is complete.
                      </p>
                      <Button>Assign Workspace Now</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="text-sm text-muted-foreground mb-1">Building</div>
                          <div className="font-semibold">{workspace.building}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="text-sm text-muted-foreground mb-1">Floor</div>
                          <div className="font-semibold">{workspace.floor}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50 col-span-2">
                          <div className="text-sm text-muted-foreground mb-1">Desk Number</div>
                          <div className="font-semibold">{workspace.desk}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
