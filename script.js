// القائمة المتنقلة
const menuToggle = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// نسخ رابط الإحالة
function copyReferralLink() {
    const linkText = document.getElementById('referralLink').innerText;
    navigator.clipboard.writeText(linkText).then(() => {
        alert('تم نسخ رابط الإحالة بنجاح!');
    }).catch(() => {
        alert('حدث خطأ، حاول نسخ الرابط يدوياً.');
    });
}

// إضافة تأثيرات تمرير سلسة للروابط الداخلية
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            // إغلاق القائمة المتنقلة إذا كانت مفتوحة
            if (mobileNav && mobileNav.style.display === 'flex') {
                mobileNav.style.display = 'none';
            }
        }
    });
});
