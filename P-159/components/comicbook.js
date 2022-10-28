AFRAME.registerComponent("comic", {
  init: function () {
    this.placesContainer = this.el;   
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "a",
        title: "Deadpool kills The Marvel Universe 2 ",
        url: "./assets/1.jpg",
      },
      {
        id: "b",
        title: "House of M",
        url: "./assets/2.jpg",
      },

      {
        id: "c",
        title: "Deadly Neighbourhood Spiderman ",
        url: "./assets/3.jpg",
      },
      {
        id: "d",
        title: "World War HULK",
        url: "./assets/4.jpg",
      },
    ];
    
    let prevoiusXPosition = -62.75;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 4;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

    
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 30,
    });  
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#4c94f6",
      opacity: 1,
    });

    //Add cursor-listener component to the ring border entity to change it's color 
    //On Cursor 'mouseenter' and 'mouseleave' entity
    entityEl.setAttribute("cursor-listener", {});

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28
    });

    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
 
}); 