document.querySelectorAll('.poll-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const pollId = this.getAttribute('data-poll-id');
        const choice = this.querySelector('input[name^="vote"]:checked');

        if (!choice) {
            alert("برائے مہربانی ایک آپشن منتخب کریں!");
            return;
        }

        const resultElement = document.getElementById(`result${pollId.slice(-1)}`);
        resultElement.textContent = "آپ کا ووٹ شکریہ!";
    });
});
