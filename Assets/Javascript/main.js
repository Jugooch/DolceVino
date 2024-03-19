document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('#tabs button');
    var contents = document.querySelectorAll('.content');

    function changeTab(event) {
        // Remove active class from all tabs and hide all content
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
        contents.forEach(function(content) {
            content.style.display = 'none';
        });

        // Add active class to clicked tab
        event.currentTarget.classList.add('active');

        // Find the associated content and show it
        var targetId = event.currentTarget.getAttribute('data-target');
        var targetContent = document.getElementById(targetId);

        console.log(targetContent.id);

        // Load content from external HTML fragments
        fetch(targetContent.getAttribute('data-source'))
            .then(response => response.text())
            .then(html => {
                targetContent.innerHTML = html;
                targetContent.style.display = 'block';
            })
            .catch(error => console.error('Error loading content: ', error));
    }

    // Add a click event to each tab button
    tabs.forEach(function(tab) {
        tab.addEventListener('click', changeTab);
    });

        // Programmatically click the "Lunch" button to load its content initially
        var lunchButton = document.querySelector('button[data-target="lunch-content"]');
        if (lunchButton) {
            lunchButton.click();
        }
});
