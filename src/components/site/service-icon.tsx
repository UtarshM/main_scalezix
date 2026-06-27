import type { ReactNode } from "react";
import {
  Bot,
  Code2,
  Megaphone,
  MessageSquareText,
  Network,
  Workflow,
} from "lucide-react";

export type ServiceIconKey =
  | "workflow"
  | "code"
  | "megaphone"
  | "bot"
  | "network"
  | "message";

const iconMap: Record<ServiceIconKey, ReactNode> = {
  workflow: <Workflow className="h-5 w-5" />,
  code: <Code2 className="h-5 w-5" />,
  megaphone: <Megaphone className="h-5 w-5" />,
  bot: <Bot className="h-5 w-5" />,
  network: <Network className="h-5 w-5" />,
  message: <MessageSquareText className="h-5 w-5" />,
};

export function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  return <>{iconMap[icon]}</>;
}
