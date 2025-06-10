"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Copy, LucideIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Tick from "./tick";

const copyButtonVariants = cva(
  "relative group rounded-full p-1.5 transition-all duration-75",
  {
    variants: {
      variant: {
        default:
          "bg-gray-100 hover:scale-105 hover:bg-blue-100 active:scale-95 text-gray-700 hover:text-blue-800",
        neutral: "bg-transparent hover:bg-gray-100 active:bg-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export function CopyButton({
  variant = "default",
  value,
  className,
  icon,
  successMessage,
  onClick,
}: {
  value: string;
  className?: string;
  icon?: LucideIcon;
  successMessage?: string;
  onClick?: () => void;
} & VariantProps<typeof copyButtonVariants>) {
  const [copied, setCopied] = useState(false);
  const Comp = icon || Copy;
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setCopied(true);

        if (onClick) {
          onClick();
        } else {
          navigator.clipboard.writeText(value).then(() => {
            toast.success(successMessage || "Copied to clipboard!");
          });
        }
        setTimeout(() => setCopied(false), 3000);
      }}
      className={cn(copyButtonVariants({ variant }), className)}
      type="button"
    >
      {copied ? (
        <Tick className="h-3.5 w-3.5" />
      ) : (
        <Comp className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
