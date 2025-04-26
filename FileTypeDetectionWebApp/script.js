const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");

// Mapping file extensions to user-friendly types
const fileTypes = {
    "pdf": "PDF Document",
    "doc": "Microsoft Word 97-2003",
    "docx": "Microsoft Word Document",
    "xls": "Microsoft Excel 97-2003",
    "xlsx": "Microsoft Excel Document",
    "ppt": "Microsoft PowerPoint 97-2003",
    "pptx": "Microsoft PowerPoint Presentation",
    "jpg": "JPEG Image",
    "jpeg": "JPEG Image",
    "png": "PNG Image",
    "gif": "GIF Image",
    "mp3": "MP3 Audio",
    "mp4": "MP4 Video",
    "zip": "ZIP Archive",
    "rar": "RAR Archive",
    "txt": "Text Document",
    "csv": "CSV (Comma-Separated Values)",
    "json": "JSON File",
    "html": "HTML File",
    "css": "Cascading Style Sheet",
    "js": "JavaScript File",
    "exe": "Windows Executable",
    "apk": "Android Application Package",
    "iso": "Disk Image File"
};

dropZone.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", function (event) {
    handleFile(event.target.files[0]);
});

dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.style.background = "#d5e6f7";
});

dropZone.addEventListener("dragleave", () => {
    dropZone.style.background = "#ecf0f1";
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.style.background = "#ecf0f1";
    if (event.dataTransfer.files.length > 0) {
        handleFile(event.dataTransfer.files[0]);
    }
});

function handleFile(file) {
    if (file) {
        let fileName = file.name;
        let fileExtension = fileName.split('.').pop().toLowerCase();
        let fileType = fileTypes[fileExtension] || "Unknown File Type";

        fileInfo.innerHTML = `<strong>File Name:</strong> ${fileName} <br> 
                              <strong>File Type:</strong> ${fileType} <br>
                              <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB`;
        fileInfo.style.display = "block";
    }
}
