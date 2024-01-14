import PropTypes from 'prop-types'
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from 'react';

export interface ContextProps {
    login: boolean,
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
  children: ReactNode;
}

export const Context = createContext<ContextProps | undefined>(undefined);

// 22/05/2023 VALERIA
const Provider: React.FC<ProviderProps> = ({ children }) => {
  // STATE
  const [login, setLogin] = useState(false);

  const value = useMemo(() => {
    return {
        login,
        setLogin
    };
  }, [
    login,
    setLogin
  ]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
};

const useAuth = () => {
  return useContext(Context);
};

export { Provider as default, useAuth };
