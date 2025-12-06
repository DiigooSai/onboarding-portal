"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export default function MetricsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  color,
  bgColor,
}: MetricsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <Badge
            variant={trend === "up" ? "default" : "secondary"}
            className="flex items-center gap-1"
          >
            {trend === "up" ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {change}
          </Badge>
        </div>
        <div>
          <div className="text-3xl font-bold mb-1">{value}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </CardContent>
    </Card>
  );
}
