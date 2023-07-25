function pickRandomValue() {
            var valuesInput = document.getElementById("values");
            var valuesArray = valuesInput.value.split(", ");
            var randomIndex = Math.floor(Math.random() * valuesArray.length);
            var randomValue = valuesArray[randomIndex];
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "Selected value: " + randomValue;
        }