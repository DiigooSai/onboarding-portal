"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, FileText, Laptop, Package, MapPin, CheckCircle2, Users, TrendingUp, ArrowRight, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: FileText,
      title: "Document Management",
      description: "Streamline document collection, e-signatures, and verification processes with automated workflows.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Laptop,
      title: "IT Setup Tracking",
      description: "Manage hardware allocation, software installations, and account setups for seamless onboarding.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      icon: Package,
      title: "Asset Allocation",
      description: "Track and assign physical assets, equipment, and office supplies to new employees efficiently.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: MapPin,
      title: "Workspace Management",
      description: "Coordinate desk assignments, floor plans, and workspace amenities for optimal organization.",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless communication between HR, IT, and facilities teams throughout onboarding.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Monitor onboarding metrics, track progress, and identify bottlenecks with real-time insights.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const stats = [
    { value: "500+", label: "Employees Onboarded" },
    { value: "95%", label: "Completion Rate" },
    { value: "50%", label: "Time Saved" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">ONBOARDING PORTAL</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="/support" className="text-sm font-medium hover:text-primary transition-colors">
                Support
              </a>
              <Button variant="outline" onClick={() => router.push("/auth/login")}>
                Sign In
              </Button>
              <Button onClick={() => router.push("/auth/login")}>
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                  About
                </a>
                <a href="/support" className="text-sm font-medium hover:text-primary transition-colors">
                  Support
                </a>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" onClick={() => router.push("/auth/login")} className="w-full">
                    Sign In
                  </Button>
                  <Button onClick={() => router.push("/auth/login")} className="w-full">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Trusted by 500+ Companies
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Streamline Your Employee Onboarding Process
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A complete solution for managing new hire onboarding with document tracking, IT setup, asset allocation, and workspace management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => router.push("/auth/login")} className="text-lg px-8 h-14">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => router.push("/employee/dashboard")} className="text-lg px-8 h-14">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Seamless Onboarding</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tools to manage every aspect of your employee onboarding process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 border-0 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Onboarding?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies using our platform to create exceptional onboarding experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => router.push("/auth/login")} className="text-lg px-8 h-14">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" onClick={() => router.push("/support")} className="text-lg px-8 h-14 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold">ONBOARDING</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Streamline your employee onboarding with our comprehensive platform.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="/support" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Onboarding Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}