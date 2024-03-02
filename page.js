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
        "활동 기간": "2023.01.01 ~ 2024.01.17",
        "역할": "프로젝트 매니저",
        "담당 업무": "팀 관리 및 일정 조정"
    },
    "한승희": {
        "활동 기간": "2023.01.01 ~ 2024.03.18",
        "역할": "개발자",
        "담당 업무": "프론트엔드 개발"
    },
    "조영범": {
        "활동 기간": "2023.01.01 ~ 2024.08.12",
        "역할": "디자이너",
        "담당 업무": "UI/UX 디자인"
    },
    "최승혁": {
        "활동 기간": "2023.01.01 ~ 2024.09.19",
        "역할": "개발자",
        "담당 업무": "백엔드 개발"
    },
    "심형주": {
        "활동 기간": "2023.01.01 ~ 2024.09.19",
        "역할": "테스터",
        "담당 업무": "품질 관리 및 테스팅"
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

