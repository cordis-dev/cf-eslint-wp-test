function f1() {
	window.getSelection().getRangeAt( 0 );
}

function f2() {
	const selection = window.getSelection();
	const range = selection.rangeCount ? selection.getRangeAt( 0 ) : null;
}
