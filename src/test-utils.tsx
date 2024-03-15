import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  FavouriteContextType,
  FavouriteProvider,
} from "./core/providers/favourites/favouritesProvider";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const AllTheProviders = ({
  children,
  renderOptions,
}: {
  children: React.ReactNode;
  renderOptions?: CustomRenderOptions;
}) => {
  const favouritesProviderProps = renderOptions?.favouritesProviderProps;

  return (
    <QueryClientProvider client={queryClient}>
      <FavouriteProvider value={favouritesProviderProps}>
        <BrowserRouter>{children}</BrowserRouter>
      </FavouriteProvider>
    </QueryClientProvider>
  );
};

interface CustomRenderOptions extends RenderOptions {
  favouritesProviderProps?: FavouriteContextType;
}

const customRender = (
  ui: ReactElement,
  renderOptions: CustomRenderOptions = {},
) => {
  return render(
    <AllTheProviders renderOptions={renderOptions}>{ui}</AllTheProviders>,
    renderOptions,
  );
};

export * from "@testing-library/react";
export { customRender as render };
