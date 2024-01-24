import React, { createRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowSize } from "../dashboard-layout/useWindowSize";
import "./sidebar.style.css";

export default function Sidebar(props) {
  const { open, onClose } = props;
  const { width } = useWindowSize();
  const [openedSubNav, setOpenedSubNav] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const routes = [
    {
      name: "Dashboard",
      path: "/",
      iconClass: "fa-solid fa-house-user",
      show: true,
      showSubRoutes: false,
      subRoutes: [
        {
          name: "Default",
          subPath: "/sub-dashboard",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },

    {
      name: "Training Management",
      path: "/Dashboard",
      iconClass: "fa-solid fa-id-badge icon-color",

      show: true,
      showSubRoutes: true,
      subRoutes: [
        {
          name: "Request Training",
          subPath: "/requestTraining",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Training List",
          subPath: "/trainingList",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },

    {
      name: "Test Management",
      path: "/Dashboard",
      iconClass: "fas fa-pencil-square icon-color",

      show: true,
      showSubRoutes: true,
      subRoutes: [
        {
          name: "CreateTest",
          subPath: "/test-createTest",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Test List",
          subPath: "/test-testList",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },

    {
      name: "Technology Managment",
      path: "/Dashboard",
      iconClass: "fa-solid fa-laptop-code icon-color",

      show: true,
      showSubRoutes: true,
      subRoutes: [
        {
          name: "Create Technology",
          subPath: "/technology-createTechnology",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Technology List",
          subPath: "/technology-technologyList",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },
    {
      name: "Associate Managment",
      path: "/Dashboard",
      iconClass: "fa-solid fa-people-roof icon-color",

      show: true,
      showSubRoutes: true,
      subRoutes: [
        {
          name: "Add Associate",
          subPath: "/associate-addAssociate",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Associate List",
          subPath: "/associate-associateList",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Assign Test",
          subPath: "/assignTest",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },
    {
      name: "Client Managment",
      path: "/Dashboard",
      iconClass: "fas fa-sitemap icon-color",

      show: true,
      showSubRoutes: true,
      subRoutes: [
        {
          name: "Create Client",
          subPath: "/client-createClient",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
        {
          name: "Client List",
          subPath: "/client-management-ListClient",
          iconClass: "fa-solid fa-house-user",
          show: true,
        },
      ],
    },

    {
      name: "Report",
      path: "/report",
      iconClass: "fa-solid fa-user",
      show: true,
    },
  ];

  const handleClose = React.useCallback(
    () => open && width < 992 && onClose(),
    [open, onClose, width]
  );

  const handleSubNavToggle = (event) => {
    event.stopPropagation();
    const { routeindex } = event.target.dataset;
    setOpenedSubNav((prevState) =>
      prevState === parseInt(routeindex) ? null : parseInt(routeindex)
    );
  };

  const handleHighlightMenu = (event) => {
    event.stopPropagation();
    const { index } = event.currentTarget.dataset;
    setActiveIndex((prevState) =>
      prevState === parseInt(index) ? null : parseInt(index)
    );
    setOpenedSubNav((prevState) =>
      prevState === parseInt(index) ? null : parseInt(index)
    );
  };

  return (
    <>
      <div className={`vertical-menu d-block ${open ? "" : "sidebar-close"}`}>
        <div className="h-100">
          <div
            id="sidebar-menu"
            className="h-10  d-flex flex-column justify-content-between"
          >
            <div>
              <ul className="list-style-none padding-0">
                {routes.map(
                  (route, index) =>
                    route.show && (
                      <li key={route.path} className=" menu-link-wrapper">
                        <div
                          className={`d-flex justify-content-between align-items-center menu-class ${
                            activeIndex === index ? "active-tab" : ""
                          }`}
                          onClick={handleHighlightMenu}
                          data-index={index}
                        >
                          <Link
                            to={route.path}
                            className="text-decoration-none menu-link"
                            exact={route.path === "/"}
                            data-routeindex={index}
                          >
                            <i
                              className={`${route.iconClass} padding-10 ${
                                open ? "" : "sidebar-close"
                              }`}
                            ></i>
                            <span
                              className={`menu-text font-size-16 padding-10 ${
                                open ? "" : "sidebar-close"
                              }`}
                            >
                              {route.name}
                            </span>
                          </Link>
                          {route.showSubRoutes &&
                            route.subRoutes.length > 0 && (
                              <i
                                className={`fa-solid fa-angle-${
                                  openedSubNav === index ? "up" : "down"
                                } color-grey cursor-pointer margin-right-15 submenu-class`}
                                role="button"
                                data-routeindex={index}
                                onClick={handleSubNavToggle}
                              ></i>
                            )}
                        </div>
                        {route.showSubRoutes && route.subRoutes.length > 0 && (
                          <ul
                            className={`list-style-none ${
                              openedSubNav === index ? "submenu" : "d-none"
                            }`}
                          >
                            {route.subRoutes.map(
                              (subRoute) =>
                                subRoute.show && (
                                  <li
                                    key={subRoute.subPath}
                                    className="margin-15 submenu"
                                  >
                                    <Link
                                      to={subRoute.subPath}
                                      className="text-decoration-none color-grey menu-link"
                                    >
                                      <span className="menu-text font-size-16 padding-10">
                                        {subRoute.name}
                                      </span>
                                    </Link>
                                  </li>
                                )
                            )}
                          </ul>
                        )}
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
