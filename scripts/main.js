const folderInput = document.getElementById("folderInput");
const fileList = document.getElementById("fileList");
const jsonViewer = document.getElementById("jsonViewer");

folderInput.addEventListener("change", async (event) => {
  const files = Array.from(event.target.files);
  fileList.innerHTML = "";
  jsonViewer.innerHTML = "";

  const filteredFiles = files.filter(file => {
    const parts = file.name.split(".");
    const ext = parts.length > 1 ? parts.pop().toLowerCase() : "";
    return ext === "bak" || ext === "";
  });

  filteredFiles.forEach(file => {
    const li = document.createElement("li");
    li.textContent = file.webkitRelativePath;
    li.addEventListener("click", () => handleFileClick(file));
    fileList.appendChild(li);
  });
});

async function handleFileClick(file) {
  const text = await file.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch (e) {
    json = { error: "Invalid JSON or decompile not implemented", raw: text.slice(0, 500) };
  }

  const viewer = new JSONViewer({ theme: 'dark' });
  jsonViewer.innerHTML = '';
  jsonViewer.appendChild(viewer.getContainer());
  viewer.showJSON(json);
}
