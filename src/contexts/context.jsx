import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  const handleTeamMemberClick = (teamMember) => {
    setSelectedTeamMember(teamMember);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedTeamMember(null);
    setModalOpen(false);
  };

  const isModalClose = () => {
    setShowModal(false);
  };

  const isModalOpen = () => {
    setShowModal(true);
  };

  /*==================== SHOW SCROLL TOP ====================*/
  function scrollTop() {
    const scrollTop = document.getElementById("scroll-top");
    // When the scroll is higher than 600 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 600
      ? scrollTop.classList.add("show-scroll")
      : scrollTop.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollTop);
  return (
    <AppContext.Provider
      value={{
        modalOpen,
        selectedTeamMember,
        handleTeamMemberClick,
        handleModalClose,
        isLoading,
        isModalClose,
        isModalOpen,
        showModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom Hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
