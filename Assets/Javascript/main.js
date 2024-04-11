document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('#tabs button');
    var contents = document.querySelectorAll('.content');

    function changeTab(event) {
        // Hide all content
        contents.forEach(function(content) {
            content.style.display = 'none';
        });
        
        // Remove active class from all tabs
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });

        // Add active class to clicked tab and show corresponding content
        event.currentTarget.classList.add('active');
        var targetId = event.currentTarget.getAttribute('data-target');
        var targetContent = document.getElementById(targetId);
        targetContent.style.display = 'block';
    }

    // Attach click event listener to each tab
    tabs.forEach(function(tab) {
        tab.addEventListener('click', changeTab);
    });

    // Optionally, activate the first tab by default
    if(tabs.length > 0) {
        tabs[0].click();
    }
});