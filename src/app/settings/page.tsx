"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Bell, Shield, Palette, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function SettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    candidateUpdates: true,
    systemAlerts: true,
    darkMode: false,
  });

  return (
    <div className="flex h-screen bg-background">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader adminName="Admin User" />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">
                Manage your account settings and preferences
              </p>
            </div>

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account profile information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        AU
                      </div>
                      <div>
                        <Button variant="outline">Change Avatar</Button>
                        <p className="text-sm text-muted-foreground mt-2">
                          JPG, PNG or GIF. Max size 2MB
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Admin" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="User" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="admin@company.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" defaultValue="Acme Corporation" />
                    </div>

                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Notifications</div>
                        <div className="text-sm text-muted-foreground">
                          Receive notifications via email
                        </div>
                      </div>
                      <Switch
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, emailNotifications: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Push Notifications</div>
                        <div className="text-sm text-muted-foreground">
                          Receive push notifications in browser
                        </div>
                      </div>
                      <Switch
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, pushNotifications: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Weekly Reports</div>
                        <div className="text-sm text-muted-foreground">
                          Get weekly summary of onboarding activities
                        </div>
                      </div>
                      <Switch
                        checked={settings.weeklyReports}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, weeklyReports: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Candidate Updates</div>
                        <div className="text-sm text-muted-foreground">
                          Notify when candidates complete tasks
                        </div>
                      </div>
                      <Switch
                        checked={settings.candidateUpdates}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, candidateUpdates: checked })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">System Alerts</div>
                        <div className="text-sm text-muted-foreground">
                          Important system notifications and updates
                        </div>
                      </div>
                      <Switch
                        checked={settings.systemAlerts}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, systemAlerts: checked })
                        }
                      />
                    </div>

                    <Button>Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Manage your account security</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Change Password</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="currentPassword">Current Password</Label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="newPassword">New Password</Label>
                          <Input id="newPassword" type="password" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="confirmPassword">Confirm New Password</Label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                        <Button>Update Password</Button>
                      </div>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-semibold mb-4">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Add an extra layer of security to your account
                      </p>
                      <Button variant="outline">Enable 2FA</Button>
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-semibold mb-4">Active Sessions</h3>
                      <div className="space-y-3">
                        <div className="p-4 rounded-lg border">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">Current Session</div>
                              <div className="text-sm text-muted-foreground">
                                Chrome on Windows • San Francisco, CA
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">Revoke</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance Settings</CardTitle>
                    <CardDescription>Customize how the portal looks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Dark Mode</div>
                        <div className="text-sm text-muted-foreground">
                          Use dark theme across the application
                        </div>
                      </div>
                      <Switch
                        checked={settings.darkMode}
                        onCheckedChange={(checked) =>
                          setSettings({ ...settings, darkMode: checked })
                        }
                      />
                    </div>

                    <div className="pt-6 border-t">
                      <h3 className="font-semibold mb-4">Theme Color</h3>
                      <div className="grid grid-cols-4 gap-3">
                        {["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4"].map((color) => (
                          <button
                            key={color}
                            className="w-full aspect-square rounded-lg border-2 border-border hover:border-primary transition-colors"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>

                    <Button>Save Appearance</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
