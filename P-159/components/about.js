AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        a: {
          banner_url: "./assets/1.jpg",
          title: "Deadpool Kills the Marvel Universe",
          released_year: "2017",
          description:
            "This is a DIFFERENT time. Writer Cullen Bunn and artist Dalibor Talajic have reunited for ANOTHER tale of Deadpool taking out all of your faves in the most horrific ways possible! It's gonna hurt him more than it hurts you and you're gonna love it!"
        },
        b: {
          banner_url: "./assets/2.jpg",
          title: "Avengers: Secret Wars #1",
          released_year: "2015",
          description:
            "The Final Incursion is happening! The Marvel Universe is colliding with the Ultimate Universe! And neither will survive!",
        },
        c: {
          banner_url: "./assets/3.jpg",
          title: "The Darkhold Alpha #1 (Variant)",
          released_year: "2021",
          description:
            "ENTER THE PAGES OF THE DARKHOLD - AND LOSE YOUR MIND! For hundreds of years, scholars and heroes alike have searched for the complete text of the Darkhold - a.k.a. the Book of the Damned, written by the elder god Chthon. Who will find it that's the question though?"
                  },
        d: {
          banner_url: "./assets/4.jpg",
          title: "World WAR Hulk #3",
          released_year: "2007",
          description:
            "The Hulk has never been angrier or stronger or more certain of the vengeance he seeks against Mr. Fantastic, Iron Man, Dr. Strange, and Black Bolt, the four so-called heroes who exiled him into space. But can he survive a merciless assault by one of his oldest and most implacable opponents? ",}
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 1.25,
        height: 1.5,
      });
  
      entityEl.setAttribute("material", { color: "#363535" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.3,
        height: 0.5,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.5, y: -0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.8,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.22, z: 0.05 });
      return entityEl;
    },
  });