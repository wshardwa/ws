        (function() {
            const MagicWordForm = {
                expectedWords: [],

                init: function() {
                    const form = document.querySelector("form");
                    const inputField = document.getElementById("inputField");
                    const messageElement = document.getElementById("message");

                    fetch("https://raw.githubusercontent.com/wshardwa/ws/main/serial.txt")
                        .then(response => response.text())
                        .then(data => {
                            MagicWordForm.expectedWords = data.split("\n").map(word => word.trim().toLowerCase());
                        })
                        .catch(error => {
                            console.error("Error fetching expectedWords:", error);
                        });

                    form.addEventListener("submit", function(event) {
                        event.preventDefault();

                        const inputValue = inputField.value.trim().toLowerCase();

                        if (MagicWordForm.expectedWords.includes(inputValue)) {
                            window.location.href = form.action;
                        } else {
                            messageElement.textContent = "Oops, that's not a magic word. Please try again.";
                            messageElement.style.color = "red";
                            messageElement.style.display = "block";
                        }
                    });
                }
            };

            document.addEventListener("DOMContentLoaded", function() {
                MagicWordForm.init();
            });
        })();
