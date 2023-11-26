const board = document.querySelector(".board");
var n = 63;
let Color = 0;
let tiles;
const jewels = ["ruby","diamond","yellow","cross","pink","emerald"];
const gameArray =  [
    [ ],
    [ ],
    [ ],
    [ ],
    [ ],
    [ ],
    [ ],
    [ ],
]

let vecin_Sus;
let vecin_Sus1;
let vecin_Sus2;
let vecin_Sus3;
let vecin_Stanga;
let vecin_Dreapta;
let vecin_Jos;
let selectedTile;
let buffer
let bufferCoord
let bufferClass

let level = 0
let score = 0

var level_Interval
var interval
let running = true
let addSeconds = 0;
var countDownDate = new Date().getTime()+30000;

if(running)
{
addTiles();
addJewels();
addSelection();
while (checkValidMove())
{
    checkPairs()
}

counter(countDownDate,running,addSeconds)
}





//checkPairs()
// function MovePieces(indexSelected){
//     vecin_Sus = tiles[indexSelected-8];
//     vecin_Stanga = tiles[indexSelected-1];
//     vecin_Dreapta = tiles[indexSelected+1];
//     vecin_Jos = tiles[indexSelected+8];
//     tiles.forEach(tile,index => {
//         tile.addEventListener('click',function() {
            
//         })
//     })
// }


function checkPosibleMove()
    {   tiles = document.querySelectorAll(".tile");
        let DidSmth2 = false
        DidSmth2 = false
        tiles.forEach(tile =>{
             let [row,column] = tile.classList[2].split(".");
             if (Number(row) == 0 && Number(column)!=7 && Number(row) !=7)
             {
                if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)+1])
                {
                    if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)+2])
                    DidSmth2 = true
                }
             }
             if (Number(column)!=0 && Number(column)!=7)
             {
             //daca are in spatele lui
             if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)-1] )
             {  
                if(Number(column) >=2)
                {
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)-2])
                    //console.log(tile)
                    DidSmth2 = true
                }

                if(Number(column) <=5)
                {
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)+2])
                    //console.log(tile)
                    DidSmth2 = true
                }
             }
             // daca are in fata lui
             if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)+1] )
             {
                if(Number(column) <= 5)
                {
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)+2])
                    //console.log(tile)
                    DidSmth2 = true
                }
                if(Number(column) >=2)
                {
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)-2])
                    //console.log(tile)
                    DidSmth2 = true
                }
             }
             if(Number(row)>=2)
             {
             if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)-2][Number(column)] )
             {
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)-1] || gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)+1])
                    //console.log(tile)
                    DidSmth2 = true 
             }

            }
            }

            if (Number(row)!=0 && Number(row)!=7)
            {   if (Number(column)<=5)
                if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)+2])
                {
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)+1] || gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)+1])
                    //console.log(tile)
                    DidSmth2 = true
                }
                
                if (Number(column)>=2)
                if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)-2])
                {
                if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)-1] || gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)-1])
                    //console.log(tile)
                    DidSmth2 = true
                }
                //daca are mai sus de el
                if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)] )
                {
                    if(Number(row) <= 6)
                    {
                        if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)-1] || gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)+1] )
                        DidSmth2 = true
                    }
                    
                    if(Number(row) >= 3)
                    {
                        if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)-3][Number(column)])
                        //console.log(tile)
                        DidSmth2 = true
                    }
                    if (Number(row) <=5)
                    {
                        if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)+2][Number(column)])
                        //console.log(tile)
                        DidSmth2 = true

                }
                }


                //daca are mai jos de el
                if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)] )
                {
                    if(Number(row) >= 2)
                    {
                        if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)-2][Number(column)])
                        //console.log(tile)
                        DidSmth2 = true
                    }
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)+1] || gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)-1])
                    {
                        //console.log(tile)
                        DidSmth2 = true
                    }
                    if(Number(row) <=5 && Number(column) !=0 && Number(column)!=7)
                    if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)+2][Number(column)+1] || gameArray[Number(row)][Number(column)] == gameArray[Number(row)+2][Number(column)-1])
                    {
                        //console.log(tile)
                        DidSmth2 = true
                    }
                    if(Number(row) <=4)
    
                        if(gameArray[Number(row)][Number(column)] == gameArray[Number(row)+3][Number(column)])
                        //console.log(tile)
                        DidSmth2 = true
        
                }
           
        }
        


            })
            
            return DidSmth2
    }

const createImage = (width, height) => {
    const img = new Image(width, height)
    return img
    }



    function checkValidMove()
    {   tiles = document.querySelectorAll(".tile");
        var rmv = document.querySelectorAll("img");
        DidSmth = false
        tiles.forEach(tile =>{
            
             let [row,column] = tile.classList[2].split(".");
             if (Number(column) != 0 && Number(column) != 7)
             {
             if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)-1] && gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)+1] && gameArray[Number(row)][Number(column)] != "")
             {
            
            DidSmth = true
             }
            
            }
    
            if (Number(row) != 0 && Number(row) != 7)
             {
             if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)] && gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)] && gameArray[Number(row)][Number(column)] != "" )
             {
                
            DidSmth = true
             }
            }
        })
        return DidSmth
    }

function checkPairs()
{   tiles = document.querySelectorAll(".tile");
    var rmv = document.querySelectorAll("img");
    DidSmth = false
    tiles.forEach(tile =>{
        
         let [row,column] = tile.classList[2].split(".");
         if (Number(column) != 0 && Number(column) != 7)
         {
         if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)-1] && gameArray[Number(row)][Number(column)] == gameArray[Number(row)][Number(column)+1] && gameArray[Number(row)][Number(column)] != "")
         {
            //console.log(Number(tile.classList[1]));
            // First Step: Remove 3 of same type in ROW // Remove IMG element
            // rmv[Number(tile.classList[1])-1].parentNode.removeChild(rmv[Number(tile.classList[1])-1])
            // rmv[tile.classList[1]].parentNode.removeChild(rmv[tile.classList[1]])
            // rmv[Number(tile.classList[1])+1].parentNode.removeChild(rmv[Number(tile.classList[1])+1])
            //img1= createImage(50,50) doesnt work, maybe get a fully transparent IMG
            
            
            for (var i = row ;i>=1; i--)
            {
            //console.log(tiles[Number(i*8+Number(column))]);
            selectedTile = tiles[Number(i*8+Number(column))]
            vecin_Dreapta = tiles[Number(i*8+Number(column)+1)];
            vecin_Stanga = tiles[Number(i*8+Number(column)-1)];
            vecin_Sus1 = tiles[Number(i*8+Number(column)-8)];
            vecin_Sus2 = tiles[Number(i*8+Number(column)-1-8)];
            vecin_Sus3 = tiles[Number(i*8+Number(column)+1-8)];
           
            
            // Schimbam Imgurile intre ele.
            buffer = selectedTile.children[0];
            selectedTile.appendChild(vecin_Sus1.children[0])
            vecin_Sus1.appendChild(buffer);

            
            //Asta e efectu de cade coloana!!!

            // aici modificam GameArrayu cu tileu din mijloc cu cel de deasupra lui.
            //
            coordSelected = selectedTile.classList[2].split(".")
            coordVecin = vecin_Sus1.classList[2].split(".")
            bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
            gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
            gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord
            // //

            buffer = vecin_Stanga.children[0];
            vecin_Stanga.appendChild(vecin_Sus2.children[0])
            vecin_Sus2.appendChild(buffer);

             //
             coordSelected = vecin_Stanga.classList[2].split(".")
             coordVecin = vecin_Sus2.classList[2].split(".")
             bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
             gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
             gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord
             //

            buffer = vecin_Dreapta.children[0];
            vecin_Dreapta.appendChild(vecin_Sus3.children[0])
            vecin_Sus3.appendChild(buffer);

             //
             coordSelected = vecin_Dreapta.classList[2].split(".")
             coordVecin = vecin_Sus3.classList[2].split(".")
             bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
             gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
             gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord
             


            }

            
        
        // Sterg 3 in a row de sus si adaug alte imagini
        rmv = document.querySelectorAll("img");
        rmv[Number(column)].parentNode.removeChild(rmv[Number(column)])
        rmv[Number(column)-1].parentNode.removeChild(rmv[Number(column)-1])
        rmv[Number(column)+1].parentNode.removeChild(rmv[Number(column)+1])
        AddJewel(tiles[Number(column)],tiles[Number(column)].classList[2])
        AddJewel(tiles[Number(column)-1],tiles[Number(column)-1].classList[2])
        AddJewel(tiles[Number(column)+1],tiles[Number(column)+1].classList[2])
        DidSmth = true
         }
        
        }

        if (Number(row) != 0 && Number(row) != 7)
         {
         if (gameArray[Number(row)][Number(column)] == gameArray[Number(row)-1][Number(column)] && gameArray[Number(row)][Number(column)] == gameArray[Number(row)+1][Number(column)] && gameArray[Number(row)][Number(column)] != "" )
         {
            for (var i = row ;i>=2; i--)
            {
            //console.log(tiles[Number(i*8+Number(column))]);
            selectedTile = tiles[Number(i*8+Number(column))]
            vecin_Sus = tiles[Number(i*8-8+Number(column))];
            vecin_Jos = tiles[Number(i*8+8+Number(column))];
            vecin_Sus1 = tiles[Number(i*8-8-8+Number(column))];
            
           
            // Schimbam Imgurile intre ele.
            buffer = vecin_Sus.children[0];
            vecin_Sus.appendChild(vecin_Sus1.children[0])
            vecin_Sus1.appendChild(buffer);

            
            //Asta e efectu de cade coloana!!!

            // aici modificam GameArrayu cu tileu din mijloc cu cel de deasupra lui.
            //
            coordSelected = vecin_Sus.classList[2].split(".")
            coordVecin = vecin_Sus1.classList[2].split(".")
            bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
            gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
            gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord
            // //

            buffer = selectedTile.children[0];
            selectedTile.appendChild(vecin_Sus.children[0])
            vecin_Sus.appendChild(buffer);

             //
             coordSelected = selectedTile.classList[2].split(".")
             coordVecin = vecin_Sus.classList[2].split(".")
             bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
             gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
             gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord
             //

            buffer = vecin_Jos.children[0];
            vecin_Jos.appendChild(selectedTile.children[0])
            selectedTile.appendChild(buffer);

             //
             coordSelected = vecin_Jos.classList[2].split(".")
             coordVecin = selectedTile.classList[2].split(".")
             bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
             gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
             gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord
             


            }
        rmv = document.querySelectorAll("img");
        rmv[Number(column)].parentNode.removeChild(rmv[Number(column)])
        rmv[+8+Number(column)].parentNode.removeChild(rmv[+8+Number(column)])
        rmv[8+8+Number(column)].parentNode.removeChild(rmv[8+8+Number(column)])
        AddJewel(tiles[Number(column)],tiles[Number(column)].classList[2])
        AddJewel(tiles[8+Number(column)],tiles[8+Number(column)].classList[2])
        AddJewel(tiles[8+8+Number(column)],tiles[8+8+Number(column)].classList[2])
        DidSmth = true
         }
        }
    })
    return DidSmth
}

function addSelection(){
    let selected = false;
    tiles.forEach((tile,index) => {
        tile.addEventListener('click',function() {
            if(!selected){
                selected = true;
                addBorder(tile,"images/border.png")
                //addImage(tile,"http://127.0.0.1:3000/border.png","border","2")
                selectedTile = tile;
                vecin_Sus = tiles[Number(tile.classList[1])-8];
                vecin_Stanga = tiles[Number(tile.classList[1])-1];
                vecin_Dreapta = tiles[Number(tile.classList[1])+1];
                vecin_Jos = tiles[Number(tile.classList[1])+8];
                //console.log(vecin_Sus,vecin_Jos,vecin_Dreapta,vecin_Stanga);
            }
            else if(selected){
                var rmv = document.querySelectorAll("img");
                let coordSelected = selectedTile.classList[2].split(".")
                let coordVecin;
                switch (tile)
                {
                    case vecin_Dreapta:
                        {
                        // buffer = selectedTile.children[0];
                        // rmv[selectedTile.classList[1]].parentNode.removeChild(rmv[selectedTile.classList[1]]);
                        // selectedTile.appendChild(vecin_Dreapta.children[0])
                        // rmv[vecin_Dreapta.classList[1]].parentNode.removeChild(rmv[vecin_Dreapta.classList[1]]);
                        // vecin_Dreapta.appendChild(buffer);
                        coordVecin = vecin_Dreapta.classList[2].split(".")
                        bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
                        gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
                        gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord
                        if (checkValidMove())
                        {
                            ////myMove(selectedTile.children[0])
                           // //myMove(vecin_Dreapta.children[0])
                            ////myMove(vecin_Stanga.children[0])
                        
                        buffer = selectedTile.children[0];
                        selectedTile.appendChild(vecin_Dreapta.children[0])
                        vecin_Dreapta.appendChild(buffer);
                        

                        selected = false;
                        removeImage(0,".border");
                        //Add score
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;

                        clearInterval(interval)
                        countDownDate += 5000;
                        counter(countDownDate,running)
                        while (checkValidMove())
                        {
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;
                        }
                        if (!checkPosibleMove())
                        {
                            console.log("NO POSIBLE MOVES!")
                            running=false
                            gameOver("No more Moves!")
                            return
                        }
                        
                        break;
                        }
                        else{
                        gameArray[coordVecin[0]][coordVecin[1]] = gameArray[coordSelected[0]][coordSelected[1]]
                        gameArray[coordSelected[0]][coordSelected[1]] = bufferCoord

                        selected = false;
                        removeImage(0,".border");
                        break;
                        }
                        //
            
                        //
                        
                        }
                    case vecin_Jos:
                        {
                        coordVecin = vecin_Jos.classList[2].split(".")
                        bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
                        gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
                        gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord  
                          
                        if (checkValidMove())
                        {
                            //myMove(selectedTile.children[0])
                            //myMove(vecin_Dreapta.children[0])
                            //myMove(vecin_Stanga.children[0])
                        buffer = selectedTile.children[0];
                        selectedTile.appendChild(vecin_Jos.children[0])
                        vecin_Jos.appendChild(buffer);

                        selected = false;
                        removeImage(0,".border");
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;

                        clearInterval(interval)
                        countDownDate += 5000;
                        counter(countDownDate,running)
                        while (checkValidMove())
                        {
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;
                        }
                        if (!checkPosibleMove())
                        {
                            console.log("NO POSIBLE MOVES!")
                            running=false
                            gameOver("No more Moves!")
                            return
                        }
                        
                        break;
                        }
                        else{
                        gameArray[coordVecin[0]][coordVecin[1]] = gameArray[coordSelected[0]][coordSelected[1]]
                        gameArray[coordSelected[0]][coordSelected[1]] = bufferCoord

                        selected = false;
                        removeImage(0,".border");
                        break;
                        }
                        
                        }
                    case vecin_Stanga:
                        {
                        coordVecin = vecin_Stanga.classList[2].split(".")
                        bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
                        gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
                        gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord

                        if (checkValidMove())
                        {
                            //myMove(selectedTile.children[0])
            //myMove(vecin_Dreapta.children[0])
            //myMove(vecin_Stanga.children[0])
                        buffer = selectedTile.children[0];
                        selectedTile.appendChild(vecin_Stanga.children[0])
                        vecin_Stanga.appendChild(buffer);

                        selected = false;
                        removeImage(0,".border");
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;
                        
                        clearInterval(interval)
                        countDownDate += 5000;
                        counter(countDownDate,running)
                        while (checkValidMove())
                        {
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;
                        }
                        if (!checkPosibleMove())
                        {
                            console.log("NO POSIBLE MOVES!")
                            running=false
                            gameOver("No more Moves!")
                            return
                        }
                        
                        break;
                        }
                        else{
                        gameArray[coordVecin[0]][coordVecin[1]] = gameArray[coordSelected[0]][coordSelected[1]]
                        gameArray[coordSelected[0]][coordSelected[1]] = bufferCoord

                        selected = false;
                        removeImage(0,".border");
                        break;
                        }
                        
                        }
                    case vecin_Sus:
                        {
                        coordVecin = vecin_Sus.classList[2].split(".")
                        bufferCoord = gameArray[coordSelected[0]][coordSelected[1]] 
                        gameArray[coordSelected[0]][coordSelected[1]]  = gameArray[coordVecin[0]][coordVecin[1]]
                        gameArray[coordVecin[0]][coordVecin[1]] = bufferCoord

                        if (checkValidMove()){
                            //myMove(selectedTile.children[0])
                            //myMove(vecin_Dreapta.children[0])
                            //myMove(vecin_Stanga.children[0])
                        buffer = selectedTile.children[0];
                        selectedTile.appendChild(vecin_Sus.children[0])
                        vecin_Sus.appendChild(buffer);

                        selected = false;
                        removeImage(0,".border");
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;
                        
                        clearInterval(interval)
                        countDownDate += 5000;
                        counter(countDownDate,running)
                        while (checkValidMove())
                        {
                        checkPairs()
                        score +=100
                        document.querySelector("#scor").innerHTML ="Score: "+score;
                        }
                        if (!checkPosibleMove())
                        {
                            console.log("NO POSIBLE MOVES!")
                            running=false
                            gameOver("No more Moves!")
                            return
                        }
                        break;
                        }
                        else{
                        gameArray[coordVecin[0]][coordVecin[1]] = gameArray[coordSelected[0]][coordSelected[1]]
                        gameArray[coordSelected[0]][coordSelected[1]] = bufferCoord

                        selected = false;
                        removeImage(0,".border");
                        break;
                        }
                        
                        }
                    default:
                        {
                        selected = false;
                        removeImage(0,".border")
                        break;
                        }
                        

                }
            }
        })
    })
}

function AddJewel(tile,classlist2){
    let jewel = jewels[Math.floor(Math.random() * jewels.length)]
    let [row,column] = classlist2.split(".")
        // console.log(jewel);
        gameArray[row][column] = jewel;
        switch (jewel){
            case "ruby":
                addImage(tile,"images/ruby.png");
                break;
            case "diamond":
                addImage(tile,"images/diamond.png");
                break;
            case "cross":
                addImage(tile,"images/cross.png");
                break;
            case "emerald":
                addImage(tile,"images/emerald.png");
                break;
            case "pink":
                addImage(tile,"images/pink.png");
                break;
            case "yellow":
                addImage(tile,"images/yelow.png");
                break;
        }
}

function addJewels(){
    tiles = document.querySelectorAll(".tile");
    let row = -1;
    let column = 0;
    tiles.forEach(tile => { 
        if(column%8 ==0)
        {
            row+=1
            column = 0;
        }
        let jewel = jewels[Math.floor(Math.random() * jewels.length)]
        // console.log(jewel);
        tile.classList.add(`${row}.${column}`);
        gameArray[row][column] = jewel;
        switch (jewel){
            case "ruby":
                addImage(tile,"images/ruby.png");
                break;
            case "diamond":
                addImage(tile,"images/diamond.png");
                break;
            case "cross":
                addImage(tile,"images/cross.png");
                break;
            case "emerald":
                addImage(tile,"images/emerald.png");
                break;
            case "pink":
                addImage(tile,"images/pink.png");
                break;
            case "yellow":
                addImage(tile,"images/yelow.png");
                break;
        }
        column+=1;
    })
};

function removeImage(indice,element){
    var elementToBeRemoved = document.querySelectorAll(element);
    elementToBeRemoved[indice].parentNode.removeChild(elementToBeRemoved[indice]);
}

function addBorder(tile,path){
    let img = document.createElement('img');
    img.src = path;
    img.classList.add("border");
    img.style.height='80px';
    img.style.width='80px';
    img.style.zIndex = 2;
    tile.appendChild(img);
};

function addImage(tile,path,className="img",z="1"){
    let img = document.createElement('img');
    img.src = path;
    img.classList.add(className);
    img.style.position = 'absolute';
    img.style.height='50px';
    img.style.width='50px';
    img.style.zIndex = z;
    tile.appendChild(img);
};

function addTiles(){
for (var i =0; i<=n ; i++){
    if (Color % 9 == 0){
        Color +=1
    };
    // console.log("Color: ",Color)
    let div = document.createElement("div");
    div.classList.add(`tile`)
    div.classList.add(`${i}`)
    //div.style.position = 'relative'
    div.style.display = 'flex';
    div.style.justifyContent = 'center'
    div.style.alignContent = 'center'
    div.style.alignItems = 'center'
    div.style.width='75px';
    div.style.height='75px';
    div.style.border = '1px solid black'
    // console.log("Class:",div.classList[1]);
    if (Color % 2 == 0){
    div.style.backgroundColor = 'rgb(100, 149, 237)';
    }
    else{
        div.style.backgroundColor = 'rgb(20, 52, 164)';
    }
    board.appendChild(div);
    Color +=1;
}
}

//sterge toti Child din Node element

function gameOver(text){
    //removeAllChildNodes(board)
    let body = document.querySelector("body")
    let menu = document.querySelector(".menu")
    let h1 = document.querySelector("h1")
    //menu.style.display = "none" //hiden menu

    let divBlack = document.createElement("div")

    divBlack.style.backgroundColor = 'grey' // grey backgr
    divBlack.style.opacity = "0.5";
    divBlack.style.zIndex = "1";
    divBlack.style.position = "fixed";
    divBlack.style.left = "0px"
    divBlack.style.top = "0px"
    divBlack.style.width = "100%";
    divBlack.style.height = "100%";
    

    document.querySelector(".timer h1").innerHTML = "EXPIRED";

    let joever = document.createElement("h1")
    joever.textContent = text
    joever.style.fontFamily = "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    joever.style.fontSize = "8rem"
    joever.style.color = "red"
    joever.style.position = "fixed"
    joever.style.zIndex = "1";
    //joever.style.marginTop ="-3rem"
    joever.style.fontWeight = "800"
    joever.style.marginTop = "-10rem"

    let buttonRestart = document.createElement("button")
    buttonRestart.textContent = "Restart"
    buttonRestart.style.zIndex = "1";
    buttonRestart.style.fontFamily = "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    buttonRestart.style.fontSize = "6rem"
    buttonRestart.style.marginBottom ="-3rem"
    buttonRestart.style.position = "fixed"
    //buttonRestart.style.marginTop ="-3rem"
    buttonRestart.style.backgroundColor = 'rgb(191,191,191)'
    buttonRestart.addEventListener("mouseenter" , () =>{
        buttonRestart.style.backgroundColor = "white"
        buttonRestart.style.cursor = "pointer"
    })
    buttonRestart.addEventListener("mouseleave" , () =>{
        buttonRestart.style.backgroundColor = 'rgb(191,191,191)'
        buttonRestart.style.cursor = "normal"
    })
    buttonRestart.addEventListener("mousedown" , () =>{
        buttonRestart.style.backgroundColor = 'rgba(150,150,150)'
    })
    
    buttonRestart.addEventListener("mouseup" , () =>{
        buttonRestart.style.backgroundColor = 'white'
    })

    buttonRestart.addEventListener("click" , () =>{
    joever.parentNode.removeChild(joever)
    buttonRestart.parentNode.removeChild(buttonRestart)
    divBlack.parentNode.removeChild(divBlack)
    removeAllChildNodes(board)
    level = 0
    score = 0
    document.querySelector(".level").innerHTML = "Level "+level;
    document.querySelector("#scor").innerHTML = "Score: "+score;


    running = true
    addTiles();
    addJewels();
    addSelection();
    while (checkValidMove())
    {
        checkPairs()
    }
    countDownDate = new Date().getTime()+30000
    counter(countDownDate,running)
    })
    
    body.append(divBlack)
    body.appendChild(joever)
    body.appendChild(buttonRestart)

}

function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    
    function counter(countDownDate,run){
    // Update the count down every 1 second
    interval = setInterval(function() {
    
        
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.querySelector(".timer h1").innerHTML = minutes + "m " + seconds + "s ";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(interval);
        gameOver("Time's Up!")
      }
      if (distance >= 60000)
      {
        clearInterval(interval)
        levelUp()
      }
      if (!run){
        clearInterval(interval)
      }
    }, 1000)
}

function levelUp(){
    level +=1
    document.querySelector(".level").innerHTML = "Level "+level;
    let clicked = false;
    var intervalDate = new Date().getTime()+6000;

    removeAllChildNodes(board)
    let ceas = document.querySelector(".timer h1")
    let body = document.querySelector("body")
    let menu = document.querySelector(".menu")
    let h1 = document.querySelector(".title h1")
    menu.style.display = "none" //hiden menu
    body.style.backgroundColor = 'rgba(100,100,100,0.1)' // grey backgr


    document.querySelector(".timer h1").innerHTML = "";

    let joever = document.createElement("h1")
    joever.textContent = `Leveled up!`
    joever.style.fontFamily = "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    joever.style.fontSize = "8rem"
    joever.style.color = "red"
    joever.style.top ="-10rem"

    let buttonRestart = document.createElement("button")
    buttonRestart.style.fontFamily = "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    buttonRestart.textContent = "Pause"
    buttonRestart.style.fontSize = "6rem"
    buttonRestart.style.marginBottom ="10rem"
    buttonRestart.style.backgroundColor = 'rgb(191,191,191)'
    buttonRestart.addEventListener("mouseenter" , () =>{
        buttonRestart.style.backgroundColor = "white"
        buttonRestart.style.cursor = "pointer"
    })
    buttonRestart.addEventListener("mouseleave" , () =>{
        buttonRestart.style.backgroundColor = 'rgba(100,100,100,0.1)'
        buttonRestart.style.cursor = "normal"
    })
    buttonRestart.addEventListener("mousedown" , () =>{
        buttonRestart.style.backgroundColor = 'rgba(100,100,100,0.6)'
    })
    
    buttonRestart.addEventListener("mouseup" , () =>{
        buttonRestart.style.backgroundColor = 'white'
    })

    buttonRestart.addEventListener("click" , () =>{
        if (!clicked)
        {
        clearInterval(level_Interval);
        clicked = true
        }
        else
        {
        clicked = false
        intervalDate = new Date().getTime()+6000;
        level_Interval = setInterval(function() {
    
            // Get today's date and time
            var now = new Date().getTime();
          
            // Find the distance between now and the count down date
            var distance = intervalDate - now;
          
            // Time calculations for days, hours, minutes and seconds
          //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            // Display the result in the element with id="demo"
            document.querySelector(".timer h1").innerHTML = minutes + "m " + seconds + "s ";
          
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(level_Interval);
                joever.parentNode.removeChild(joever)
                buttonRestart.parentNode.removeChild(buttonRestart)
                menu.style.display = "flex"

                running = true
                addTiles();
                addJewels();
                addSelection();
                while (checkValidMove())
                {
                    checkPairs()
                }
                countDownDate=new Date().getTime()+30000;
                counter(countDownDate,running)
                
                
    
               
            }
            
          }, 1000)
        }


    })
    body.appendChild(joever)
    body.appendChild(buttonRestart)

    level_Interval = setInterval(function() {
    
        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = intervalDate - now;
      
        // Time calculations for days, hours, minutes and seconds
      //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.querySelector(".timer h1").innerHTML = minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(level_Interval);
            joever.parentNode.removeChild(joever)
            buttonRestart.parentNode.removeChild(buttonRestart)
            menu.style.display = "flex"
            body.style.backgroundColor = "white"
            running = true
            addTiles();
            addJewels();
            addSelection();
            while (checkValidMove())
            {
                checkPairs()
            }
            countDownDate=new Date().getTime()+30000;
            counter(countDownDate,running)
            
            

           
        }
        
      }, 1000)

    
    


}

var animate;
function myMove(widget) {
    let triger = false;
  clearInterval(animate);
  var size = 75
  animate = setInterval(frame, 10);
  function frame() {
    if (size == 0) {
      clearInterval(animate);
      triger = true
      widget.style.width = 50 + 'px';
    } else {
      size--;
      widget.style.width = size + 'px';
    }
  }
  return triger
}