// Configuration de CodeMirror pour le code HTML
var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), {
  lineNumbers: true,
  mode: "htmlmixed",
  theme: "dracula",
});

// Configuration de CodeMirror pour le code CSS
var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
  lineNumbers: true,
  mode: "css",
  theme: "dracula",
});

// Fonction pour mettre à jour l'aperçu en direct
function updatePreview() {
  var previewFrame = document.getElementById("preview-frame");
  var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  preview.open();
  preview.write(
    '<html><head><style>' +
      cssEditor.getValue() +
      '</style></head><body>' +
      htmlEditor.getValue() +
      '</body></html>'
  );
  preview.close();
}
