document.addEventListener("DOMContentLoaded", async function () {

    const container = document.getElementById("navbar-container");

    // Automatically find the root folder of the project
    const script = document.querySelector('script[src*="navbar.js"]');

    const scriptURL = new URL(script.src);
    const projectRoot = new URL("../", scriptURL);

    try {

        const response = await fetch(
            new URL("components/navbar.html", projectRoot)
        );

        if (!response.ok) {
            alert("Navbar loading failed: " + response.status);
            throw new Error("Navbar loading failed: " + response.status);
        }

        let data = await response.text();

        // Replace project root placeholder
        data = data.replaceAll("{{ROOT}}", projectRoot.href);
        container.innerHTML = data;

        // Active navigation link
        const currentURL = window.location.pathname;

        container.querySelectorAll(".nav-link").forEach(link => {

            const linkURL = new URL(link.href);

            if (linkURL.pathname === currentURL) {
                link.classList.add("active");
            }

        });

    } catch (error) {
        alert("Navbar loading error:" + error);
        console.error("Navbar loading error:", error);
    }
});