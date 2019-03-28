document.getElementById("show").addEventListener("click", function() {


    var parser, xmlDOC;
    var inputData = document.querySelector("#mods").value;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(inputData, "text/xml");

    var modItems = xmlDoc.getElementsByTagName("ModItem")
    for (var i = 0; i < modItems.length; i++) {
        var modName = modItems[i].attributes[0].nodeValue;
        var link = modItems[i].children[1].textContent;
        console.log(modName, link);


        var tbody = document.querySelector("tbody");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var a = document.createElement("a");

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        td1.appendChild(document.createTextNode(i + 1));
        td2.appendChild(document.createTextNode(modName));


        var a = document.createElement("a");
        a.setAttribute(`href`, `https://steamcommunity.com/sharedfiles/filedetails/?id=${link}`);
        a.innerHTML = link;
        td3.appendChild(a);

        tbody.appendChild(tr);
    }
});