import { classData } from "./const.js";

const folderInput = document.getElementById("folderInput");
const charList = document.getElementById("charList");
const storageList = document.getElementById("storageList");

function parseJSON(text) {
    let json;
    try {
        json = JSON.parse(text.slice(5));
    } catch (e) {
        json = { error: "Invalid JSON or decompile not implemented", raw: text.slice(0, 500) };
    }
    return json
}

async function getCharData(file) {
    const json = parseJSON(await file.text())
    return `<img src="sources/img/Classes/${classData[json["characterClass"]][json["chosenMastery"]]}.png" alt="${classData[json["characterClass"]][json["chosenMastery"]]}" style="height: 1em; vertical-align: middle;"> ${json["characterName"]}`;
}

async function getStashData(file) {
    const json = parseJSON(await file.text())
    return [json["displayName"], json["categoryId"]]
}


folderInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files);
    charList.innerHTML = "";
    storageList.innerHTML = "";
    jsonViewer.innerHTML = "";

    const charFiles = files.filter(file => {
        return file.name.toLowerCase().includes("character") && (file.name.lastIndexOf('.') == -1);
    });

    const storageFiles = files.filter(file => {
        return file.name.toLowerCase().includes("tab") && (file.name.lastIndexOf('.') == -1);
    });

    const storeData = files.filter(file => {
        return file.name.toLowerCase().includes("stash") && !(file.name.toLowerCase().includes("tab")) && (file.name.lastIndexOf('.') == -1);
    });

    const stashJSON = parseJSON(await storeData[0].text())
    const tabFileNames = Object.values(stashJSON["tabsv2"]);

    for (const cat of Object.values(stashJSON["categories"])) {
        const div = document.createElement("div");
        div.id = cat.categoryId;
        div.style = "order:" + cat.displayOrder
        div.innerHTML = cat.displayName;
        storageList.appendChild(div);
    }

    for (const name of tabFileNames) {
        const matchingFile = storageFiles.find(file => file.name === name)
        if (matchingFile) {
            const div = document.createElement("div");
            const stashData = await getStashData(matchingFile);
            div.innerHTML = "-" + stashData[0];
            div.style.cursor = "pointer";
            div.addEventListener("click", () => handleFileClick(file));
            document.getElementById(stashData[1]).appendChild(div);
        } else {
            console.warn("error in stashfiles")
        }
    }

    for (const file of charFiles) {
        const div = document.createElement("div");
        div.innerHTML = await getCharData(file);
        div.style.cursor = "pointer";
        div.addEventListener("click", () => handleFileClick(file));
        charList.appendChild(div);
    }
});