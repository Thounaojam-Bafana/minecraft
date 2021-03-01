var canvas = new fabric.Canvas('myCanvas');

block_img_width = 30;
block_img_height = 30;
player_x = 10;
player_y = 10;
player_object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        player_object = Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set(
            {
                top:player_y,
                left:player_x
            }
        );
        canvas.add(player_object);
    }
    );
}

function New_img(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
       block_image_object = Img;
       
       block_image_object.scaleToHeight(block_img_height);
       block_image_object.scaleToWidth(block_img_width);
       block_image_object.set({
           top:player_y,
           left:player_x
       });
       canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keypress = e.keyCode;
    console.log(keypress);
    if (e.shiftKey == true && keypress == 80)
    {
       console.log("Shift + P");
       block_img_width = block_img_width + 10;
       block_img_height = block_img_height + 10;
       document.getElementById("CurrentWidth").innerHTML = block_img_width;
       document.getElementById("CurrentHeight").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keypress == 77)
    {
        console.log("Shift + M");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("CurrentHeight").innerHTML = block_img_height;
        document.getElementById("CurrentWidth").innerHTML = block_img_width;
    }

    if (keypress == 38)
    {
        console.log("Up");
        up();
    }

    if (keypress == 40)
    {
    console.log("Down");
    down();
    }

    if(keypress ==37)
    {
    console.log("Left");
    left();
    }

    if(keypress ==39)
    {
    console.log("Right");
    right();
    }
 
   if (keypress == 87)
   {
       New_img("wall.jpg");
       console.log("W");
   }

   if ( keypress == 71)
   {
       New_img("ground.png");
       console.log("G");
   }

   if ( keypress == 68)
   {
       New_img("dark_green.png");
       console.log("D");
   }

   if ( keypress == 76)
   {
       New_img("light_green.png");
       console.log("L");
   }

   if ( keypress == 84)
   {
       New_img("trunk.jpg");
       console.log("T");
   }

   if ( keypress == 82)
   {
       New_img("roof.jpg");
       console.log("R");
   }

   if ( keypress == 87)
   {
       New_img("wall.jpg");
       console.log("W");
   }

   if ( keypress == 89)
   {
       New_img("yellow_wall.png");
       console.log("Y");
   }

   if ( keypress == 85)
   {
       New_img("unique.png");
       console.log("U");
   }

   if ( keypress == 67)
   {
       New_img("cloud.jpg");
       console.log("C");
   }

}

function up()
{
    if(player_y > 0)
    {
        player_y = player_y - block_img_height;
        console.log("block Image height " + block_img_height);
        console.log("When up arrow key is pressed, x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function down()
{
    if(player_y <= 500)
    {
        player_y = player_y + block_img_height;
        console.log("block Image Height = " + block_img_height);
        console.log("When down is pressed, x =" + player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if (player_x > 0)
    {
        player_x = player_x - block_img_width;
        console.log("block Image Width" + block_img_width);
        console.log("When left is pressed, x = "+ player_x + ", y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x < 900)
    {
        player_x = player_x + block_img_width;
        console.log("block Image Width" + block_img_width);
        console.log("When right is pressed, x = "+ player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}