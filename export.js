function getAllCookies() {
    chrome.cookies.getAll({}, function(cookies) {
        const formattedCookies = cookies.map(cookie => ({
            name: cookie.name,
            value: cookie.value,
            domain: cookie.domain,
            path: cookie.path,
            expirationDate: cookie.expirationDate,
            httpOnly: cookie.httpOnly,
            secure: cookie.secure,
            sameSite: cookie.sameSite
        }));

        const json = JSON.stringify(formattedCookies, null, 2);
        copyToClipboard(json);
        alert('Cookies copied to clipboard');
    });
}

function copyToClipboard(content) {
    navigator.clipboard.writeText(content).then(() => {
        console.log('Copied to clipboard');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

document.getElementById('copyJson').addEventListener('click', getAllCookies);
