var canvas = new fabric.Canvas("myCanvas");

block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left: block_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '77') {
        block_x = 50;
        block_y = 10;
        new_image("mackenzie-uk.png");
        console.log("M Key Pressed");
    }
    if (keyPressed == '90') {
        block_x = 250;
        block_y = 10;
        new_image("Zoey-uk.webp");
        console.log("Z Key Pressed");
    }

    if (keyPressed == '67') {
        block_x = 450;
        block_y = 10;
        new_image("chloe-uk.png");
        console.log("C Key Pressed");
    }
    if (keyPressed == '78') {
        block_x = 650;
        block_y = 10;
        new_image("300px-Dork.png");
        console.log("N Key Pressed");
    }
    if (keyPressed == '66') {
        block_x = 850;
        block_y = 10;
        new_image("Brandon-uk1.webp");
        console.log("B Key Pressed");
    }
}