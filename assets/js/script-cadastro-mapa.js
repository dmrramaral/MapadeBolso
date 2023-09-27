require('dotenv').config();


let clickIa = document.querySelector('#ia');

clickIa.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key == "Enter") {
        const textoDeEntrada = document.querySelector('#ia').value;
        const chatGptKey = process.env.CHAT_GPT_KEY;
        
        

        fetch("https://api.openai.com/v1/chat/completions",{
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + chatGptKey,
            },
            body: JSON.stringify({
                model: "code-davinci-edit-001",
                messages: [{"role": "user", "content": "Say this is a test!"}],
                prompt: textoDeEntrada,
                max_tokens: 2048,
                temperature: 0.9,
              
            }),

        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.error?.message){
                document.querySelector('#descricao').value = data.error.message;
                return;

            }else if(data.choices?.[0].text){
                var texto = data.choices[0].text || "Sem resposta";

                document.querySelector('#descricao').value += "Chat GPT " + texto;
                
            }
            const textoDeSaida = data.choices[0].text;
            document.querySelector('#ia').value = textoDeSaida;
        })
    
    }    
});
