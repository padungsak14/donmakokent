const xarraystr = sessionStorage.getItem('xarray');
let xarray = [];
if (xarraystr) {
    xarray = JSON.parse(sessionStorage.getItem('xarray'));
    console.log(xarray);
}
else {
    console.log('not data ',xarraystr);
}

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('navbar.html');
    if (response.ok) {
        const data = await response.text();
        document.getElementById('conNavbar').innerHTML = data; 
    }


    const conMain = document.getElementById('conMain');
    xarray.forEach(row => {

        let conName = document.createElement('div');
        conName.className = 'conName';

        let edtname = document.createElement('input'); 
        edtname.type = 'text';
        edtname.id = 'edtname';
        edtname.value = row.name;
        edtname.className = 'edtname';
        edtname.readOnly = true;

        let edttype = document.createElement('input'); 
        edttype.type = 'text';
        edttype.id = 'edttype';
        edttype.value = row.type;
        edttype.className = 'edttype';
        edttype.readOnly = true;

        conName.append(edtname ,edttype);
        conMain.appendChild(conName);
    });

    const icon_exit = document.getElementById('icon-exit');
    if (icon_exit) {
        icon_exit.addEventListener('click' ,function() {
            window.location.href = 'index.html';
        })
    }
   
})

// function autoScroll() {
//     let scrollSpeed = 3; // กำหนดค่าความช้าที่ต้องการ (ยิ่งค่าสูงยิ่งช้า)
//     let frameCounter = 0;

//     // ตรวจสอบค่าของความสูง
//     function scrollStep() {
//         frameCounter++;
//         if (frameCounter >= scrollSpeed) {
//             window.scrollBy(0, 1); // เลื่อน 1 พิกเซล
//             frameCounter = 0; // รีเซ็ตตัวนับเฟรม
//         }
//         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight +160) {
//             window.scrollTo(0, 0); // กลับไปจุดเริ่มต้น
//         }
//         requestAnimationFrame(scrollStep);
//     }

//     requestAnimationFrame(scrollStep);
// }

// // เริ่มการเลื่อนเมื่อโหลดหน้าเว็บเสร็จสมบูรณ์
// window.onload = function () {
//     console.log('a');
//     setTimeout(() => {
//         // ตรวจสอบว่ามี scrollbar หรือไม่
//         console.log(document.documentElement.scrollHeight);
//         console.log(window.innerHeight)
//         if (document.documentElement.scrollHeight > window.innerHeight) {
//             autoScroll(); // เรียกใช้ฟังก์ชัน autoScroll เมื่อมี scrollbar
//         } else {
//             console.log("ไม่มี scrollbar, ฟังก์ชัน autoScroll จะไม่ทำงาน");
//         }
//     }, 100); // เพิ่มดีเลย์เล็กน้อยเพื่อให้แน่ใจว่าเนื้อหาทั้งหมดโหลดเสร็จแล้ว
// };

function autoScroll() {
    let scrollSpeed = 3; // กำหนดค่าความช้าที่ต้องการ (ยิ่งค่าสูงยิ่งช้า)
    let frameCounter = 0;

    function scrollStep() {
        frameCounter++;
        if (frameCounter >= scrollSpeed) {
            window.scrollBy(0, 1); // เลื่อน 1 พิกเซล
            frameCounter = 0; // รีเซ็ตตัวนับเฟรม
            // console.log("เลื่อน 1 พิกเซล"); // ตรวจสอบว่ามีการเลื่อนจริง
        }

        // console.log("Inner Height + ScrollY:", window.innerHeight + window.scrollY);
        // console.log("Document Body OffsetHeight:", document.body.offsetHeight + 160);

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // console.log("เลื่อนถึงจุดสิ้นสุด, กลับไปจุดเริ่มต้น");
            window.scrollTo(0, 0); // กลับไปจุดเริ่มต้น
        }
        requestAnimationFrame(scrollStep);
    }
    requestAnimationFrame(scrollStep);
}

// เริ่มการเลื่อนเมื่อโหลดหน้าเว็บเสร็จสมบูรณ์
window.onload = function () {
    // console.log('หน้าเว็บโหลดเสร็จ');
    setTimeout(() => {
        console.log("Scroll Height:", document.documentElement.scrollHeight);
        console.log("Window Inner Height:", window.innerHeight);

        if (document.documentElement.scrollHeight > window.innerHeight) {
            // console.log("มี scrollbar, เรียก autoScroll()");
            autoScroll(); // เรียกใช้ฟังก์ชัน autoScroll เมื่อมี scrollbar
        } else {
            // console.log("ไม่มี scrollbar, ฟังก์ชัน autoScroll จะไม่ทำงาน");
        }
    }, 100);
};


