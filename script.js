function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "76px";
        menu.style.right = "4%";

        menu.style.padding = "20px";

        menu.style.background = "#fffdf9";

        menu.style.border = "1px solid #ded7cf";

        menu.style.borderRadius = "18px";

        menu.style.boxShadow =
            "0 18px 50px rgba(43,32,24,.10)";
    }
}