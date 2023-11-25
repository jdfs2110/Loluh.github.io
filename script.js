document.addEventListener('DOMContentLoaded', function () {
    const swup = new Swup();

    document.addEventListener('swup:popstate', function () {
        location.reload();
    });
});A