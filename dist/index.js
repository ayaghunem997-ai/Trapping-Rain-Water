"use strict";
const input = document.getElementById("arrInput");
const btn = document.getElementById("calcBtn");
const result = document.getElementById("result");
const visual = document.getElementById("visual");
btn.onclick = () => {
    const raw = input.value.trim();
    const values = raw.length === 0 ? [] : raw.split(",").map((value) => Number(value.trim()));
    const valid = values.every((value) => Number.isFinite(value) && value >= 0);
    if (!valid) {
        result.textContent = "Please enter valid non-negative numbers separated by commas.";
        result.classList.add("error");
        visual.innerHTML = "";
        return;
    }
    result.classList.remove("error");
    const water = calc(values);
    result.innerHTML = `<span class="result-label">Trapped Water:</span> <span class="result-value">${water}</span>`;
    draw(values);
};
const calc = (a) => {
    const n = a.length;
    if (n === 0)
        return 0;
    const leftMax = Array(n).fill(0);
    const rightMax = Array(n).fill(0);
    leftMax[0] = a[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], a[i]);
    }
    rightMax[n - 1] = a[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], a[i]);
    }
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += Math.max(0, Math.min(leftMax[i], rightMax[i]) - a[i]);
    }
    return total;
};
const draw = (a) => {
    visual.innerHTML = "";
    const n = a.length;
    if (n === 0)
        return;
    const leftMax = Array(n).fill(0);
    const rightMax = Array(n).fill(0);
    leftMax[0] = a[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], a[i]);
    }
    rightMax[n - 1] = a[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], a[i]);
    }
    for (let i = 0; i < n; i++) {
        const height = Math.max(0, a[i]);
        const trapped = Math.max(0, Math.min(leftMax[i], rightMax[i]) - height);
        const column = document.createElement("div");
        column.className = "bar-column";
        if (trapped > 0) {
            const waterLayer = document.createElement("div");
            waterLayer.className = "water-layer";
            waterLayer.style.height = `${trapped * 12}px`;
            column.appendChild(waterLayer);
        }
        const blockLayer = document.createElement("div");
        blockLayer.className = "block-layer";
        blockLayer.style.height = `${height * 12}px`;
        column.appendChild(blockLayer);
        const label = document.createElement("div");
        label.className = "bar-label";
        label.textContent = String(a[i]);
        column.appendChild(label);
        visual.appendChild(column);
    }
};
