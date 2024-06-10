const bitStuffingBtn = document.getElementById("bitStuffingBtn");
const charStuffingBtn = document.getElementById("charStuffingBtn");

bitStuffingBtn.onclick = function () {
    showPopup();
    const bitStuffingForm = document.createElement("div");
    bitStuffingForm.id = "BitStuffing";
    bitStuffingForm.innerHTML = `
        Input String:
        <input type="text" id="BStuffing" placeholder="Enter a string">
        <div style="display: flex; gap: 15px;">
            <button onclick="performBitStuffing()">Bit Stuff</button>
            <button onclick="performBitDeStuffing()">Bit De-Stuff</button>
        </div>
        <textarea id="BitStRes" style="letter-spacing: 2px; color: #000; resize: vertical;  height: 80px;"></textarea>
    `;
    resultDiv.appendChild(bitStuffingForm);
};

charStuffingBtn.onclick = function () {
    showPopup();
    const bitStuffingForm = document.createElement("div");
    bitStuffingForm.id = "CharStuffing";
    bitStuffingForm.innerHTML = `
        Char Stuffing:
        <div style="display: flex; gap: 15px;">
            <input style="width: 185px" type="text" id="flag" placeholder="Enter flag">
            <input style="width: 185px" type="text" id="esc" placeholder="Enter ESC">
        </div>
       
        <input type="text" id="CStuffing" placeholder="Enter a string">
        <div style="display: flex; gap: 15px;">
            <button onclick="performCharStuffing()">Char Stuff</button>
            <button onclick="performCharDeStuffing()">Char De-Stuff</button>
        </div>
        <textarea id="CharStRes" style="letter-spacing: 2px; color: #000; resize: vertical; height: 80px;"></textarea>
    `;
    resultDiv.appendChild(bitStuffingForm);
};

//bit stuff---------------------------
function performBitStuffing() {
    const input = document.getElementById("BStuffing").value;
    const stuffedOutput = input.replace(/11111/g, "111110");
    document.getElementById("BitStRes").innerText = "Bit Stuffed: " + stuffedOutput;
}
//bit De-Stuff
function performBitDeStuffing() {
    const input = document.getElementById("BStuffing").value;
    const DestuffedOutput = input.replace(/111110/g, "11111");
    document.getElementById("BitStRes").innerText = "Bit De-Stuffed: " + DestuffedOutput;
}

//char stuff de stuff--------------------
function performCharStuffing() {
    const flag = document.getElementById("flag").value;
    const esc = document.getElementById("esc").value;
    const data = document.getElementById("CStuffing").value;

    if (!flag || !esc) {
        alert("Please enter both flag and escape sequence");
        return;
    }

    let stuffedData = data;
    let posE = stuffedData.indexOf(esc);
    while (posE !== -1) {
        stuffedData = stuffedData.slice(0, posE) + esc + stuffedData.slice(posE);
        posE = stuffedData.indexOf(esc, posE + esc.length + 1);
    }
    let posF = stuffedData.indexOf(flag);
    while (posF !== -1) {
        stuffedData = stuffedData.slice(0, posF) + esc + stuffedData.slice(posF);
        posF = stuffedData.indexOf(flag, posF + esc.length + 1);
    }
    document.getElementById("CharStRes").innerText = "Char Stuffed: " + stuffedData;
}
// char deStuffinf 
function performCharDeStuffing() {
    const flag = document.getElementById("flag").value;
    const esc = document.getElementById("esc").value;
    const data = document.getElementById("CStuffing").value;

    if (!flag || !esc) {
        alert("Please enter both flag and escape sequence");
        return;
    }

    let destuffedData = data;
    let pos = destuffedData.indexOf(esc);
    while (pos !== -1) {
        destuffedData = destuffedData.slice(0, pos) + destuffedData.slice(pos + esc.length);
        pos = destuffedData.indexOf(esc, pos + esc.length);
    }
    document.getElementById("CharStRes").innerText = "Char De-Stuffed: " + destuffedData;
}