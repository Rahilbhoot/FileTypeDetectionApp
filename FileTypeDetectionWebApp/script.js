const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const fileInfo = document.getElementById("fileInfo");

// File types and associated security tips
const fileTypes = {
    "pdf": { name: "PDF Document", tip: "Avoid opening PDFs from untrusted sources as they may contain embedded scripts." },
    "doc": { name: "Microsoft Word 97-2003", tip: "Disable macros to prevent malware execution." },
    "docx": { name: "Microsoft Word Document", tip: "Watch out for macro-enabled Word documents (.docm)." },
    "xls": { name: "Microsoft Excel 97-2003", tip: "Be cautious of macros; they can execute malicious code." },
    "xlsx": { name: "Microsoft Excel Document", tip: "Avoid enabling macros unless you trust the source." },
    "ppt": { name: "Microsoft PowerPoint 97-2003", tip: "Avoid downloading presentations from unknown emails." },
    "pptx": { name: "Microsoft PowerPoint Presentation", tip: "Turn off external content loading in PowerPoint." },
    "jpg": { name: "JPEG Image", tip: "Scan images for hidden threats such as steganography." },
    "jpeg": { name: "JPEG Image", tip: "Use antivirus software to scan image files before opening." },
    "png": { name: "PNG Image", tip: "Beware of malware hidden in image metadata." },
    "gif": { name: "GIF Image", tip: "Avoid clicking suspicious GIFs from unknown sources." },
    "mp3": { name: "MP3 Audio", tip: "Do not trust audio files from sketchy websites." },
    "mp4": { name: "MP4 Video", tip: "Avoid clicking on unknown MP4 files as they can exploit vulnerabilities in players." },
    "zip": { name: "ZIP Archive", tip: "Always scan compressed files before extracting them." },
    "rar": { name: "RAR Archive", tip: "Be careful of password-protected archives from unknown sources." },
    "txt": { name: "Text Document", tip: "Text files are mostly safe, but can contain phishing instructions." },
    "csv": { name: "CSV File", tip: "Beware of formula injection if opening in spreadsheet software." },
    "json": { name: "JSON File", tip: "Only import JSON files from trusted APIs or sources." },
    "html": { name: "HTML File", tip: "Opening local HTML files can execute scripts. Be cautious." },
    "css": { name: "Cascading Style Sheet", tip: "CSS files are generally safe but can be used to trick users via styling." },
    "js": { name: "JavaScript File", tip: "Never run unknown JS files. They can execute dangerous code." },
    "exe": { name: "Windows Executable", tip: "Only run EXE files from verified publishers." },
    "apk": { name: "Android Package", tip: "Install APKs only from trusted sources to avoid malware." },
    "iso": { name: "Disk Image File", tip: "ISO files can carry full system images — scan them carefully." }
};

// Click triggers file input
dropZone.addEventListener("click", () => fileInput.click());

// File input change handler
fileInput.addEventListener("change", function (event) {
    handleFile(event.target.files[0]);
});

// Drag over styling
dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.style.background = "#d5e6f7";
});

// Drag leave styling
dropZone.addEventListener("dragleave", () => {
    dropZone.style.background = "#ecf0f1";
});

// Drop handler
dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.style.background = "#ecf0f1";
    if (event.dataTransfer.files.length > 0) {
        handleFile(event.dataTransfer.files[0]);
    }
});

// File handling logic
function handleFile(file) {
    if (file) {
        let fileName = file.name;
        let fileExtension = fileName.split('.').pop().toLowerCase();
        let fileDetails = fileTypes[fileExtension];

        let fileType = fileDetails ? fileDetails.name : "Unknown File Type";
        let securityTip = fileDetails ? fileDetails.tip : "No security advice available for this file type.";

        fileInfo.innerHTML = `<strong>File Name:</strong> ${fileName} <br> 
                              <strong>File Type:</strong> ${fileType} <br>
                              <strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB <br>
                              <strong>Security Tip:</strong> <em>${securityTip}</em>`;
        fileInfo.style.display = "block";
    }
}
