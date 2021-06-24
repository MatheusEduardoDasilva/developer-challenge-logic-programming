function showMultiples() {
    for (i = 1; i <= 100; i++) {
        let result = "";

        if (i % 3 === 0) {
            result = "Uni";
        }
        if (i % 5 === 0) {
            result = result + "verso";
        }

        console.log(result || i);
    }
}

showMultiples();