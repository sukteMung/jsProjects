import { useNavigate } from "react-router-dom";

export default function NavBar({ pageName }) {
    const nav = useNavigate();

    const tabs = [
        { label: "Home", path: "/" },
        { label: "Images", path: "/ImagesPage" },
        { label: "Quotes", path: "/QuotesPage" },
    ];

    // Colors
    const navBg = "#8895B3";     // navbar background
    const btnBg = "#8E94F2";     // normal button
    const outline = "#9FA0FF";   // outline color
    const btnBgSelected = "#6C73D9"; // darker selected button

    return (
        <div
            className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 rounded-xl shadow-md"
            style={{
                width: "65%",
                margin: "0 auto",          // centers the navbar
                backgroundColor: navBg,    // navbar background only
                border: `5px outset ${outline}`,

            }}
        >
            {tabs.map((tab) => {
                const isSelected = pageName === tab.label;
                return (
                    <button
                        key={tab.label}
                        onClick={() => nav(tab.path)}
                        className="px-6 py-2 text-xl font-semibold rounded-lg
                        hover:brightness-90 
                        hover:border-inset
                        "
                        style={{
                            backgroundColor: isSelected ? btnBgSelected : btnBg,
                            color: "white",
                            border: isSelected ? `2px inset ${outline}` : `2px outset ${outline}`,
                        }}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
}
