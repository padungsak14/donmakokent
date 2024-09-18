const conmain = document.getElementById('conmain');
const tbody = conmain.querySelector('#tbody');
const btnSubmit = conmain.querySelector('#btn-submit');

document.addEventListener('DOMContentLoaded' ,async function() {
    const response = await fetch('navbar.html');
    if (response.ok) {
        const data = await response.text();
        document.getElementById('conNavbar').innerHTML = data;
    }
})


conmain.addEventListener('click' ,function(e) {
    const icon_add = e.target.closest('#icon_add');
    const icon_del = e.target.closest('#icon_del');
    if (icon_add) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        let icon_add_new = document.createElement('i');
        icon_add_new.id = 'icon_add';
        icon_add_new.className = 'fa-solid fa-plus icon-add';

        let edttype_new = document.createElement('input');
        edttype_new.id = 'edttype';
        edttype_new.type = 'text';
        edttype_new.className = 'edtname';
        edttype_new.placeholder = 'ระบุสถานะ เช่น ประธาน';

        let edtname_new = document.createElement('input');
        edtname_new.id = 'edtname';
        edtname_new.type = 'text';
        edtname_new.className = 'edtname';
        edtname_new.placeholder = 'ระบุชื่อ - นามสกุล';

        let icon_del_new = document.createElement('i');
        icon_del_new.id = 'icon_del';
        icon_del_new.className = 'fa-solid fa-trash-can icon-del';

        td1.appendChild(icon_add_new);
        td2.appendChild(edttype_new);
        td3.appendChild(edtname_new);
        td4.appendChild(icon_del_new);

        tr.append(td1 ,td2 ,td3 ,td4);
        
        tbody.append(tr);
    }

    if (icon_del) {
        icon_del.closest('tr').remove();
    }
})

btnSubmit.addEventListener('click' ,function(e) {
    const table = document.getElementById('contable');
    if (table) {
        const xtypes = table.querySelectorAll('#edttype');
        const xnames = table.querySelectorAll('#edtname');
        const xarray = [];
        xnames.forEach((xname ,index) => {

            if (xname.value !== '') {
                const xtype = xtypes[index]
                xarray.push({"type": xtype.value ,"name": xname.value});
            }
        })
        if (xarray && xarray.length > 0) {
            sessionStorage.setItem('xarray' ,JSON.stringify(xarray));
            window.location.href = 'show.html';
        }
        else {
            alert('กรุณาระบุชื่อ - นามสกุลให้เรียบร้อย!');
        }
    }
})
