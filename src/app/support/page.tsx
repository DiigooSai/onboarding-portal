"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, Phone, Clock, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SupportPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    priority: "",
    subject: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        category: "",
        priority: "",
        subject: "",
        description: "",
      });
    }, 3000);
  };

  const recentTickets = [
    { id: "TKT-001", subject: "Unable to upload documents", status: "open", date: "2 hours ago" },
    { id: "TKT-002", subject: "IT equipment not received", status: "in_progress", date: "1 day ago" },
    { id: "TKT-003", subject: "Workspace assignment question", status: "resolved", date: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold text-lg">ONBOARDING PORTAL</div>
            </div>
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help! Submit a ticket or browse our resources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Submit a Support Ticket</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Ticket Submitted!</h3>
                      <p className="text-muted-foreground">
                        We've received your request and will respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select
                            value={formData.category}
                            onValueChange={(value) => setFormData({ ...formData, category: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="documents">Documents</SelectItem>
                              <SelectItem value="it-setup">IT Setup</SelectItem>
                              <SelectItem value="assets">Assets</SelectItem>
                              <SelectItem value="workspace">Workspace</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="priority">Priority</Label>
                          <Select
                            value={formData.priority}
                            onValueChange={(value) => setFormData({ ...formData, priority: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Submit Ticket
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Recent Tickets */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Tickets</CardTitle>
                  <CardDescription>Track your previous support requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTickets.map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent/50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-sm font-mono text-muted-foreground">{ticket.id}</span>
                            <Badge variant={
                              ticket.status === "resolved" ? "default" :
                              ticket.status === "in_progress" ? "secondary" : "outline"
                            }>
                              {ticket.status.replace("_", " ")}
                            </Badge>
                          </div>
                          <div className="font-medium">{ticket.subject}</div>
                          <div className="text-sm text-muted-foreground">{ticket.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">support@onboarding.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">1-800-ONBOARD</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Hours</div>
                      <div className="font-medium">24/7 Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    📚 Documentation
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    ❓ FAQs
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    🎥 Video Tutorials
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    💬 Community Forum
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
