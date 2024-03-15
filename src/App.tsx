import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Routes from "./components/Routes";
import { routes } from "./routes";
import { FavouriteProvider } from "./core/providers/favourites/favouritesProvider";
import { ErrorBoundary } from "./components/shared/ErrorBoundery";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary fallback="Something went wrong">
      <QueryClientProvider client={queryClient}>
        <FavouriteProvider>
          <Routes routes={routes} />
        </FavouriteProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
