const body = document.querySelector("body");

// First method to integrate an element to from JS to HTML : 
function createProductCard(productName,price,imageUrl){
    const productCard = `
    <div class="card">
        <h2>Name : ${productName}</h2>
        <p>Price : ${price}$</p>
        <img width=100 height=100 src="${imageUrl}")>
    </div>`;
    return productCard;
}

const div = createProductCard('Pomidor',4.5,"https://t3.ftcdn.net/jpg/04/72/86/00/360_F_472860050_JZ7fXcVRGPrkNo7pnfOxc0P72ZqiLB3F.jpg");
body.insertAdjacentHTML("beforeend",div);



// Second method to integrate an element to from JS to HTML : 
function createCommentMessage(author,message,timestamp){
    const comment = document.createElement("div");
    comment.style.display = "flex";
    comment.style.flexDirection = "column";
    comment.style.justifyContent = "center";

    const authorName = document.createElement("h2");
    authorName.textContent = "Author Name : " + author;

    const messageText = document.createElement("p");
    messageText.textContent = "Message : " +  message;

    const date = document.createElement("p");
    date.textContent = "Local Date And Time : " + timestamp;

    const children = [authorName,messageText,date];
    children.forEach((c)=>{
        comment.append(c);
    });

    comment.className = "card";

    return comment;
}

const comment = createCommentMessage("Seid","Salam qaqash necesen ?",new Date().toString());
body.append(comment);




function createMenuItem(name,price,description){
    const menuItem = `
    <div class="card">
        <h2>Name : ${name}</h2>
        <p>Price : ${price}$</p>
        <p>Description : ${description}</p>
    </div>`;
    return  menuItem;
}

const menuItem = createMenuItem("Menu Item 1",50.5,"This is some Menu item .");
body.insertAdjacentHTML("beforeend",menuItem);