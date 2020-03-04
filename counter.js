window.onload = () => {
    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach(c => {
        const startValue = parseInt(c.dataset.counterStart) || 0;
        const endValue = parseInt(c.dataset.counterTarget);
        const prependText = c.dataset.counterPrepend || '';
        const appendText = c.dataset.counterAppend || '';
        const time = parseInt(c.dataset.counterTime);

        const step = (endValue - startValue) / time * 10;
        let actual = startValue;

        const inter = setInterval(() => {
            if (actual > endValue) {
                actual = endValue;
                clearInterval(inter);
            }
            c.innerHTML = prependText + actual.toFixed(0) + appendText;
            actual += step;
        }, 10);
    });
}