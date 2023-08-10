document.addEventListener("DOMContentLoaded", function () {
  let modoTheme = localStorage.getItem("modeTheme");

  if (modoTheme === null) {
    //Si no hay ningun valor en la variable
    localStorage.setItem("modeTheme", "Modo Dark");
    console.log("Modo oscuro Activado por defecto");
    let modeDark = document.querySelector(".stylesMode");
    modeDark.href = "styles.css";
  }
  else {
    switch (localStorage.getItem("modeTheme")) {
      case "Modo Light":
        console.log("Modo claro Activado");
        let modeLight = document.querySelector(".stylesMode");
        modeLight.href = "./styles/lightMode.css";
      break;
      default:
        console.log("Modo oscuro Activado");
        let modeDark = document.querySelector(".stylesMode");
        modeDark.href = "styles.css";

        break;
    }
  }
});

let theme = document.querySelector(".modeTheme");
let spawnTheme = document.querySelector(".spawnMode");

theme.addEventListener("click", () => {
  let opacity = window.getComputedStyle(spawnTheme).opacity;

  if (opacity == "0") {
    spawnTheme.style.opacity = "1";
    spawnTheme.style.display = "block";
  } else if (opacity == "1") {
    spawnTheme.style.opacity = "0";
    spawnTheme.style.display = "none";
  }
});

let themes = document.querySelectorAll(".itemTheme");

themes.forEach((themes) => {
  themes.addEventListener("click", () => {
    if (themes.getAttribute("data-id") == "1") {
      //Modo oscuro
      localStorage.setItem("modeTheme", "Modo Dark");
      let modoTheme = localStorage.getItem("modeTheme");

      let styles = document.querySelector(".stylesMode");
      styles.href = "styles.css";

      spawnTheme.style.opacity = "0";
      spawnTheme.style.display = "none";
    } else if (themes.getAttribute("data-id") == "2") {
      //Modo claro
      localStorage.setItem("modeTheme", "Modo Light");
      let modoTheme = localStorage.getItem("modeTheme");

      let styles = document.querySelector(".stylesMode");
      styles.href = "./styles/lightMode.css";

      spawnTheme.style.opacity = "0";
      spawnTheme.style.display = "none";
    }
  });
});

let textSecond = document.querySelector(".text-second");

const textLoad = () =>{
    setTimeout(() => {
        textSecond.textContent = "Sebastian Garces"
    }, 0);

    setTimeout(() => {
        textSecond.textContent = "Luis Miguel"
    }, 4000);

    setTimeout(() => {
        textSecond.textContent = "Oscar Carey"
    }, 8000);

    setTimeout(() => {
        textSecond.textContent = "Luis Eduardo"
    }, 12000);

    setTimeout(() => {
        textSecond.textContent = "Jose Velez"
    }, 16000);
}

// textLoad();
// setInterval(textLoad, 20000);


const textCargaSebas = () => {
  setTimeout(() => {
    textSecond.textContent += "S";
  }, 125);

  setTimeout(() => {
    textSecond.textContent += "e";
  }, 250);

  setTimeout(() => {
    textSecond.textContent += "b";
  }, 375);

  setTimeout(() => {
    textSecond.textContent += "a";
  }, 500);

  setTimeout(() => {
    textSecond.textContent += "s";
  }, 625);

  setTimeout(() => {
    textSecond.textContent += "t";
  }, 750);

  setTimeout(() => {
    textSecond.textContent += "i";
  }, 875);

  setTimeout(() => {
    textSecond.textContent += "a";
  }, 1000);

  setTimeout(() => {
    textSecond.textContent += "n";
  }, 1125);

  setTimeout(() => {
    textSecond.textContent += " ";
  }, 1250);

  setTimeout(() => {
    textSecond.textContent += "G";
  }, 1375);

  setTimeout(() => {
    textSecond.textContent += "a";
  }, 1500);

  setTimeout(() => {
    textSecond.textContent += "r";
  }, 1625);

  setTimeout(() => {
    textSecond.textContent += "c";
  }, 1750);

  setTimeout(() => {
    textSecond.textContent += "e";
  }, 1875);

  setTimeout(() => {
    textSecond.textContent += "s";
  }, 2000);


};

const textCargaLuis = () => {
  setTimeout(() => {
    textSecond.textContent += "L";
  }, 125);

  setTimeout(() => {
    textSecond.textContent += "u";
  }, 250);

  setTimeout(() => {
    textSecond.textContent += "i";
  }, 375);

  setTimeout(() => {
    textSecond.textContent += "s";
  }, 500);

  setTimeout(() => {
    textSecond.textContent += " ";
  }, 625);

  setTimeout(() => {
    textSecond.textContent += "M";
  }, 750);

  setTimeout(() => {
    textSecond.textContent += "i";
  }, 875);

  setTimeout(() => {
    textSecond.textContent += "g";
  }, 1000);

  setTimeout(() => {
    textSecond.textContent += "u";
  }, 1125);

  setTimeout(() => {
    textSecond.textContent += "e";
  }, 1250);

  setTimeout(() => {
    textSecond.textContent += "l";
  }, 1375);



};

const textCargaJose = () => {
  setTimeout(() => {
    textSecond.textContent += "J";
  }, 125);

  setTimeout(() => {
    textSecond.textContent += "o";
  }, 250);

  setTimeout(() => {
    textSecond.textContent += "s";
  }, 375);

  setTimeout(() => {
    textSecond.textContent += "e";
  }, 500);

  setTimeout(() => {
    textSecond.textContent += " ";
  }, 625);

  setTimeout(() => {
    textSecond.textContent += "V";
  }, 750);

  setTimeout(() => {
    textSecond.textContent += "e";
  }, 875);

  setTimeout(() => {
    textSecond.textContent += "l";
  }, 1000);

  setTimeout(() => {
    textSecond.textContent += "e";
  }, 1125);

  setTimeout(() => {
    textSecond.textContent += "z";
  }, 1250);
}

const textCargaOscar = () => {
  setTimeout(() => {
    textSecond.textContent += "O";
  }, 125);

  setTimeout(() => {
    textSecond.textContent += "s";
  }, 250);

  setTimeout(() => {
    textSecond.textContent += "c";
  }, 375);

  setTimeout(() => {
    textSecond.textContent += "a";
  }, 500);

  setTimeout(() => {
    textSecond.textContent += "r";
  }, 625);

  setTimeout(() => {
    textSecond.textContent += " ";
  }, 750);

  setTimeout(() => {
    textSecond.textContent += "C";
  }, 875);

  setTimeout(() => {
    textSecond.textContent += "a";
  }, 1000);

  setTimeout(() => {
    textSecond.textContent += "r";
  }, 1125);

  setTimeout(() => {
    textSecond.textContent += "e";
  }, 1250);

  setTimeout(() => {
    textSecond.textContent += "y";
  }, 1375);
};

const textCargaLuisLorduy = () => {
  setTimeout(() => {
    textSecond.textContent += "L";
  }, 125);

  setTimeout(() => {
    textSecond.textContent += "u";
  }, 250);

  setTimeout(() => {
    textSecond.textContent += "i";
  }, 375);

  setTimeout(() => {
    textSecond.textContent += "s";
  }, 500);

  setTimeout(() => {
    textSecond.textContent += " ";
  }, 625);

  setTimeout(() => {
    textSecond.textContent += "L";
  }, 750);

  setTimeout(() => {
    textSecond.textContent += "o";
  }, 875);

  setTimeout(() => {
    textSecond.textContent += "r";
  }, 1000);

  setTimeout(() => {
    textSecond.textContent += "d";
  }, 1125);

  setTimeout(() => {
    textSecond.textContent += "u";
  }, 1250);

  setTimeout(() => {
    textSecond.textContent += "y";
  }, 1375);
};

const clearText = () =>{
  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 2125);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 2250);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 2375);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 2500);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 2625);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 2750);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 2875);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3000);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3125);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3250);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3375);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3500);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3625);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3750);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 3875);

  setTimeout(() => {
    textSecond.textContent = textSecond.textContent.slice(0, -1);
  }, 4000);
}

const startAnimation = () => {
  textCargaSebas();
  setTimeout(() => {
    clearText();
  }, 1000);

  setTimeout(() => {
    textCargaLuis();
    setTimeout(() => {
      clearText();
    }, 1000);
  }, 5000);

  setTimeout(() => {
    textCargaJose();
    setTimeout(() => {
      clearText();
    }, 1000);
  }, 10000);

  setTimeout(() => {
    textCargaOscar();
    setTimeout(() => {
      clearText();
    }, 1000);
  }, 15000);

  setTimeout(() => {
    textCargaLuisLorduy();
    setTimeout(() => {
      clearText();
    }, 1000);
  }, 20000);
};

// Iniciar animación al cargar la página
startAnimation();

// Llamar a la animación cada 15 segundos
setInterval(startAnimation, 25000);



