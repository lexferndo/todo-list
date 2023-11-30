import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DetailContext = createContext();

const DetailContextProvider = ({ children }) => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <DetailContext.Provider value={{ openDetail, setOpenDetail }}>
      {children}
    </DetailContext.Provider>
  );
};

DetailContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DetailContextProvider;
