
const navbarScriptURL = document.currentScript.src;
const projectRoot = new URL("../", navbarScriptURL);

document.addEventListener("DOMContentLoaded", async function () {

    try {

        const response = await fetch(
            new URL("components/navBar.html", projectRoot)
        );

        if (!response.ok) {
            throw new Error("Navbar not found: " + response.status);
        }

        let data = await response.text();

        data = data.replaceAll("{{ROOT}}", projectRoot.href);

        const container = document.getElementById("navbar-container");

        if (!container) {
            throw new Error("navbar-container not found");
        }

        container.innerHTML = data;

        // Set active navigation link
        let currentPath = window.location.pathname;

        if (currentPath.endsWith("/")) {
            currentPath += "index.html";
        }

        container.querySelectorAll(".nav-link").forEach(link => {

            const linkURL = new URL(link.getAttribute("href"));

            if (linkURL.pathname === currentPath) {
                link.classList.add("active");
            }

        });

        console.log("Navbar loaded successfully");

    } catch (error) {

        console.error("Navbar loading error:", error);

    }

});
