function checkOrientation() {
    const rotateMessage = document.getElementById('rotate-message');
    const buttons = document.querySelectorAll('.button');
    if (window.innerHeight > window.innerWidth) {
        rotateMessage.classList.add('active');
        buttons.forEach(button => button.style.display = 'none'); // ซ่อนปุ่มเมื่ออยู่ในแนวตั้ง
        document.body.style.backgroundColor = "#000";
        document.body.style.backgroundImage = "none";
    } else {
        rotateMessage.classList.remove('active');
        buttons.forEach(button => button.style.display = 'flex'); // แสดงปุ่มเมื่ออยู่ในแนวนอน
        document.body.style.backgroundColor = "#fff";
        document.body.style.backgroundImage = "url('intro.jpg')";
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);


