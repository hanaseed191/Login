const passwordInput = document.querySelector(".pass-field input"),
eyeIcon = document.querySelector(".pass-field i"),
requirementsList = document.querySelectorAll(".requirement-list li");

//สร้าง index สำหรับ list item ที่แสดงเงื่อนไขรหัสผ่าน
const requirements = [
    {regex : /.{8,}/, index : 0},
    {regex : /[A-Z]/, index : 1},
    {regex : /[a-z]/, index : 2},
    {regex : /[0-9]/, index : 3},
    {regex : /[^A-Za-z0-9]/, index : 4},
]
passwordInput.addEventListener("keyup", (e) =>{
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value); //ตรวจสอบว่ารหัสผ่านตรงตามเงื่อนไขหรือไม่
        const requirementsItem = requirementsList[item.index]; //// ตัวแปรสำหรับเลือก list item ที่ต้องการจะแสดงผล
        if(isValid) {  //// แสดงเครื่องหมายถูกเมื่อรหัสผ่านผ่านเงื่อนไข
            requirementsItem.firstElementChild.className = "fa-solid fa-check";
            requirementsItem.classList.add("valid");
        } else {
            requirementsItem.firstElementChild.className = "fa-solid fa-circle";
            requirementsItem.classList.remove("valid");
        }
    });
});

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password"; //"password" เป็น "text" หรือจาก "text" เป็น "password"
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`; //เปลี่ยน icon
});

registerBtn.addEventListener("click", (e) => {
    const registerBtn = document.querySelector("button"),
    form = document.querySelector("form");
    e.preventDefault(); // ปิดการทำงานของฟอร์มเมื่อกดปุ่ม Register
    
    // ตรวจสอบว่ามี list item ที่ไม่ผ่านเงื่อนไขหรือไม่
    const invalidRequirement = document.querySelector(".requirement-list li:not(.valid)");
    
    if (passwordInput.value.length < 8 || invalidRequirement) {
        alert("Invalid password!"); // แสดงข้อความเมื่อรหัสผ่านไม่ผ่านเงื่อนไข
        return;
    } else {
        // ส่งข้อมูลไปยังหน้า show.php
        form.submit();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}