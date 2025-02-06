document.addEventListener("DOMContentLoaded", function() {
    const inputFriend = document.getElementById("add_friend");
    const btnAdd = document.querySelector("input[type='button']");
    const divResult = document.getElementById("result");

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
});