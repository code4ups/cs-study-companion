import React from "react";

export default function BilingualToggle() {
    const [state, setState] = React.useState({
        current: "en",
        hrefEN: "/en/introduction",
        hrefEL: "/el/introduction",
    });

    React.useEffect(() => {
        const base = import.meta.env.BASE_URL || ""; // π.χ. '/cs-study-companion/' ή '/' τοπικά

        const parts = window.location.pathname.replace(base, "").split("/").filter(Boolean);
        const current = parts[0] === "el" ? "el" : "en";
        const tail = parts.slice(1).join("/"); // "a2/2-1" ή "" για εισαγωγή

        const hrefEN = `${base}en${tail ? `/${tail}` : `/introduction`}`;
        const hrefEL = `${base}el${tail ? `/${tail}` : `/introduction`}`;

        setState({ current, hrefEN, hrefEL });
    }, []);

    const commonBtn =
        "px-2 py-1 rounded text-sm transition-colors";

    return (
        <div className="flex items-center gap-2">
            <a
                href={state.hrefEN}
                aria-current={state.current === "en" ? "page" : undefined}
                className={
                    state.current === "en"
                        ? `${commonBtn} bg-indigo-600 text-white`
                        : `${commonBtn} bg-gray-200 text-gray-800 hover:bg-gray-300`
                }
            >
                EN
            </a>
            <a
                href={state.hrefEL}
                aria-current={state.current === "el" ? "page" : undefined}
                className={
                    state.current === "el"
                        ? `${commonBtn} bg-indigo-600 text-white`
                        : `${commonBtn} bg-gray-200 text-gray-800 hover:bg-gray-300`
                }
            >
                EL
            </a>
        </div>
    );
}
