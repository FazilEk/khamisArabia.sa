
const navbarScriptURL = document.currentScript.src;
const projectRoot = new URL("../", navbarScriptURL);

document.addEventListener("DOMContentLoaded", async function () {

    try {
        console.log('starting');
        const response = await fetch(
            new URL("components/navBar.html", projectRoot)
        );

        if (!response.ok) {
            console.log('error no : 01');
            console.log("Navbar not found: " + response.status);
            throw new Error("Navbar not found: " + response.status);
        }

        let data = await response.text();

        data = data.replaceAll("{{ROOT}}", projectRoot.href);

        const container = document.getElementById("navbar-container");

        if (!container) {
            console.log('error no : 02');
            console.log("navbar-container not found");
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
        console.log('success uptohere');

    } catch (error) {
        console.log('error no : 03');
        console.error("Navbar loading error:", error);

    }

});
