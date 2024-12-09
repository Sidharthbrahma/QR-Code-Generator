
function generateQR() {
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';
    
    // Get input values
    const qrText = document.getElementById("qr-text").value;
    const qrSize = document.getElementById("size").value;

    if (qrText === "") {
        alert("Please enter your text");
        return;
    }

    // Generate QR Code
    new QRCode(document.getElementById("qrcode"), {
        text: qrText,
        width: parseInt(qrSize),
        height: parseInt(qrSize),
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}