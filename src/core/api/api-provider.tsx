import { useReactQueryDevTools } from "@dev-plugins/react-query";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const APIProvider = ({ children }: Props) => {
  useReactQueryDevTools(queryClient);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default APIProvider;
