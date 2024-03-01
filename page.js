document.addEventListener('DOMContentLoaded', function() {
    var projectLinks = document.querySelectorAll('.project-list a');

    projectLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = e.target.getAttribute('data-target');
            var projectIndex = e.target.getAttribute('data-index');
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var projectDescriptions = targetElement.querySelectorAll('p');
                if (projectDescriptions[projectIndex - 1]) {
                    projectDescriptions[projectIndex - 1].scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
