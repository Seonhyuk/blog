'use client';

import type { HTMLAttributes } from 'react';
import { useState } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ReactQueryProviderProps = HTMLAttributes<HTMLDivElement>;

const ReactQueryProvider = ({ children }: ReactQueryProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: 3, retryDelay: 1000 },
          mutations: { retry: 3, retryDelay: 1000 },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
