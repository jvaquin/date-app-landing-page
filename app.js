const banner = document.querySelectorAll('.middle-banner');

window.addEventListener('scroll', checkBanner);

checkBanner();

function checkBanner() {
    const triggerBottom = window.innerHeight / 5 * 4;

    banner.forEach((banner) => {
        const bannerTop = banner.getBoundingClientRect().top;

        if (bannerTop < triggerBottom) {
            banner.classList.add('display');
        }
        else {
            banner.classList.remove('display');
        }
    })
}
const label = document.querySelectorAll('.label');

window.addEventListener('scroll', checkLabel);

checkLabel();

function checkLabel() {
    const triggerBottomLabel = window.innerHeight / 5 * 4;

    label.forEach((label) => {
        const labelTop = label.getBoundingClientRect().top;

        if (labelTop < triggerBottomLabel) {
            label.classList.add('displayY');
        }
        else {
            label.classList.remove('displayY');
        }
    })
}