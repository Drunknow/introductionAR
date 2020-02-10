const marker = document.querySelector("a-marker").object3D;
const camera = document.querySelector("[camera]").getObject3D("camera");

const link = document.querySelector(".link");

const updateLinkPosition = () => {
  try {
    const { x, y } = marker.position.project(camera);
    link.style.setProperty(
      "--x",
      (document.body.clientWidth / 2) * (x + 1.0) + "px"
    );
    link.style.setProperty(
      "--y",
      (document.body.clientHeight / 2) * (-y + 1.0) + "px"
    );
    console.log(
      `${(document.body.clientWidth / 2) * (x + 1.0)},${(document.body
        .clientHeight /
        2) *
        (-y + 1.0)}`
    );
  } catch (o_O) {
    //
  }

  requestAnimationFrame(updateLinkPosition);
};

updateLinkPosition();
