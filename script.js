const icon = document.getElementById('icon')
const container = document.querySelector('.container')


icon.addEventListener('click',()=>{
        icon.classList.toggle("fa-moon");
        container.classList.toggle('dark')
        icon.classList.toggle('active')
})


// VOICE ASSISTANT CONTROL 
const btn = document.getElementById('mic')
const content = document.querySelector('.text')


function speak(sentence)
{
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.rate=1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe()
{
    var day =new Date();
    var hr =day.getHours();

    if(hr >= 0 && hr< 12)
    {  speak("Good Morning Sir");  }
    else if(hr == 12)
    { speak("Good Noon Sir"); }
    else if(hr > 12 && hr <= 17)
    { speak("Good AfterNoon Sir"); }
     else 
     { speak("Good Evening Sir");}
}

window.addEventListener('load',()=>{
    speak("Welcome Back Sir");
    speak("i am jarvis")
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) =>{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click',()=>{
    recognition.start();
})

function speakThis(message)
{
    const speech = new SpeechSynthesisUtterance();

    speech.text="I did not Understand What you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }
    else if(message.includes('hello jarvis')) {
        const finalText ="hello Boss";
        speech.text=finalText;
    }
    else if(message.includes('who is your boss')) {
        const finalText ="my boss is akash";
        speech.text=finalText;
    }
    else if(message.includes('what is your programming language')) {
        const finalText ="my programming language is javascript";
        speech.text=finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine Boss tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My Name is Jarvis ";
        speech.text= finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com","_blank");
        const finalText = "Opening Google ";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com","_blank");
        const finalText = "Opening instagram ";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://youtube.com","_blank");
        const finalText = "Opening youtube ";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('what is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");
        const finalText = "This is what i found on internet regarding "+ message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined,{hour: "numeric", minute : "numeric"});
        const finalText =time;
        speech.text =finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined,{month: "short", day : "numeric"});
        const finalText =date;
        speech.text =finalText;
    }

    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank");
        const question ="finding"+`${message.replace(" "," ")}`;
        console.log(question);
        const finalText = question;
        speech.text=finalText;
    }


    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);

}
