import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import initSectionObserver from "./lib/sectionObserver";

const initializeApp = () => {
    try {
        const rootElement = document.getElementById("root");
        if (!rootElement) throw new Error("Root element not found");

        const root = createRoot(rootElement);
        root.render(<App />);

        // Defer observer init slightly to ensure DOM nodes are rendered
        setTimeout(() => {
            try {
                if (typeof initSectionObserver === 'function') {
                    initSectionObserver();
                }
            } catch (err) {
                console.error('Section observer failed:', err);
            }
        }, 100);
    } catch (err) {
        console.error('App initialization failed:', err);
        // show minimal fallback UI so preview isn't blank
        try {
            const body = document.body;
            if (body) {
                body.innerHTML = '<div style="padding:48px;text-align:center;font-family:system-ui;">\n<h2>Application failed to start</h2>\n<p>Check console for details.</p>\n</div>';
            }
        } catch (e) {
            // ignore
        }
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
