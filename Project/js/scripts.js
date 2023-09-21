function SmoothScroll(link) {
    link.addEventListener("click", function (e) {
        //scroll
        e.preventDefault();

        const href = link.getAttribute("href");
        // Scroll back to top 
        if (href === "#") {
            //scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        // Scroll to other links 
        if (href !== "#" && href.startsWith("#")) {

            //scroll to section
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });

        }


    })



}


var alllinks = document.querySelectorAll("a:link");


for (var i = 0; i < alllinks.length; i++) {

    SmoothScroll(alllinks[i]);
}

alllinks.forEach(SmoothScroll);


