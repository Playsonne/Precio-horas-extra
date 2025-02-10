function calcularPago() {
    let Hn = parseFloat(document.getElementById("horasNormales").value);
    let Hs = parseFloat(document.getElementById("horasSabado").value);
    let Hno = parseFloat(document.getElementById("horasNocturnas").value);
    let S = parseFloat(document.getElementById("salarioTotal").value);
    let incrementoPs = parseFloat(document.getElementById("incrementoPs").value);
    let incrementoPno = parseFloat(document.getElementById("incrementoPno").value);

    if (isNaN(Hn) || isNaN(Hs) || isNaN(Hno) || isNaN(S) || isNaN(incrementoPs) || isNaN(incrementoPno) || Hn < 0 || Hs < 0 || Hno < 0) {
        document.getElementById("resultado").innerHTML = "<span style='color: red; font-weight: bold;'>Por favor, introduce valores válidos.</span>";
        return;
    }

    // Aplicamos la fórmula
    let Pn = (S - Hs - (Hno * 2)) / (Hn + Hs + Hno);
    let Ps = Pn + incrementoPs;
    let Pno = Pn + incrementoPno;

    document.getElementById("resultado").innerHTML = 
        `<div style='background: #28a745; color: white; padding: 10px; border-radius: 5px; font-size: 18px;'>
            Precio hora extra normal (Pₙ): <strong>${Pn.toFixed(2)} €</strong><br>
            Precio hora extra sábado (Pₛ): <strong>${Ps.toFixed(2)} €</strong><br>
            Precio hora extra nocturna (Pₙₒ): <strong>${Pno.toFixed(2)} €</strong>
         </div>
         <p style='margin-top: 10px; font-size: 14px; font-style: italic; color: #555;'>by Playsonne</p>`;
}
