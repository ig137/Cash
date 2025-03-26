// Poll System
document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const choice = document.querySelector('input[name="vote"]:checked');
    if (choice) {
        document.getElementById('pollResult').textContent = "آپ کا ووٹ شکریہ!";
    } else {
        alert("برائے مہربانی ایک آپشن منتخب کریں!");
    }
});

// CNIC Validation
document.getElementById('cnicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cnicInput = document.getElementById('cnicInput').value.trim();
    const cnicError = document.getElementById('cnicError');

    // CNIC format validation (00000-0000000-0)
    const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;

    if (!cnicPattern.test(cnicInput)) {
        cnicError.textContent = 'برائے مہربانی درست فارمیٹ میں شناختی کارڈ نمبر درج کریں: 00000-0000000-0';
        return;
    }

    cnicError.textContent = '';
    alert('شناختی کارڈ نمبر کامیابی سے جمع ہو گیا: ' + cnicInput);
});
