const ipConversionBtn = document.getElementById("ipConversionBtn");

ipConversionBtn.onclick = function () {
    showPopup();
    const IpConversion = document.createElement("div");
    IpConversion.id = "IpConversion";
    IpConversion.innerHTML = `
        IP conversion:
        <div style="display: flex; gap: 15px;">
            <input type="text" id="ipInp" placeholder="Enter a IP (Dotted form): ">
        </div>
       
        <button style="width: 415px" onclick="ipCon()">Convert</button>
        <textarea id="ipConRes" style="letter-spacing: 2px; color: #000; resize: vertical; height: 80px; width: 415px;"></textarea>
    `;
    resultDiv.appendChild(IpConversion);
};

function ipCon() {
    const input = document.getElementById("ipInp").value.trim();
    let result = "";

    function getIpClass(ip) {
        const firstOctet = parseInt(ip.split('.')[0], 10);
        if (firstOctet >= 1 && firstOctet <= 127) return 'Class A';
        if (firstOctet >= 128 && firstOctet <= 191) return 'Class B';
        if (firstOctet >= 192 && firstOctet <= 223) return 'Class C';
        if (firstOctet >= 224 && firstOctet <= 239) return 'Class D (Multicast)';
        if (firstOctet >= 240 && firstOctet <= 255) return 'Class E (Experimental)';
        return 'Invalid Class';
    }

    function isValidIPv4(ip) {
        const parts = ip.split('.');
        if (parts.length !== 4) return false;
        for (let i = 0; i < parts.length; i++) {
            const part = parseInt(parts[i], 10);
            if (isNaN(part) || part < 0 || part > 255) return false;
        }
        return true;
    }

    function convertToDecimal(binaryIP) {
        return binaryIP.split('.').map(byte => parseInt(byte, 2)).join('.');
    }

    function convertToBinary(decimalIP) {
        return decimalIP.split('.').map(byte => ("00000000" + parseInt(byte, 10).toString(2)).slice(-8)).join('.');
    }

    function detectAndConvertIP(ip) {
        if (/^[01.]+$/.test(ip)) {
            const decimalIP = convertToDecimal(ip);
            if (isValidIPv4(decimalIP)) {
                const ipClass = getIpClass(decimalIP);
                return `Converted Decimal IP: ${decimalIP} \n IP Class: ${ipClass}`;
            } else {
                return "Invalid binary IP";
            }
        } else if (isValidIPv4(ip)) {
            const binaryIP = convertToBinary(ip);
            const ipClass = getIpClass(ip);
            return `Converted Binary IP: ${binaryIP}\nIP Class: ${ipClass}`;
        } else {
            return "Invalid input";
        }
    }

    result = detectAndConvertIP(input);
    document.getElementById("ipConRes").innerText =  result;
}

