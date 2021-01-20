const tabItems = document.querySelectorAll('.tab__item');
const tabContentItems = document.querySelectorAll('.tab_content_item');

function selectItem(e) {
    removeBorder();
    removeShow();

    this.classList.add('tab__border');

    const tabItem = document.querySelector(`#${this.id}__content`);
    tabItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab__border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click', selectItem));