/**
 * dcate
 * A list consisting of elements of A followed by the
 * elements of B. May modify items of A.
 * Don't use 'new'
 * @param {List} A
 * @param {List} B
 * @returns {List}
 */
function dcate(A, B) {
	/** Fill in here **/
	let p = A
	while (p.tail) {
		if(p.tail){
			p = p.tail
		}
	}
	p.tail = B
	return A
}

/**
 * sub
 * The sublist consisting of LEN items from list L,
 * beginning with item #START (where the first item is #0).
 * Does not modify the original list elements.
 * it is an error if the desired items don't exist.
 * @param {List} L
 * @param {Number} start
 * @param {Number} len
 * @returns {List}
 */
function sub(L, start, len) {
	/** Fill in here **/
	const arr = [];
	let p = L;
	let i = 0;
	while (p && i <= start + len - 1) {
		if (i >= start) {
			arr.push(p.head);
		}
		p = p.tail;
		i++;
	}
	return new List.list(arr);
}
