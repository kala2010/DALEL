// script.js

// عرض قائمة المحافظات عند الضغط على زر "دخول"
function showProvinces() {
    document.getElementById('provinces-list').style.display = 'block';
    document.getElementById('professionals-list').style.display = 'none';
    document.getElementById('titles-list').style.display = 'none';
    document.getElementById('job-details').style.display = 'none';
}

// عرض المهن بناءً على المحافظة المختارة
function showProfessionals(province) {
    document.getElementById('provinces-list').style.display = 'none';
    document.getElementById('professionals-list').style.display = 'block';

    let professionalsContainer = document.getElementById('professionals-container');
    professionalsContainer.innerHTML = '';

    // إضافة 100 زر لمهن مختلفة
    for (let i = 1; i <= 100; i++) {
        let button = document.createElement('button');
        button.classList.add('professional-btn');
        button.textContent = `مهنة ${i} في ${province}`;
        button.onclick = function() {
            showTitles(i, province);
        };
        professionalsContainer.appendChild(button);
    }
}

// عرض عناوين المهن
function showTitles(professionNumber, province) {
    document.getElementById('professionals-list').style.display = 'none';
    document.getElementById('titles-list').style.display = 'block';

    let titlesContainer = document.getElementById('titles-container');
    titlesContainer.innerHTML = '';

    // إضافة 400 زر لعناوين المهن
    for (let i = 1; i <= 400; i++) {
        let button = document.createElement('button');
        button.classList.add('title-btn');
        button.textContent = `عنوان ${i} للمهنة ${professionNumber} في ${province}`;
        button.onclick = function() {
            showJobDetails(i, professionNumber, province);
        };
        titlesContainer.appendChild(button);
    }
}

// عرض تفاصيل المهنة عند النقر على زر عنوان المهنة
function showJobDetails(jobNumber, professionNumber, province) {
    document.getElementById('titles-list').style.display = 'none';
    document.getElementById('job-details').style.display = 'block';
}

// العودة إلى الصفحة الرئيسية
function goBack() {
    document.getElementById('provinces-list').style.display = 'none';
    document.getElementById('professionals-list').style.display = 'none';
    document.getElementById('titles-list').style.display = 'none';
    document.getElementById('job-details').style.display = 'none';
    document.getElementById('provinces-list').style.display = 'block';
}

// العودة إلى قائمة المهن
function goBackToProfessionals() {
    document.getElementById('titles-list').style.display = 'none';
    document.getElementById('professionals-list').style.display = 'block';
}

// حفظ البيانات في Excel
function saveToExcel(data) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'مهنة');
    XLSX.writeFile(workbook, 'مهن_العراق.xlsx');
}

// معالجة نموذج حفظ المهنة
document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // جمع البيانات
    const jobData = {
        jobName: document.getElementById('job-name').value,
        address: document.getElementById('job-address').value,
        email: document.getElementById('email').value,
        tiktok: document.getElementById('tiktok').value,
        facebook: document.getElementById('facebook').value,
        instagram: document.getElementById('instagram').value,
        photos: document.getElementById('photos').files,
        video: document.getElementById('video').files
    };

    // حفظ البيانات في Excel
    saveToExcel([jobData]);

    // إظهار رسالة نجاح
    alert('تم حفظ المهنة بنجاح!');
});
