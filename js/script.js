document.body.oncontextmenu = () => { return false };
document.onkeydown = (e) => {
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		return false;
	}
}
