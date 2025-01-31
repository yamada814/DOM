const datas = [
    ["区分", "料金"],  // ◀ 最初の要素は表の各列のタイトル
    ["シルバー", "1,500円"],
    ["高校生以上", "1,800円"],
    ["中学生", "1,500円"],
    ["小学生", "1,000円"],
    ["幼児以下", "無料"]
];
const table = document.createElement("table");
// for (const d of data) {
//     for (const el of d) {
//             if (data.indexOf(d) === 0) {
//                 const th = document.createElement("th");
//                 th.textContent = el;
//                 table.append(th);
//             } else {
//                 const td = document.createElement("td");
//                 td.textContent(el);
//                 table.append(td);
//             }
//         }
// }
for (const data of datas) {
    for (const col of datas) {
        if (datas.indexOf(col) === 0) {
            const th = document.createElement("th");
            th.textContent = col;
            table
        }
    }
}
document.createElement("container").append(table)

