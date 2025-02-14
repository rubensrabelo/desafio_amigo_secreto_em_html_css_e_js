document.addEventListener("DOMContentLoaded", function() {
    const inputFriend = document.querySelector(".input-name");
    const btnAdd = document.querySelector(".button-add");
    const listFriends = document.getElementById("listaAmigos");
    const resultMessage = document.getElementById("resultado");
    const btnRandomFriend = document.querySelector(".button-draw");

    function addFriend() {
        const nameFriend = inputFriend.value.trim();

        if (nameFriend !== "") {
            const item = document.createElement("li");
            item.textContent = nameFriend;
            listFriends.appendChild(item);

            inputFriend.value = "";
            inputFriend.focus();
        }
    }

    btnAdd.addEventListener("click", addFriend);

    inputFriend.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addFriend();
        }
    });

    btnRandomFriend.addEventListener("click", function() {
        const friendsList = listFriends.querySelectorAll("li");
        const friendNames = Array.from(friendsList).map(friend => friend.textContent);

        if (friendNames.length > 1) { 
            const randomIndex = Math.floor(Math.random() * friendNames.length);
            const choice = friendNames[randomIndex];

            listFriends.innerHTML = "";

            resultMessage.innerHTML = "";
            const resultItem = document.createElement("p");
            resultItem.textContent = `O amigo secreto sorteado foi é: ${choice}! 🎉`;
            resultItem.classList.add("winner");
            resultMessage.appendChild(resultItem);
        } else {
            resultMessage.innerHTML = "<p class='error'>Adicione pelo menos 2 amigos para sortear!</p>";
        }
    });
});
