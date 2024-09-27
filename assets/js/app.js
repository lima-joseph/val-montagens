        const myModal = document.getElementById('abrirmodal')
        const myInput = document.getElementById('myInput')

        myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
        })

       document.getElementById("doForm").addEventListener("click", function () {
           document.getElementById("nome").focus();
       });

       document.getElementById("downloadAp").addEventListener("click", function () {
           const pdfUrl = "https://www.portalsimmons.com.br/source/files/originals/CO_GEOCITIES-3SPAR_EPTIN33-038182.pdf";

           const link = document.createElement("a");
           link.href = pdfUrl;
           link.download = "apresentacao_val_montagens.pdf";

           link.style.display = "none";
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);
       });