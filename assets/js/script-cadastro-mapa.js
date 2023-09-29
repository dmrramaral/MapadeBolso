


let clickIa = document.querySelector('#ia');

clickIa.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key == "Enter") {
        const textoDeEntrada = document.querySelector('#ia').value;

        const OPEN_AI = "sk-"     
        


        fetch(  "https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

                Authorization: "Bearer " + OPEN_AI,
            },
            body: JSON.stringify({
                model: "text-davinci-001",   
                prompt: textoDeEntrada,
                max_tokens: 200,
                temperature: 0.5,
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
