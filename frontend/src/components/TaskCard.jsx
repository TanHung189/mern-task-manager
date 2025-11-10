import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const TaskCard = ({ task, index }) => {
  let isEditing = false;

  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card  border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group",
        task.status === "complete" && "opacity-75"
      )}
      style={{ animationDelay: `${index * 50}`ms }}
    >
      <div className="flex items-center gap-4"></div>
    </Card>
  );
};

export default TaskCard;
