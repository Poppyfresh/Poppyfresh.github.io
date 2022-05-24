var open = false



function openNav() {
  if (open) {
    console.log('I opened the close menu');
    var menuBox = document.getElementById('linkMenu')
    menuBox.style.display = 'none';
    open = false
  }
  else {
    console.log('I opened the menu');
    var menuBox = document.getElementById('linkMenu')
    menuBox.style.display = 'Block';
    open = true
  }
}
