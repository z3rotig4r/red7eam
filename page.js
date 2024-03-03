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

const teamMemberDetails = {
    "김민규": {
        "활동 기간": "2023.06.01 ~ 2024.01.17",
        "역할": "QA, Security Analyst",
        "담당 업무": "비고"
    },
    "한승희": {
        "활동 기간": "2023.06.01 ~ 2024.03.18",
        "역할": "Project Manager, System Architect",
        "담당 업무": "비고"
    },
    "조영범": {
        "활동 기간": "2023.06.01 ~ 2024.08.12",
        "역할": "Full-Stack Developer, Vulnerability Analyst",
        "담당 업무": "비고"
    },
    "최승혁": {
        "활동 기간": "2023.06.01 ~ 2024.09.19",
        "역할": "Full-Stack Developer, Vulnerability Analyst",
        "담당 업무": "비고"
    },
    "심형주": {
        "활동 기간": "2023.06.01 ~ 2024.09.19",
        "역할": "Full-Stack Developer, UI/UX Designer",
        "담당 업무": "비고"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#teamMember tbody tr');
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modalText");
    const closeButton = document.querySelector(".close-button");

    rows.forEach(row => {
        row.addEventListener('click', function() {
            const name = this.cells[0].textContent;
            const details = teamMemberDetails[name];
            const detailText = `이름: <strong>${name}</strong><br>
                                활동 기간: <strong>${details["활동 기간"]}</strong><br>
                                역할: <strong>${details["역할"]}</strong><br>
                                담당 업무: <strong>${details["담당 업무"]}</strong>`;
            modalText.innerHTML = detailText;
            modal.style.display = "block";
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

