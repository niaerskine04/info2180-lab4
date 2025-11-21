document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('searchBtn');
    const resultDiv = document.getElementById('result');
    const inputField = document.getElementById('searchField');

    button.addEventListener('click', function() {
        let query = inputField.value.trim();
        query = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const XRequest = new XMLHttpRequest();
        let url = 'superheroes.php';

        if (query !== "") {
            url += '?query=' + encodeURIComponent(query);
        }

        XRequest.open('GET', url, true);

        XRequest.onload = function() {
            if (XRequest.status === 200) {
                const response = XRequest.responseText.trim();

                if (query === "") {
                    resultDiv.innerHTML = `<p>${response}</p>`;
                    return;
                }

                if (response.includes("<h3>")) {
                    resultDiv.innerHTML = response;
                } else {
                    resultDiv.innerHTML = `<p>Superhero not found</p>`;
                }

            } else {
                resultDiv.innerHTML = `<p>Error: ${XRequest.status}</p>`;
            }
        };

        XRequest.send();
    });
});
