import React from "react";

/**
 * Keeps the current path tail (after /en or /el) and only swaps the language segment.
 * Works for:
 *   /en/a2/2-1  <->  /el/a2/2-1
 *   /en         <->  /el
 *   /           ->   defaults to /en/introduction or /el/introduction
 */
export default function BilingualToggle() {
    const [state, setState] = React.useState({
        current: "en",
        hrefEN: "/en/introduction",
        hrefEL: "/el/introduction",
    });

    React.useEffect(() => {
        const parts = window.location.pathname.split("/").filter(Boolean); // e.g. ["en","a2","2-1"]
        const current = parts[0] === "el" ? "el" : "en";
        const tail = parts.slice(1).join("/"); // "a2/2-1"  or "" on intro/root

        // όταν δεν υπάρχει tail, πήγαινε στην introduction
        const hrefEN = `/en${tail ? `/${tail}` : `/introduction`}`;
        const hrefEL = `/el${tail ? `/${tail}` : `/introduction`}`;

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
