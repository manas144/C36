class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    
  }
hide(){
this.input.hide()
this.button.hide()
}
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
      
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(() =>{
      console.log("hi")
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
    player.name=name 
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(player.index);
      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
