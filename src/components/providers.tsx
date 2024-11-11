import type { PropsWithChildren } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { queryClient } from "../clients/query";

export const Providers = ({ children }: Readonly<PropsWithChildren>) => {
  const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={(route) => {
        // eslint-disable-next-line @typescript-eslint/use-unknown-in-catch-callback-variable,no-console
        navigate({ to: route }).catch(console.error);
      }}
      >
        {children}
      </NextUIProvider>
      <ReactQueryDevtools />
      <TanStackRouterDevtools position="bottom-left" />
    </QueryClientProvider>
  );
};
