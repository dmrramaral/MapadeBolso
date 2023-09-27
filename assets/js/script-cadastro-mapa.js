let clickIa = document.querySelector('#ia');

clickIa.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key == "Enter") {
        const textoDeEntrada = document.querySelector('#ia').value;
        const OPEN_AI = "";

        fetch(  "https://api.openai.com/v1/chat/gpt-3.5-turbo/completions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + OPEN_AI,
            },
            body: JSON.stringify({
                prompt: textoDeEntrada,
                max_tokens: 150,
                
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error?.message) {
                    document.querySelector('#descricao').value = data.error.message;
                    return;
                } else if (data.choices?.[0].text) {
                    console.log(data);
                    const texto = data.choices[0].text;
                    document.querySelector('#descricao').value = texto.replace(/\n\n/g, "");
                }
           
            });
    }
});
