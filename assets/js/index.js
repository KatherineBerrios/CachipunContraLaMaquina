// Este desafío no esta completo
// Función para obtener la jugada de la máquina
      function obtenerJugadaMaquina() {
        var opciones = ["piedra", "papel", "tijera"];
        var indice = Math.floor(Math.random(0,2) * 3);
        return opciones;
      }

      // Función para determinar al ganador
      function determinarGanador(jugador, maquina) {
        // Condicionales para determinar al ganador
        if (
          (jugador === "piedra" && maquina === "tijera") ||
          (jugador === "papel" && maquina === "piedra") ||
          (jugador === "tijera" && maquina === "papel")
        ) {
          console.log("Ganaste");
        } else {
          console.log("Perdiste");
        }
      }

      // Función principal del juego
      function jugarCachipun() {
        var vecesAJugar = parseInt(prompt("¿Cuántas veces deseas jugar?"));

        for (var i = 0; i < vecesAJugar; i++) {
          var jugada = prompt("Elige tu jugada: piedra, papel o tijera").toLowerCase();
          // var piedra = obtener...();

          if (vecesAJugar[i]) {
            console.log(
            `Jugada ${i + 1}`
            );
          } else {
            console.log(
            "Ya no quedan jugadas"
            );
          }

          console.log("Jugada del usuario:", jugadaUsuario);
          console.log("Jugada de la máquina:", jugadaMaquina);

          var resultado = determinarGanador(jugadaUsuario, jugadaMaquina);
          console.log("Resultado:", resultado);

          // Resultado del juego en condicionales
          // ...
        }
      }

      // Iniciar el juego
      jugarCachipun();
