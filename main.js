/*jshint esversion: 6 */

//music
const bakeryMusic = new Audio("audio/cafe_music.mp3");

bakeryMusic.loop = true;
bakeryMusic.volume = 0.3;

// start music after the first click
let musicStart = false;

document.addEventListener("click", function () {

    if (!musicStart) {

        bakeryMusic.play();

        musicStart = true;

    }

});

// main page dessert js

const page1btn = document.querySelector("#DMP_b1");
const page2btn = document.querySelector("#DMP_b2");
const page3btn = document.querySelector("#DMP_b3");
const page4btn = document.querySelector("#DMP_b4");
const homeBtn = document.querySelector("#homeBtn");



function showPage(page) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function (p) {
        p.classList.remove("active");
    });

    document.getElementById(page).classList.add("active");
}

homeBtn.addEventListener("click", function () {
    showPage("HomeMP");
});

page1btn.addEventListener("click", function () {
    showPage("TypesMP");
});

page2btn.addEventListener("click", function () {
    showPage("WorldMP");
});

page3btn.addEventListener("click", function () {
    showPage("DecoMP");
});

page4btn.addEventListener("click", function () {
    showPage("GameMP");
});

//ahow the first page when the website loads
showPage("HomeMP");

const title = document.querySelector("#MainTitle");

let x = (window.innerWidth - title.offsetWidth) / 2; // so it starts inthe middle of the screen

function moveTitle(){

    x--; 

    title.style.left = x + "px"; // string concatention

    if(x < -title.offsetWidth){
        x = window.innerWidth;
    }

}

setInterval(moveTitle, 10); // move like a carousell wohoo moves every 10ms

// form data 
const signupForm = document.querySelector("#signupForm");
const formMessage = document.querySelector("#formMessage");
const joinBtn = document.querySelector("#joinBtn");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const dessertInput = document.querySelector("#dessert");

joinBtn.addEventListener("click", function(){

    const name = nameInput.value;
    const dessert = dessertInput.value;

    if(name.trim() === "" || emailInput.value.trim() === ""){
        formMessage.textContent = "Please fill in your name and email!";
        return;
    }

    formMessage.innerHTML =
    "Thank you <strong>" + name +
    "</strong> for joining Sugar Bloom Bakery!<br>" +
    "We hope you enjoy lots of delicious <strong>" +
    dessert + "</strong>! ݁ ˖Ი𐑼ֶָ֢";

    nameInput.value = "";
    emailInput.value = "";
    dessertInput.selectedIndex = 0;

});

// main page text 
const dialogue = [

"Oh! A traveller has arrived! Welcome to Sugar Bloom Bakery! 𝜗𝜚⋆",

"I'm Miss Sugar, the owner of this little bakery",

"There are alot of new things to discover here :) I can't wait to share them with you!",

"Explore the bakery, learn something new, and maybe you will become our next Master Baker!",

"What are you waiting for? Lets go !!"

];

const dialogueText = document.querySelector("#dialogueText");
const nextDialogue = document.querySelector("#nextDialogue");
let currentLine = 0; // keep track which dialgoue we r on
let typing; //used as ref to interval

function typeWriter(text){

    clearInterval(typing); //stop the prev animation

    dialogueText.textContent = "";

    let i = 0;

    typing = setInterval(function(){

        if(i < text.length){

            dialogueText.textContent += text.charAt(i);

            i++; // go to the next line aft done

        }
        else{

            clearInterval(typing);

        }

    },30); // every 30ms

}


nextDialogue.addEventListener("click", function(){

    currentLine++;

    if(currentLine < dialogue.length){

        typeWriter(dialogue[currentLine]);

    }

    else{

        document.querySelector(".dialogueBox").style.display = "none";

    }

});

// Show the first message when the page loads
typeWriter(dialogue[0]);


// types of d js
const dessertMenu = document.querySelector(".dessertMenu");

const dessertInfo = document.querySelector("#dessertInfo");

dessertMenu.addEventListener("click", function(event){

    let button = event.target.closest(".dessertBtn"); //find the button even if got clicked

    if(!button) return; //click wasnt on a dessert button

    let dessert = button.dataset.dessert;

    if(dessert == "cakes"){

            dessertInfo.innerHTML = `
                <h3>Cakes</h3>

                <p>
                Cakes are soft baked desserts made with flour, eggs, sugar and butter.
                They are often served during birthdays, weddings and celebrations.
                Cakes can be decorated with frosting, fruit and chocolate.
                </p>

                <p><strong>Examples:</strong> Chocolate Cake, Cheesecake, Red Velvet Cake</p>
            `;
        }

        else if(dessert == "cookies"){

            dessertInfo.innerHTML = `
                <h3>Cookies</h3>

                <p>
                Cookies are small baked treats that can be crispy or chewy.
                They are often flavoured with chocolate chips, nuts or dried fruit.
                </p>

                <p><strong>Examples:</strong> Chocolate Chip Cookies, Butter Cookies, Macarons</p>
            `;
        }

        else if(dessert == "pastries"){

            dessertInfo.innerHTML = `
                <h3>Pastries</h3>

                <p>
                Pastries are made from layers of dough and butter.
                They have a flaky texture and are enjoyed for breakfast,
                tea time or dessert.
                </p>

                <p><strong>Examples:</strong> Croissant, Danish Pastry, Eclair</p>
            `;
        }

        else if(dessert == "frozen"){

            dessertInfo.innerHTML = `
                <h3>Frozen Desserts</h3>

                <p>
                Frozen desserts are served cold and are perfect on hot days.
                Many are made with milk, fruit or yoghurt.
                </p>

                <p><strong>Examples:</strong> Ice Cream, Gelato, Sorbet</p>
            `;
        }

        else if(dessert == "puddings"){

            dessertInfo.innerHTML = `
                <h3>Puddings</h3>

                <p>
                Puddings are smooth and creamy desserts.
                They can be served warm or chilled and are often toppede
                with caramel, fruit or whipped cream.
                </p>

                <p><strong>Examples:</strong> Creme Brulee, Bread Pudding, Caramel Pudding</p>
            `;
        }

});

// around the world page

const countryMenu = document.querySelector(".countryMenu");
const countryInfo = document.querySelector("#countryInfo");

countryMenu.addEventListener("click", function(event){

    let button = event.target.closest(".countryBtn");

    if(!button) return;

    let country = button.dataset.country;

    if(country == "france"){

            countryInfo.innerHTML = `
                <h3>France - Macarons</h3>

                <p>
                Macarons are colourful sandwich cookies made with almond flour,
                egg whites and a creamy filling. They are known for their crisp
                shell and soft centre.
                </p>

                <p><strong>Fun Fact:</strong> Macarons became popular in France during the 16th century.</p>
            `;
        }

        else if(country == "japan"){

            countryInfo.innerHTML = `
                <h3>Japan - Mochi</h3>

                <p>
                Mochi is a soft, chewy rice cake made from glutinous rice.
                It can be filled with sweet red bean paste, ice cream or fruit.
                </p>

                <p><strong>Fun Fact:</strong> Mochi is traditionally eaten during Japanese New Year celebrations.</p>
            `;
        }

        else if(country == "italy"){

            countryInfo.innerHTML = `
                <h3>Italy - Tiramisu</h3>

                <p>
                Tiramisu is a layered dessert made with coffee-soaked ladyfingers,
                mascarpone cheese and cocoa powder.
                </p>

                <p><strong>Fun Fact:</strong> Tiramisu means "pick me up" in Italian because of the coffee inside.</p>
            `;
        }

        else if(country == "singapore"){

            countryInfo.innerHTML = `
                <h3>Singapore - Ice Kachang</h3>

                <p>
                Ice Kachang is a colourful dessert made with shaved ice,
                sweet syrups, red beans, jelly and corn.
                </p>

                <p><strong>Fun Fact:</strong> It is one of Singapore's favourite desserts on hot days!</p>
            `;
        }

        else if(country == "turkey"){

            countryInfo.innerHTML = `
                <h3>Turkey - Baklava</h3>

                <p>
                Baklava is a rich pastry made from thin layers of filo pastry,
                chopped nuts and sweet honey syrup.
                </p>

                <p><strong>Fun Fact:</strong> Baklava has been enjoyed for hundreds of years across the Middle East and Turkey.</p>
            `;
        }

});


const questions = [

{

	question:"This colourful dessert is made from almond flour and has a crispy shell with a soft filling.",
	answers:["France","Japan","Italy","Singapore"],
	correct:0,
	dessert:"Macarons"

},

{

	question:"This chewy dessert is made from glutinous rice and is often filled with red bean paste.",
	answers:["Turkey","Japan","France","Italy"],
	correct:1,
	dessert:"Mochi"

},

{

	question:"This coffee-flavoured dessert is layered with mascarpone cheese and cocoa powder.",
	answers:["Italy","Singapore","France","Japan"],
	correct:0,
	dessert:"Tiramisu"

},

{

	question:"This dessert is made with shaved ice, colourful syrup, jelly and sweet toppings.",
	answers:["Singapore","France","Turkey","Italy"],
	correct:0,
	dessert:"Ice Kachang"

},

{

	question:"This sweet pastry is made with filo pastry, chopped nuts and honey syrup.",
	answers:["Japan","France","Turkey","Italy"],
	correct:2,
	dessert:"Baklava"

}

];

let currentQuestion = 0;
let quizScore = 0;

const questionTitle = document.querySelector("#questionTitle");
const questionText = document.querySelector("#questionText");
const answerBtns = document.querySelectorAll(".answerBtn");
const result = document.querySelector("#result");
const nextBtn = document.querySelector("#nextQuestion");

function loadQuestion(){

    let q = questions[currentQuestion];

    questionTitle.textContent = "Question " + (currentQuestion+1);

    questionText.textContent = q.question;

    result.textContent="";

    answerBtns.forEach(function(btn,index){

        btn.textContent = q.answers[index];

        btn.disabled = false;

    });

}

const answersBox = document.querySelector(".answers");

answersBox.addEventListener("click", function(event){

    let btn = event.target.closest(".answerBtn");

    if(!btn) return;

    let index = Array.from(answerBtns).indexOf(btn); //work out which answer this was

    let q = questions[currentQuestion];

    if(index==q.correct){

        result.innerHTML="Correct!<br><br><strong>"+q.dessert+"</strong> is the correct answer!";

        quizScore++;

    }

    else{

        result.innerHTML="Oopsies!<br><br>The correct answer was <strong>"+q.answers[q.correct]+"</strong>.<br>This dessert is <strong>"+q.dessert+"</strong>.";

    }

    answerBtns.forEach(function(b){

        b.disabled=true;

    });

});

nextBtn.addEventListener("click",function(){

    currentQuestion++;

    if(currentQuestion<questions.length){

        loadQuestion();

    }

    else{

        questionTitle.textContent="Quiz Complete!";
        questionText.innerHTML="You scored <strong>"+quizScore+" / "+questions.length+"</strong>!";
        result.innerHTML="Thanks for visiting Sugar Bloom Bakery!";
        document.querySelector(".answers").style.display="none";
        nextBtn.style.display="none";

    }

});

loadQuestion();

// deco page


const decoMenu = document.querySelector(".decoMenu");

const studioPicture = document.querySelector("#studioPicture");
const studioTitle = document.querySelector("#studioTitle");
const studioDescription = document.querySelector("#studioDescription");
const studioTip = document.querySelector("#studioTip");

decoMenu.addEventListener("click", function(event){

    let button = event.target.closest(".studioBtn");

    if(!button) return;

    let item = button.dataset.item;

// fruit
        if(item == "fruit"){

            studioPicture.className = "deco-icon deco-strawberry";

            studioTitle.textContent = "Fresh Fruit";

            studioDescription.textContent =
            "Fresh fruit adds bright colours and natural sweetness to cakes, tarts and pastries. Strawberries, blueberries and cherries are some of the most popular decorations because they make desserts look fresh and delicious.";

            studioTip.textContent =
            "Wash and dry fruit before placing it on whipped cream so it stays fresh and doesn't make the frosting watery.";

        }

//flower
        else if(item == "flowers"){

            studioPicture.className = "deco-icon deco-flower";

            studioTitle.textContent = "Edible Flowers";

            studioDescription.textContent =
            "Edible flowers are often used on elegant cakes and cupcakes. They give desserts a soft, delicate appearance and are perfect for weddings, tea parties and spring-themed celebrations.";

            studioTip.textContent =
            "Only use flowers that are safe to eat. Decorative flowers from flower shops should never be placed on desserts.";

        }

//sprinkle

        else if(item == "sprinkles"){

            studioPicture.className = "deco-icon deco-sprinkles";

            studioTitle.textContent = "Sprinkles";

            studioDescription.textContent =
            "Sprinkles add colour, texture and fun to desserts. They are commonly used on cupcakes, donuts, cookies and birthday cakes to make them look cheerful and festive.";

            studioTip.textContent =
            "Add sprinkles before the frosting dries so they stick properly.";

        }

// choco

        else if(item == "chocolate"){

            studioPicture.className = "deco-icon deco-chocolate";

            studioTitle.textContent = "Chocolate Decorations";

            studioDescription.textContent =
            "Chocolate can be drizzled, shaved or moulded into beautiful shapes. Bakers often use chocolate curls, hearts and flakes to make desserts look luxurious.";

            studioTip.textContent =
            "Let melted chocolate cool slightly before decorating so it doesn't slide off the cake.";

        }

// whipped cream

        else if(item == "piping"){

            studioPicture.className = "deco-icon deco-whippedcream";

            studioTitle.textContent = "Piping Cream";

            studioDescription.textContent =
            "Piping uses a piping bag and different nozzles to create beautiful swirls, flowers, shells and borders. It's one of the most important decorating skills for bakers.";

            studioTip.textContent =
            "Practise applying even pressure to the piping bag to create neat, consistent designs.";

        }

});


// game page js



const customers = [

{
    name:"Emily",
    image:"images/pinkie.png",
    order:["strawberry","flower","sprinkles"]
},

{
    name:"Penelope",
    image:"images/seal.png",
    order:["chocolate","cherry"]
},

{
    name:"Miku",
    image:"images/miku.png",
    order:["macaron","sprinkles","flower"]
},

{
    name:"Tsukki",
    image:"images/tsukki.png",
    order:["flower","flower","strawberry"]
},

{
    name:"Lily",
    image:"images/pudding.png",
    order:["blueberry","whippedcream","cherry"]
}

];

let currentCustomer = 0;
let score = 0;

//stores everything the player clicked
let selectedDecorations = [];

const cakeContainer = document.querySelector("#cakeContainer");
const customerImage = document.querySelector("#customerImage");
const customerName = document.querySelector("#customerName");
const customerOrder = document.querySelector("#customerOrder");

const cakeDecorations = document.querySelector("#cakeDecorations");

const decorationMenu = document.querySelector("#decorationMenu");

const resetBtn = document.querySelector("#resetBtn");

    // random point inside an oval on top of the cake
    function getRandomCakePosition(){

    const w = cakeContainer.clientWidth;
    const h = cakeContainer.clientHeight;

    const centerX = w * 0.5;
    const centerY = h * 0.4;

    // random offset from center, kept inside oval-ish bounds
    const offsetX = (Math.random() - 0.5) * w * 0.6;
    const offsetY = (Math.random() - 0.5) * h * 0.25;

    return {
        x: centerX + offsetX,
        y: centerY + offsetY
    };

}

function loadCustomer(){

    customerOrder.innerHTML="";

    customerImage.src = customers[currentCustomer].image;

    customerName.textContent = customers[currentCustomer].name;

    //sow every decoration they want

    customers[currentCustomer].order.forEach(function(item){

        let icon=document.createElement("div");

        icon.classList.add("deco-icon","deco-"+item);


        customerOrder.appendChild(icon);

    });

}

loadCustomer();



decorationMenu.addEventListener("click",function(event){

    let button = event.target.closest(".decoBtn");

    if(!button) return; //click missed the buttons

    let decoration = button.dataset.deco; //save players choice

    selectedDecorations.push(decoration); //create deco

    let deco=document.createElement("div"); //rand position on cake

    deco.classList.add("cakeItem","deco-icon","deco-"+decoration);

    let pos = getRandomCakePosition();

    deco.style.left = (pos.x - 27) + "px"; // -27 = half the 55px icon so its centred on the point
    deco.style.top = (pos.y - 27) + "px";

    cakeDecorations.appendChild(deco);

});


resetBtn.addEventListener("click",function(){

    selectedDecorations=[];

    cakeDecorations.innerHTML="";

});


const serveBtn = document.querySelector("#serveBtn");
const gameMessage = document.querySelector("#gameMessage");
const scoreBoard = document.querySelector("#score");

serveBtn.addEventListener("click",function(){

    //get current customers order
    let correctOrder = customers[currentCustomer].order;

    let playerChoice = [...selectedDecorations].sort();

    let customerChoice = [...correctOrder].sort();

    //assume true first
    let correct = true;

    //checking number of decorations
    if(playerChoice.length != customerChoice.length){

        correct = false;

    }

    else{

        //compare every decoration
        for(let i=0; i<playerChoice.length; i++){

            if(playerChoice[i] != customerChoice[i]){

                correct = false;

            }

        }

    }

		if(correct){

			score += 10;

			scoreBoard.textContent = score;

			gameMessage.innerHTML =
			"<strong>Yahoo!</strong><br>" +
			customers[currentCustomer].name +
			" loves your cake! <3";

			//move to the next customer after 2 seconds
			setTimeout(nextCustomer, 2000);

		}
		else{

			gameMessage.innerHTML =
			"<strong>Oops!</strong><br>" +
			customers[currentCustomer].name +
			" didn't get the cake they ordered...<br><br>" +
			"Please try decorating the cake again";

			//clear the incorrect cake
			selectedDecorations = [];
			cakeDecorations.innerHTML = "";
		}
});

function nextCustomer(){

    currentCustomer++;

    if(currentCustomer >= customers.length){

        customerImage.src="images/master_baker.png";

        customerName.textContent="Congratulations!";

        customerOrder.innerHTML=" You're a master baker!! Wohoo";

        cakeDecorations.innerHTML="";

        gameMessage.innerHTML=
        "Yay!! You served every customer!<br>" +
        "Final Score: <strong>"+score+"</strong><br><br>" +
        "You are officially Sugar Bloom Bakery's Master Baker!";

        serveBtn.disabled=true;

        resetBtn.disabled=true;

        return;

    }

    //clear previous cake

    cakeDecorations.innerHTML="";

    gameMessage.textContent="";

    //load next customer
    loadCustomer();

}

//music stop/play toggle button
const musicBtn = document.querySelector("#musicBtn");

musicBtn.addEventListener("click", function(){

    if(bakeryMusic.paused){

        bakeryMusic.play();

        musicBtn.textContent = "Stop Music";

    }

    else{

        bakeryMusic.pause();

        musicBtn.textContent = "Play Music";

    }

});

//restarts the whole app back to its starting state, no page refresh needed
const restartAppBtn = document.querySelector("#restartAppBtn");

	restartAppBtn.addEventListener("click", function(){

    //back to the first dialogue line
    currentLine = 0;

    document.querySelector(".dialogueBox").style.display = "block";

    typeWriter(dialogue[0]);

    //reset dessert and country info boxes back to their welcome text
    dessertInfo.innerHTML = "<h3>Welcome!</h3><p>Choose a dessert from any country to discover fun facts about it!</p>";

    countryInfo.innerHTML = "<h3>Welcome!</h3><p>Click on a country to discover their special esserts!</p>";

    //reset the decorating studio
    studioPicture.className = "deco-icon deco-default";

    studioTitle.textContent = "Welcome to the Decorating Studio!";

    studioDescription.textContent = "Hello traveller! Decorating desserts is just as important as baking them!! Click one of the decorations above and I'll tell you how master bakers use it!";

    studioTip.textContent = "Beautiful desserts dont need lots of decorations! just the right ones placed with care.";

    //reset the quiz back to question 1
    currentQuestion = 0;

    quizScore = 0;

    document.querySelector(".answers").style.display = "flex";

    nextBtn.style.display = "inline-block";

    loadQuestion();

    //reset the cake game back to the first customer
    currentCustomer = 0;

    score = 0;

    selectedDecorations = [];

    cakeDecorations.innerHTML = "";

    gameMessage.textContent = "";

    scoreBoard.textContent = "0";

    serveBtn.disabled = false;

    resetBtn.disabled = false;

    loadCustomer();

    //clear the signup form too
    signupForm.reset();

    formMessage.textContent = "";

    //send them back to the home page
    showPage("HomeMP");

});