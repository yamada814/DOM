const rgbMap = new Map([
    ["redBox", 0],
    ["greenBox", 0],
    ["blueBox", 0]
]);

// `up` と `down` を統合し、一つの処理で管理
document.querySelectorAll(".up, .down").forEach(button => {
    button.addEventListener("click", () => {
        const key = button.dataset.id; // "redBox", "greenBox", "blueBox" のどれか
        let colorVal = rgbMap.get(key); // 現在の値を取得

        // ボタンの種類を判定（up なら +1、down なら -1）
        const isUp = button.classList.contains("up");
        colorVal = isUp ? (colorVal + 1) % 16 : (colorVal - 1 + 16) % 16;

        rgbMap.set(key, colorVal); // 更新
        button.parentElement.querySelector(".label2").textContent = colorVal.toString(16); // 数値表示を更新

        updateColor(); // カラーを更新
    });
});

function updateColor() {
    const color = `#${rgbMap.get("redBox").toString(16)}${rgbMap.get("greenBox").toString(16)}${rgbMap.get("blueBox").toString(16)}`;
    document.getElementById("resultBox").style.backgroundColor = color; // 色を更新
}
