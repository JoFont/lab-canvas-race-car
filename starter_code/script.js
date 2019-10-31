const carImg = new Image();
carImg.src = "./images/car.png";


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

    

    class Game {
      constructor() {
        this.$canvas = document.querySelector("canvas");
        this.ctx = this.$canvas.getContext("2d");
        this.WIDTH = this.ctx.canvas.width;
        this.HEIGHT = this.ctx.canvas.height;

        this.car = new Car(this);
      }

      render() {
        this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.WIDTH, this.HEIGHT);
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(30, 0, this.WIDTH - 60, this.HEIGHT);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(40, 0, 8, this.HEIGHT);
        this.ctx.fillRect(this.WIDTH - 40 - 8, 0, 8, this.HEIGHT);

        let transverse = 0;
        while(transverse < this.HEIGHT) {
          this.ctx.fillRect((this.WIDTH / 2) - 5, transverse + 10, 4, 15);
          transverse += 30
        }

        this.car.render();
      }
    }
    

    class Car {
      constructor(game) {
        this.game = game;

        this.pos = {
          x: 50,
          y: 50
        }
        this.size = {
          width: carImg.width / 3,
          height: carImg.height / 3
        }
      }

      render() {
        this.game.ctx.drawImage(carImg, this.pos.x, this.pos.y, this.size.width, this.size.height);
      }

      moveLeft() {
        this.pos.x -= 7;
      }

      moveRigth() {
        this.pos.x += 7;
      }
    }

    let game = new Game();
  

    window.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 65:
          game.car.moveLeft();
          break;
        case 68:
          game.car.moveRigth();
          break;
      }
    });

    const loop = () => {
      window.requestAnimationFrame(loop);

      game.render();
    }

    loop()


    

  function startGame() {
    





  }
};
