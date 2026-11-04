// Get project root from navbar.js location
const scriptURL = new URL(
    document.querySelector('script[src*="navbar.js"]').src
);

const projectRoot = new URL("../", scriptURL);

// Load navbar
fetch(new URL("components/navBar.html", projectRoot))
    .then(response => {
        if (!response.ok) throw new Error("Navbar not found");
        return response.text();
    })
    .then(data => {
        data = data.replaceAll("{{ROOT}}", projectRoot.href);

        document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error(error));