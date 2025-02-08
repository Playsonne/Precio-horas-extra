function calcularPago() {
    let Hn = parseFloat(document.getElementById("horasNormales").value);
    let Hs = parseFloat(document.getElementById("horasSabado").value);
    let Hno = parseFloat(document.getElementById("horasNocturnas").value);
    let S = parseFloat(document.getElementById("salarioTotal").value);

    if (isNaN(Hn) || isNaN(Hs) || isNaN(Hno) || isNaN(S) || Hn < 0 || Hs < 0 || Hno < 0) {
        document.getElementById("resultado").innerHTML = "<span style='color: red; font-weight: bold;'>Por favor, introduce valores válidos.</span>";
        return;
    }

    // Aplicamos la fórmula
    let Pn = (S - Hs - (Hno * 2)) / (Hn + Hs + Hno);
    let Ps = Pn + 1;
    let Pno = Pn + 2;

    document.getElementById("resultado").innerHTML = 
        `<div style='background: #28a745; color: white; padding: 10px; border-radius: 5px; font-size: 18px;'>
            Pago por hora extra normal(Pₙ): <strong>€${Pn.toFixed(2)}</strong><br>
            Pago por hora extra sábado(Pₛ): <strong>€${Ps.toFixed(2)}</strong><br>
            Pago por hora extra nocturna(Pₙₒ): <strong>€${Pno.toFixed(2)}</strong>
         </div>
         <p style='margin-top: 10px; font-size: 14px; font-style: italic; color: #555;'>by Playsonne</p>`;
}
