import React from "react";
import classnames from "classnames";
import { useLocation, useParams, Link } from "react-router-dom";

const Tab = (props) => {
    const { id } = useParams();
    return (
        <Link to={`/restaurant/${id}/${props.route}`}>
            <div className={classnames("text-gray-500 pb-4 font-semibold  scroll",
            {"text-zred-500 font-bold border-b-4 border-zred-500 pb-4": props.isActive,}
            )}
            >
                <h3 className="text-lg md:text-xl">{props.title}</h3>
            </div>
        </Link>
    );
};

const TabsContainer = () => {

    const location = useLocation();
    const currentpath = location.pathname;
    const tabs = [
        {
            title: "Overview",
            route: "overview",
            isActive: currentpath.includes("overview"),
        },
        {
            title: "Order Online",
            route: "order-online",
            isActive: currentpath.includes("order-online"),
        },
        {
            title: "Reviews",
            route: "reviews",
            isActive: currentpath.includes("reviews"),
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentpath.includes("menu"),
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentpath.includes("photos"),
        },
    ]

    return (
        <>
            <div className="relative overflow-x-scroll flex items-center gap-4 md:gap-10 mb-3  border-b-2">
               {
                   tabs.map((tab) =>(
                       <Tab {...tab} key={`123${tab.route}`}/>
                   ))
               }
            </div>
        </>
    );
};

export default TabsContainer;
