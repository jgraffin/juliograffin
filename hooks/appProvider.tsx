import { HeaderProvider } from "./useHeader";

const AppProvider = ({ children }: any) => {
  return <HeaderProvider>{children}</HeaderProvider>;
};

export default AppProvider;
