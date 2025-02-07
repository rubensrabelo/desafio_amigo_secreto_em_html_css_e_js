document.addEventListener("DOMContentLoaded", function() {
    const inputFriend = document.getElementById("add_friend");
    const btnAdd = document.querySelector("input[type='button']");
    const divResult = document.getElementById("result");
    const btnRandomFriend = document.getElementById("random_friend");

    btnAdd.addEventListener("click", function() {
        const nameFriend = inputFriend.value.trim();

        if(nameFriend !== "") {
            const list_friends = divResult.querySelector("ul") || document.createElement("ul");
            
            if(!divResult.contains(list_friends)) {
                divResult.appendChild(list_friends);
            }

            const item = document.createElement("li");
            item.textContent = nameFriend;
            list_friends.appendChild(item);

            inputFriend.value = "";
            inputFriend.focus();
        }
    });

    btnRandomFriend.addEventListener("click", function() {
        const listFriends = divResult.querySelectorAll("ul li");
        const friendNames = Array.from(listFriends).map(friend => friend.textContent);

        if(friendNames.length > 0) {
            const randomIndex = Math.floor(Math.random() * friendNames.length);
            const randomFriend = friendNames[randomIndex];

            divResult.innerHTML = "";
            const resultMessage = document.createElement("p");
            resultMessage.textContent = `Amigo sorteado: ${randomFriend}`;
            console.log(resultMessage);
            divResult.appendChild(resultMessage);
        }
    })
});