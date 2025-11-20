document.getElementById("botao").addEventListener("click", function () {

    let pontos = 0;
    let total = 10;

    const respostasCorretas = {
        q1: "1",
        q2: "4",
        q3: "8",
        q4: "13",
        q5: "18",
        q6: "21",
        q7: "26",
        q8: "29",
        q9: "34",
        q10: "37",
    };

    const perguntas = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
    let todasRespondidas = true;

    document.querySelectorAll("label").forEach((lbl) => {
        lbl.classList.remove("text-success", "text-danger", "fw-bold");
    });

    perguntas.forEach((q) => {

        const selecionada = document.querySelector(`input[name="${q}"]:checked`);

        if (!selecionada) {
            todasRespondidas = false;
            return;
        }

        const label = selecionada.nextElementSibling;

        if (selecionada.value === respostasCorretas[q]) {
            pontos++;
            label.classList.add("text-success", "fw-bold");
        } else {
            label.classList.add("text-danger", "fw-bold");
        }
    });

    const resultadoDiv = document.getElementById("resultado");

    if (!todasRespondidas) {
        resultadoDiv.className = "alert alert-warning";
        resultadoDiv.innerHTML = "Atenção! Responda todas as perguntas antes de enviar.";
        resultadoDiv.classList.remove("d-none");
        return;
    }

    resultadoDiv.classList.remove("d-none");

    if (pontos === total) {
        resultadoDiv.className = "alert alert-success";
        resultadoDiv.innerHTML = `Parabéns! Você acertou <strong>${pontos}</strong> de <strong>${total}</strong> perguntas!`;
    } else {
        resultadoDiv.className = "alert alert-info";
        resultadoDiv.innerHTML = `Você fez <strong>${pontos}</strong> de <strong>${total}</strong> pontos.`;
    }
});