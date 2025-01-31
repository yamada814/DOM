const data = [
    ["区分", "料金"],  // ◀ 最初の要素は表の各列のタイトル
    ["シルバー", "1,500円"],
    ["高校生以上", "1,800円"],
    ["中学生", "1,500円"],
    ["小学生", "1,000円"],
    ["幼児以下", "無料"]
];
// const table = document.createElement("table");
// for (const d of data) {
//     const tr = document.createElement("tr");
//     for (const e of d) {
//         if (data.indexOf(d) === 0) {
//             const th = document.createElement("th");
//             th.textContent = e;
//             tr.appendChild(th);
//         } else {
//             const td = document.createElement("td");
//             td.textContent = e;
//             tr.appendChild(td)
//         }
//     }
//     table.appendChild(tr);
// }
// document.getElementById("container").append(table)

const table = document.createElement("table");
for (const row of data) {
    const tr = document.createElement("tr");
    for (const col of row) {
        const rowdata = data.indexOf(row) === 0 ? "th" : "td";
        const rowelm = document.createElement(rowdata);
        rowelm.textContent = col;
        tr.append(rowelm);
    }
    table.append(tr);
}
document.getElementById("container").append(table)

