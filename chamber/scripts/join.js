// WDD 231 - Chamber Join Page

document.addEventListener("DOMContentLoaded", () => {

    // Hidden timestamp required by rubric
    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Close dialogs when clicking outside
    const dialogs = document.querySelectorAll("dialog");

    dialogs.forEach(dialog => {

        dialog.addEventListener("click", (event) => {

            const rect = dialog.getBoundingClientRect();

            const clickedInside =
                rect.top <= event.clientY &&
                event.clientY <= rect.bottom &&
                rect.left <= event.clientX &&
                event.clientX <= rect.right;

            if (!clickedInside) {
                dialog.close();
            }

        });

    });

});