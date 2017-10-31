//iterate over coloredReindeer array and insert it into the DOM
for (let i = 0; i < coloredReindeerBuilder().length; i++) {
    let currentReindeerColor = coloredReindeerBuilder()[i];
    let reindeerEl = document.getElementById("colored-reindeer");

    reindeerEl.innerHTML += `
        <section style="color: ${currentReindeerColor.color}">${currentReindeerColor.name}</section>
    `
} 