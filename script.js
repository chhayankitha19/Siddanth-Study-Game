document.addEventListener("DOMContentLoaded", function() {
    const levels = [
        { name: "Level 1: Introduction", unlocked: true },
        { name: "Level 2: Basics", unlocked: false },
        { name: "Level 3: Advanced", unlocked: false }
    ];

    const levelsContainer = document.getElementById("levels");

    function renderLevels() {
        levelsContainer.innerHTML = "";
        levels.forEach((level, index) => {
            const levelDiv = document.createElement("div");
            levelDiv.className = "level" + (level.unlocked ? "" : " locked");
            levelDiv.innerText = level.name;
            levelDiv.onclick = () => {
                if (level.unlocked) alert(level.name + " opened!");
            };
            levelsContainer.appendChild(levelDiv);
        });
    }

    renderLevels();
});
