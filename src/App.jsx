import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootRouter from "@/routes/layout/RootRouter";

const App = () => {
  // --------- Tenstack query we here use ----------
  const queryClient = new QueryClient();
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RootRouter />
      </QueryClientProvider>
    </>
  );
};

export default App;
