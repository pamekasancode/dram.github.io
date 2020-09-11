function playCom() {
	window.addEventListener("keydown", function(e) {
		const audio = document.querySelector(`audio[data-target="${e.keyCode}"]`);
		const button = document.querySelector(`button[data-code="${e.keyCode}"]`);
		if(!audio)return;
		audio.currentTime = 0;
		audio.play()
		button.classList.add("active");
		setTimeout(function() {
			button.classList.remove("active")
		}, 100)
			
	})
}

function playMobile() {
	const button = document.querySelectorAll("#drum");
	button.forEach(function(codes) {
		codes.addEventListener("click", function() {
			const code = this.dataset.code;
			const btn = document.querySelector(`button[data-code="${code}"]`);
			const audio = document.querySelector(`audio[data-target="${code}"]`);
			if(!audio) return;
			audio.currentTime = 0;
			audio.play();
			btn.classList.add("active");
			setTimeout(function() {
				btn.classList.remove("active");
			}, 100)
		})
	})	
		
}

playMobile();
playCom();

function modal() {
	const modalBtn = document.querySelectorAll("#modalBtn");
	modalBtn.forEach(function(btn) {
		btn.addEventListener("click", function(e) {
			const target = this.dataset.target;
			var modal = document.querySelector(`.${target}`);
			modal.style.display = "block";
			const closeModal = document.querySelectorAll(".closeModal");
			closeModal.forEach(function(close) {
				close.addEventListener("click", function() {
					modal.style.display = "none";
				})
			})
		})
	})
}
modal();

const music = document.getElementById("mymusic");
function play(e) {
	const file = this.files[0];
	const src = URL.createObjectURL(file);
	const audio = new Audio(src);
	audio.play()
	audio.volume = 0.8;

}

const input = document.querySelector("input");
input.addEventListener("change", play, false);