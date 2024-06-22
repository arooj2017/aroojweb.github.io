function showNavigator() {
    const info = `
        <h2>Navigator Information</h2>
        <p>appName: ${navigator.appName}</p>
        <p>product: ${navigator.product}</p>
        <p>appVersion: ${navigator.appVersion}</p>
        <p>userAgent: ${navigator.userAgent}</p>
        <p>platform: ${navigator.platform}</p>
        <p>language: ${navigator.language}</p>
    `;
    document.getElementById('info').innerHTML = info;
}

function showWindow() {
    const info = `
        <h2>Window Information</h2>
        <p>innerHeight: ${window.innerHeight}</p>
        <p>innerWidth: ${window.innerWidth}</p>
    `;
    document.getElementById('info').innerHTML = info;
}

function showScreen() {
    const info = `
        <h2>Screen Information</h2>
        <p>width: ${screen.width}</p>
        <p>height: ${screen.height}</p>
        <p>availWidth: ${screen.availWidth}</p>
        <p>availHeight: ${screen.availHeight}</p>
        <p>colorDepth: ${screen.colorDepth}</p>
        <p>pixelDepth: ${screen.pixelDepth}</p>
    `;
    document.getElementById('info').innerHTML = info;
}

function showLocation() {
    const info = `
        <h2>Location Information</h2>
        <p>href: ${location.href}</p>
        <p>hostname: ${location.hostname}</p>
        <p>pathname: ${location.pathname}</p>
        <p>protocol: ${location.protocol}</p>
    `;
    document.getElementById('info').innerHTML = info;
}

function showGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const info = `
                <h2>Geolocation Information</h2>
                <p>Latitude: ${position.coords.latitude}</p>
                <p>Longitude: ${position.coords.longitude}</p>
            `;
            document.getElementById('info').innerHTML = info;
        });
    } else {
        document.getElementById('info').innerHTML = "<p>Geolocation is not supported by this browser.</p>";
    }
}