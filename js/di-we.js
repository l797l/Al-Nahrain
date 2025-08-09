let topHome = document.getElementsByClassName("top-home");

window.addEventListener("scroll", () => {


    if (window.scrollY > 100) {
        topHome[0].classList.add("top-homee");
    }
    else {
        topHome[0].classList.remove("top-homee");


    }
})


let topHomePhone = document.getElementsByClassName("top-home-phone");

let boolTOP = true;
function iconHome() {
    if (boolTOP) {
        topHomePhone[0].classList.add("show-top-home-phone");
        boolTOP = false;


    }
    else {
        topHomePhone[0].classList.remove("show-top-home-phone");
        boolTOP = true;
    }


}


window.addEventListener("resize", () => {
    if (window.innerWidth >= 600 && !boolTOP) {
        topHomePhone[0].classList.remove("show-top-home-phone");
        boolTOP = true;

    }
});



window.addEventListener("load", () => {
    let preloader = document.getElementById("preloader");

    preloader.style.display = "none";
})




let boxP = document.getElementsByClassName("box-p");
let boxHr = document.getElementsByClassName("box-hr");
let boxLabel = document.getElementsByClassName("box-label");


window.addEventListener("scroll", () => {
    if (window.innerWidth <= 1000) {

        if (window.scrollY >= 2000.6) {
            boxP[0].classList.add("show-box-p");
            boxLabel[0].classList.add("show-box-label");
            boxHr[0].classList.add("show-box-hr");
            console.log("ff");

        }
        else {
            boxP[0].classList.remove("show-box-p");
            boxLabel[0].classList.remove("show-box-label");
            boxHr[0].classList.remove("show-box-hr");
        }

        if (window.scrollY >= 2600) {
            boxP[1].classList.add("show-box-p");
            boxLabel[1].classList.add("show-box-label");
            boxHr[1].classList.add("show-box-hr");
        }
        else {
            boxP[1].classList.remove("show-box-p");
            boxLabel[1].classList.remove("show-box-label");
            boxHr[1].classList.remove("show-box-hr");
        }

        if (window.scrollY >= 3200) {
            boxP[2].classList.add("show-box-p");
            boxLabel[2].classList.add("show-box-label");
            boxHr[2].classList.add("show-box-hr");
        }
        else {
            boxP[2].classList.remove("show-box-p");
            boxLabel[2].classList.remove("show-box-label");
            boxHr[2].classList.remove("show-box-hr");
        }
    }
    else {
        boxP[2].classList.remove("show-box-p");
        boxLabel[2].classList.remove("show-box-label");
        boxHr[2].classList.remove("show-box-hr");

        boxP[1].classList.remove("show-box-p");
        boxLabel[1].classList.remove("show-box-label");
        boxHr[1].classList.remove("show-box-hr");

        boxP[0].classList.remove("show-box-p");
        boxLabel[0].classList.remove("show-box-label");
        boxHr[0].classList.remove("show-box-hr");

    }

});



let lessons = Array.from(document.getElementsByClassName("lesson"));
let diLes = [true, true, true, true, true, true, true, true, true, true];

let pLess = Array.from(document.getElementsByClassName("p-less"));

let h4Less = Array.from(document.getElementsByClassName("addres-lesson"));



lessons.forEach((lesson, index) => {
    lesson.addEventListener("click", () => {



        let div = Array.from(document.getElementsByClassName("div-p"));


        if (index >= 0 && index < 6) {
            if (diLes[0]) {

                diLes[0] = false;

                for (let i = 0; i < 6; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";

                }

                for (let i = 0; i < 42; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[0] = true;

                for (let i = 0; i < 6; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }
                for (let i = 0; i < 42; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }



            }

        }

        else if (index >= 6 && index < 12) {

            if (diLes[1]) {
                diLes[1] = false;
                for (let i = 6; i < 12; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 42; i < 84; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[1] = true;

                for (let i = 6; i < 12; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 42; i < 84; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }



            }
        }


        else if (index >= 12 && index < 18) {

            if (diLes[2]) {
                diLes[2] = false;
                for (let i = 12; i < 18; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 84; i < 126; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[2] = true;

                for (let i = 12; i < 18; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 84; i < 126; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }

            }
        }


        else if (index >= 18 && index < 24) {

            if (diLes[3]) {
                diLes[3] = false;
                for (let i = 18; i < 24; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 126; i < 168; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[3] = true;

                for (let i = 18; i < 24; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 126; i < 168; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }



            }
        }

        else if (index >= 24 && index < 30) {

            if (diLes[4]) {
                diLes[4] = false;
                for (let i = 24; i < 30; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 168; i < 210; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[4] = true;

                for (let i = 24; i < 30; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 168; i < 210; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }



            }
        }


        else if (index >= 30 && index < 36) {

            if (diLes[5]) {
                diLes[5] = false;
                for (let i = 30; i < 36; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 210; i < 252; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[5] = true;

                for (let i = 30; i < 36; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 168; i < 210; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }



            }
        }

        else if (index >= 36 && index < 42) {

            if (diLes[6]) {
                diLes[6] = false;
                for (let i = 36; i < 42; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 252; i < 294; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[6] = true;

                for (let i = 36; i < 42; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 252; i < 294; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }


            }
        }


        else if (index >= 42 && index < 48) {

            if (diLes[7]) {
                diLes[7] = false;
                for (let i = 42; i < 48; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 294; i < 336; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[7] = true;

                for (let i = 42; i < 48; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 294; i < 336; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }


            }
        }


        else if (index >= 48 && index < 53) {

            if (diLes[8]) {
                diLes[8] = false;
                for (let i = 48; i < 53; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 336; i < 371; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[8] = true;

                for (let i = 48; i < 53; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 336; i < 371; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }


            }
        }


        else if (index >= 53 && index < 62) {

            if (diLes[9]) {
                diLes[9] = false;
                for (let i = 53; i < 62; i++) {
                    div[i].classList.add("show-lesson");
                    h4Less[i].style.height = "auto";


                }

                for (let i = 371; i < 434; i++) {
                    pLess[i].classList.add("show-lesson-p");



                }

            }
            else {
                diLes[9] = true;

                for (let i = 53; i < 62; i++) {
                    div[i].classList.remove("show-lesson");
                    h4Less[i].style.height = "100%";

                }

                for (let i = 371; i < 434; i++) {
                    pLess[i].classList.remove("show-lesson-p");



                }


            }
        }



    });


});
