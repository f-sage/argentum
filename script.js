let copyIpBtn = document.getElementById("copy-server-ip");

copyIpBtn.onclick = ()=>{
    console.log("text")
    let ipSpan = document.getElementById("server-ip");
    navigator.clipboard.writeText(ipSpan.innerText);
}