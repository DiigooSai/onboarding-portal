"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { FileText, Laptop, Package, MapPin } from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  email: string;
  position: string;
  avatar: string;
  joinDate: string;
  progress: {
    offer: boolean;
    documents: boolean;
    it: boolean;
    assets: boolean;
    workspace: boolean;
  };
}

export default function KanbanBoard() {
  const router = useRouter();
  
  const [columns] = useState({
    "offer": {
      title: "Offer Stage",
      color: "bg-purple-100 text-purple-700",
      candidates: [
        {
          id: "1",
          name: "Sarah Johnson",
          email: "sarah.j@email.com",
          position: "Software Engineer",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
          joinDate: "Jan 15, 2025",
          progress: { offer: true, documents: false, it: false, assets: false, workspace: false },
        },
        {
          id: "2",
          name: "Michael Chen",
          email: "m.chen@email.com",
          position: "Product Designer",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
          joinDate: "Jan 20, 2025",
          progress: { offer: true, documents: false, it: false, assets: false, workspace: false },
        },
      ],
    },
    "documents": {
      title: "Documents",
      color: "bg-blue-100 text-blue-700",
      candidates: [
        {
          id: "3",
          name: "Emma Wilson",
          email: "emma.w@email.com",
          position: "Marketing Manager",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
          joinDate: "Jan 10, 2025",
          progress: { offer: true, documents: true, it: false, assets: false, workspace: false },
        },
      ],
    },
    "it-setup": {
      title: "IT Setup",
      color: "bg-indigo-100 text-indigo-700",
      candidates: [
        {
          id: "4",
          name: "James Brown",
          email: "james.b@email.com",
          position: "Data Analyst",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
          joinDate: "Jan 5, 2025",
          progress: { offer: true, documents: true, it: true, assets: false, workspace: false },
        },
        {
          id: "5",
          name: "Lisa Anderson",
          email: "lisa.a@email.com",
          position: "HR Specialist",
          avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100",
          joinDate: "Jan 8, 2025",
          progress: { offer: true, documents: true, it: true, assets: false, workspace: false },
        },
      ],
    },
    "completed": {
      title: "Completed",
      color: "bg-green-100 text-green-700",
      candidates: [
        {
          id: "6",
          name: "David Martinez",
          email: "david.m@email.com",
          position: "Sales Executive",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
          joinDate: "Dec 20, 2024",
          progress: { offer: true, documents: true, it: true, assets: true, workspace: true },
        },
      ],
    },
  });

  const handleCandidateClick = (candidateId: string) => {
    router.push(`/admin/candidates/${candidateId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Object.entries(columns).map(([key, column]) => (
        <div key={key} className="flex flex-col">
          <div className="mb-4">
            <Badge className={`${column.color} px-3 py-1`}>
              {column.title} ({column.candidates.length})
            </Badge>
          </div>
          <div className="space-y-3 flex-1">
            {column.candidates.map((candidate) => (
              <Card
                key={candidate.id}
                className="cursor-pointer hover:shadow-lg transition-all border-l-4 border-l-primary"
                onClick={() => handleCandidateClick(candidate.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={candidate.avatar} alt={candidate.name} />
                      <AvatarFallback>
                        {candidate.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">{candidate.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{candidate.email}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-muted-foreground">{candidate.position}</div>
                    <div className="text-xs text-muted-foreground">Join: {candidate.joinDate}</div>
                    <div className="flex gap-1 mt-2">
                      <FileText className={`w-4 h-4 ${candidate.progress.documents ? "text-green-600" : "text-gray-300"}`} />
                      <Laptop className={`w-4 h-4 ${candidate.progress.it ? "text-green-600" : "text-gray-300"}`} />
                      <Package className={`w-4 h-4 ${candidate.progress.assets ? "text-green-600" : "text-gray-300"}`} />
                      <MapPin className={`w-4 h-4 ${candidate.progress.workspace ? "text-green-600" : "text-gray-300"}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
