// Tempat tampal LOGIK Bar Gap anda.
// Anda boleh gunakan data dari window.BAR_GAP_DATA dan render ke elemen dengan id "barGapRoot".

(function(){
	function renderBarGap(){
		const root = document.getElementById('barGapRoot');
		if(!root) return; // halaman belum sediakan bekas
		const data = (window.BAR_GAP_DATA || []);
		if(!Array.isArray(data) || data.length===0){
			root.innerHTML = '<div class="muted">— Tiada data Bar Gap —</div>';
			return;
		}
		// Contoh ringkas render: jadual kecil. Ganti dengan chart sebenar anda.
		let html = '<table class="table-simple"><thead><tr><th>Label</th><th>Nilai</th></tr></thead><tbody>';
		data.forEach(row=>{
			const label = row.label ?? '';
			const value = row.value ?? 0;
			html += `<tr><td>${label}</td><td>${value}</td></tr>`;
		});
		html += '</tbody></table>';
		root.innerHTML = html;
	}

	// Cuba render selepas DOM sedia
	if(document.readyState === 'loading'){
		document.addEventListener('DOMContentLoaded', renderBarGap);
	} else {
		// Delay sedikit supaya initializeApp() selesai
		setTimeout(renderBarGap, 0);
	}

	// Dedahkan API mudah jika anda mahu panggil semula selepas tukar data
	window.renderBarGap = renderBarGap;
})();
