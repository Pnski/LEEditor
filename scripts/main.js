

import "./fileHandler.js"

const jsonViewer = document.getElementById("jsonViewer");

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