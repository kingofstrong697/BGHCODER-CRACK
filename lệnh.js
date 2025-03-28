const validKeys = [
    "f9b2ca21458f7f4e5d619c67b8147bc1",
    "fd51b5169762b0bac7c7d6b024a4b022",
    "e99a18c428cb38d5f260853678922e03",
    "202cb962ac59075b964b07152d234b70",
    "5a7b2a57d47a6a3a6ef40c6f4e6f4e3f", // Existing hash
    CryptoJS.MD5("bghcoderdzz").toString() // Added new hash for bghcoderdzz
];

function checkKey() {
    let inputKey = document.getElementById("key").value;
    let hashedKey = CryptoJS.MD5(inputKey).toString();

    if (validKeys.includes(hashedKey)) {
        document.getElementById("login-box").style.display = "none";
        document.getElementById("menu").style.display = "block";
    } else {
        alert("Key sai! Vui lòng thử lại.");
    }
}

function toggleFunction(id) {
    let button = document.getElementById(id);
    let isActive = button.classList.toggle("active");

    if (isActive) {
        switch (id) {
            case "toiUuThietBi":
                optimizeDevice();
                alert("Đã tối ưu thiết bị!");
                break;
            case "buffNhạy":
                increaseSensitivity();
                alert("Tăng nhạy thành công!");
                break;
            case "buffDPI":
                boostDPI();
                alert("Buff DPI đã kích hoạt!");
                break;
        }
    } else {
        alert("Chức năng đã tắt.");
    }
}

function optimizeDevice() {
    if (window.performance && window.performance.memory) {
        console.log("RAM Trước: ", window.performance.memory.usedJSHeapSize);
        window.performance.memory.usedJSHeapSize = 0;
        console.log("RAM Sau: ", window.performance.memory.usedJSHeapSize);
    }
    localStorage.clear();
    sessionStorage.clear();
}

function increaseSensitivity() {
    let style = document.createElement('style');
    style.innerHTML = `
        * { touch-action: manipulation !important; }
        html, body { -webkit-touch-callout: none; user-select: none; }
    `;
    document.head.appendChild(style);
}

function boostDPI() {
    let scale = 1.0;
    document.body.style.zoom = scale;
}

function createSnowflake() {
    let snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❄";
    document.body.appendChild(snowflake);

    let size = Math.random() * 10 + 10;
    let leftPosition = Math.random() * window.innerWidth;

    snowflake.style.left = leftPosition + "px";
    snowflake.style.fontSize = size + "px";
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 200);