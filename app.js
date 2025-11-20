document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('searchBtn');
    button.addEventListener('click', function() {
        const XRequest = new XMLHttpRequest();
        XRequest.open('GET', 'superheroes.php', true);
        XRequest.onload = function() {
            if (XRequest.status === 200) {
                alert(XRequest.responseText);
            } else {
                alert('Request failed.  Returned status of ' + XRequest.status);
            }
        };
        XRequest.send();
    });
});