const firstcode = document.getElementById("firstcode");
const lastcode = document.getElementById("lastcode");
const searchbtn = document.getElementById("searchbtn");
const result = document.getElementById("result")

searchbtn.addEventListener("click", () => {
    const postcode = `${firstcode.value}${lastcode.value}`;
    if (/^\d{7}$/.test(postcode)) {
        result.textContent = "検索中";
        (async function () {
            try {          
                const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postcode}`);
                if (res.ok) {
                    const data = await res.json();
                    if (data.results) {
                        const { address1, address2, address3 } = data.results[0];
                        result.textContent = `${address1}${address2}${address3}`
                    } else {
                        result.textContent = "該当するデータが見つかりません。"
                    }
                } 
            } catch (error) {
                alert("リクエストに失敗しました");
            }
        })();
    } else {
        alert("郵便番号の指定に誤りがあります。")
        result.textContent = "";
    }
})