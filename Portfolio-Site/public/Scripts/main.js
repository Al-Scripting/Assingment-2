// Function to handle smooth scrolling to the target section
function scrollToSection(targetId) {
    // Smoothly scroll to the specified section
    $('html, body').animate({
        scrollTop: $("#" + targetId).offset().top
    }, 1); // You can adjust the scroll duration (in milliseconds) as needed
}

// Function to handle URL updating based on the section in view
function updateUrl(sectionId) {
    // Update the browser URL without reloading the page
    history.pushState(null, null, "/" + sectionId);
}

// Intersection Observer setup
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Get the ID of the section currently in view
            var sectionId = entry.target.id;
            // Update the URL based on the section in view
            updateUrl(sectionId);
        }
    });
}, { threshold: 0.5 }); // Use a threshold of 0.5 for 50% visibility

// Sections to observe
var sections = document.querySelectorAll('section'); // Assuming all sections have 'section' as the tag name

// Observe each section
sections.forEach(function (section) {
    // Start observing each section for intersection with the viewport
    observer.observe(section);
});

// Smooth scroll behavior for internal links
$("a.nav-link").on("click", function (event) {
    event.preventDefault();
    // Extract the target section's ID from the link's href attribute
    var targetId = $(this).attr("href").substring(1);
    // Smoothly scroll to the target section and update the URL
    scrollToSection(targetId);
    updateUrl(targetId);
});
