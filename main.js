document.getElementById("submit").addEventListener("click",function() {
    let name = document.getElementById("name").value;
    console.log(name);
    localStorage.setItem("Username",name);
    event.preventDefault(); // ป้องกันการโหลดหน้าซ้ำ
    window.location.href = "index2.html"; // เปลี่ยนหน้าไปที่หน้าใหม่
});

