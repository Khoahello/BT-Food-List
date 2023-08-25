export let BASE_URL = "https://64d6fc0c2a017531bc12e978.mockapi.io/food"
const MON_CHAY = true
const CON_MON = true
const KHUYEN_MAI = true

export let renderFoodList = (list) => {
    let contentHTML = ""
    list.forEach((food) => {
        let {ma, ten, loai, gia, khuyenMai, moTa, tinhTrang} = food
        let trString = /*html*/ `
                <tr>
                    <td class="text-center">${ma}</td>
                    <td class="text-center">${ten}</td>
                    <td class="text-center">${loai == MON_CHAY ? "Chay" : "Mặn"}</td>
                    <td class="text-center">${gia}</td>
                    <td class="text-center">${khuyenMai == KHUYEN_MAI ? "10" : "20"}</td>
                    <td>${moTa}</td>
                    <td class="text-center">${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
                    <td class="text-center">
                        <button class="btn btn-info" onclick="editFood(${ma})">Sửa</button>
                        <button class="btn btn-danger" onclick="deleteFood(${ma})">Xóa</button>
                    </td>
                </tr>
        `
        contentHTML += trString
    })
    document.getElementById("tbodyFood").innerHTML = contentHTML
}

export let fetchFoodList = () => {
    axios
        .get(BASE_URL)
        .then((res) => {
            renderFoodList(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
}

export let showThongTinLenForm = (food) => {
    let {ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa} = food;
    document.getElementById("foodID").value = ma;
    document.getElementById("tenMon").value = ten;
    document.getElementById("loai").value = loai == MON_CHAY ? "loai1" : "loai2";
    document.getElementById("giaMon").value = gia;
    document.getElementById("khuyenMai").value = khuyenMai == KHUYEN_MAI ? "10" : "20";
    document.getElementById("tinhTrang").value = tinhTrang == CON_MON ? "1" : "0";
    document.getElementById("hinhMon").value = hinhMon;
    document.getElementById("moTa").value = moTa;
}

export function layThongTinTuForm() {
    let ma = document.getElementById("foodID").value;
    let ten = document.getElementById("tenMon").value;
    let loai = document.getElementById("loai").value == "loai1";
    let gia = document.getElementById("giaMon").value;
    let khuyenMai = document.getElementById("khuyenMai").value == "10";
    let tinhTrang = document.getElementById("tinhTrang").value == "1";
    let hinhMon = document.getElementById("hinhMon").value;
    let moTa = document.getElementById("moTa").value;
    return {ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa}
}