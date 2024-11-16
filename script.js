let dataList = [];

// Load data from local storage when the page loads
window.onload = function () {
  loadData();
  renderList();
};

function loadData() {
  const storedData = localStorage.getItem("dataList");
  if (storedData) {
    dataList = JSON.parse(storedData);
  }
}

function saveData() {
  localStorage.setItem("dataList", JSON.stringify(dataList));
}

function renderList() {
  const listElement = document.getElementById("dataList");
  listElement.innerHTML = "";
  dataList.forEach((data, index) => {
    const li = document.createElement("li");
    li.textContent = data;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className = "btn";
    deleteButton.onclick = () => deleteData(index);
    li.appendChild(deleteButton);
    listElement.appendChild(li);
  });
}

function addData() {
  const inputData = document.getElementById("inputData").value;
  if (inputData) {
    dataList.push(inputData);
    document.getElementById("inputData").value = "";
    saveData(); // Simpan data setelah menambah
    renderList();
  } else {
    alert("Masukkan data yang valid!");
  }
}

function deleteData(index) {
  dataList.splice(index, 1);
  saveData(); // Simpan data setelah menghapus
  renderList();
}

function randomizeList() {
  if (dataList.length > 0) {
    // Mengacak data
    const randomIndex = Math.floor(Math.random() * dataList.length);
    const randomData = dataList[randomIndex]; // Ambil data acak
    const randomDataElement = document.getElementById("randomData");
    randomDataElement.textContent = `Data Acak: ${randomData}`;
    randomDataElement.style.display = "block"; // Tampilkan elemen
  } else {
    alert("Daftar kosong!");
  }
}
