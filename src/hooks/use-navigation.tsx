import { useNavigate } from "react-router-dom";

export const useCustomNavigation = () => {
  const navigate = useNavigate();

  const navigateWithoutRefresh = (path: string) => {
    navigate(path, { replace: true });
  };

  return { navigateWithoutRefresh };
};

export default useCustomNavigation;
