"use client";

import useMediaQuery from "@/lib/hooks/use-media-query";
/***********************************/

/*  Tooltip Contents  */

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import Link from "next/link";
import { ReactNode } from "react";
import { Drawer } from "vaul";

export function TooltipProvider({ children }: { children: ReactNode }) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      {children}
    </TooltipPrimitive.Provider>
  );
}

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode | string;
  side?: "top" | "bottom" | "left" | "right";
  desktopOnly?: boolean;
  fullWidth?: boolean;
}

export function Tooltip({
  children,
  content,
  side = "top",
  desktopOnly,
  fullWidth,
}: TooltipProps) {
  const { isMobile } = useMediaQuery();

  if (isMobile && !desktopOnly) {
    return (
      <Drawer.Root>
        <Drawer.Trigger
          className={`${fullWidth ? "w-full" : "inline-flex"} md:hidden`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </Drawer.Trigger>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100 bg-opacity-10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white">
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>
            <div className="flex min-h-[150px] w-full items-center justify-center overflow-hidden bg-white align-middle shadow-xl">
              {typeof content === "string" ? (
                <span className="block text-center text-sm text-gray-700">
                  {content}
                </span>
              ) : (
                content
              )}
            </div>
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger className="md:inline-flex" asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={8}
            side={side}
            className="z-[99] animate-slide-up-fade items-center overflow-hidden rounded-md border border-gray-200 bg-white shadow-md md:block"
          >
            {typeof content === "string" ? (
              <span className="block max-w-xs px-4 py-2 text-center text-sm text-gray-700">
                {content}
              </span>
            ) : (
              content
            )}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export function TooltipContent({
  title,
  cta,
  href,
  target,
  onClick,
}: {
  title: string;
  cta?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col items-center space-y-3 p-4 text-center md:max-w-xs">
      <p className="text-sm text-gray-700">{title}</p>
      {cta &&
        (href ? (
          <Link
            href={href}
            {...(target ? { target } : {})}
            className="mt-4 w-full rounded-md border border-black bg-black px-3 py-1.5 text-center text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            {cta}
          </Link>
        ) : onClick ? (
          <button
            type="button"
            className="mt-4 w-full rounded-md border border-black bg-black px-3 py-1.5 text-center text-sm text-white transition-all hover:bg-white hover:text-black"
            onClick={onClick}
          >
            {cta}
          </button>
        ) : null)}
    </div>
  );
}
