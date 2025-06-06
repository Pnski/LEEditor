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
    return ext === "";
  });

  filteredFiles.forEach(file => {
    const li = document.createElement("li");
    li.textContent = (file.webkitRelativePath || file.name).split('/').pop();
    li.addEventListener("click", () => handleFileClick(file));
    fileList.appendChild(li);
  });
});

async function handleFileClick(file) {
  const text = await file.text();
  let json;
  try {
    json = JSON.parse(text.slice(5));
  } catch (e) {
    json = { error: "Invalid JSON or decompile not implemented", raw: text.slice(0, 500) };
  }

  function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

jsonViewer.innerHTML = `<pre>${escapeHTML(JSON.stringify(json, null, 2))}</pre>`;

}
