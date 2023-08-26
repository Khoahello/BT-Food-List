import { fetchFoodList, BASE_URL, showThongTinLenForm, layThongTinTuForm, showMessage } from "./controller.js";

fetchFoodList()

window.deleteFood = (id) => {
    axios
        .delete(`${BASE_URL}/${id}`)
        .then((res) => {
            fetchFoodList()
            showMessage("Xóa thành công")
        })
        .catch((err) => {
        });
}

window.editFood = (id) => {
    document.getElementById("foodID").readOnly = true
    $("#exampleModal").modal("show")
    axios
        .get(`${BASE_URL}/${id}`)
        .then((res) => {
            showThongTinLenForm(res.data)
        })
        .catch((err) => {
        });
}

window.addFood = () => {
    let data = layThongTinTuForm()
    axios
        .post(BASE_URL, data)
        .then((res) => {
            fetchFoodList()
            $("#exampleModal").modal("hide")
            showMessage("Thêm thành công")
        })
        .catch((err) => {
        });
}

window.updateFood = () => {
    let data = layThongTinTuForm()
    axios
        .put(`${BASE_URL}/${data.ma}`, data)
        .then((res) => {
            fetchFoodList()
            $("#exampleModal").modal("hide")
            showMessage("Cập nhật thành công")
        })
        .catch((err) => {
        });
}

window.themMonAn = () => {
    document.getElementById("foodID").readOnly = false
    document.getElementById("foodID").value = "";
    document.getElementById("tenMon").value = "";
    document.getElementById("loai").value = "";
    document.getElementById("giaMon").value = "";
    document.getElementById("khuyenMai").value = "";
    document.getElementById("tinhTrang").value = "";
    document.getElementById("hinhMon").value = "";
    document.getElementById("moTa").value = "";
}