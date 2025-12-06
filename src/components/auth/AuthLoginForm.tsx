"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthLoginForm() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<"employee" | "admin">("employee");
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    setLoading(true);
    // Simulate OTP sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    
    // Navigate to OTP verification page
    const contact = activeTab === "email" ? email : phone;
    router.push(`/auth/verify-otp?contact=${encodeURIComponent(contact)}&type=${activeTab}&role=${role}`);
  };

  return (
    <Card className="w-full max-w-md shadow-2xl">
      <CardHeader className="space-y-3">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <Building2 className="w-10 h-10 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl text-center">Employee Onboarding Portal</CardTitle>
        <CardDescription className="text-center">
          Sign in to access your onboarding dashboard
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Role Selection */}
        <div className="flex gap-2">
          <Button
            type="button"
            variant={role === "employee" ? "default" : "outline"}
            className="flex-1"
            onClick={() => setRole("employee")}
          >
            Employee
          </Button>
          <Button
            type="button"
            variant={role === "admin" ? "default" : "outline"}
            className="flex-1"
            onClick={() => setRole("admin")}
          >
            Admin
          </Button>
        </div>

        {/* Email/Phone Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
              />
            </div>
            <Button
              onClick={handleSendOTP}
              disabled={!email || loading}
              className="w-full h-11"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </Button>
          </TabsContent>

          <TabsContent value="phone" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11"
              />
            </div>
            <Button
              onClick={handleSendOTP}
              disabled={!phone || loading}
              className="w-full h-11"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </Button>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </CardContent>
    </Card>
  );
}
