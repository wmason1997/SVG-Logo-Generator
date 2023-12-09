function generateLogoCode() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    // inside here is where the class specific stuff (triangle, square, or circle) has to happen

    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${desiredColorOfText}>SVG</text>

    </svg>`;
}