// Configuration de CodeMirror pour le code HTML
var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), {
  lineNumbers: true,
  mode: "htmlmixed",
  theme: "dracula", // Remplacé "default" par "dracula"
});

// Configuration de CodeMirror pour le code CSS
var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
  lineNumbers: true,
  mode: "css",
  theme: "dracula", // Remplacé "default" par "dracula"
});

// Mettez à jour la page en fonction des modifications dans les éditeurs
htmlEditor.on("change", function () {
  updatePreview();
});

cssEditor.on("change", function () {
  updatePreview();
});

// Fonction pour mettre à jour l'aperçu en direct
function updatePreview() {
  var previewFrame = document.getElementById("preview-frame");
  var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  preview.open();
  preview.write(htmlEditor.getValue() + '<style>' + cssEditor.getValue() + '</style>');
  preview.close();
}
