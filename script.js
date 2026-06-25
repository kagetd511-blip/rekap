let saldo = 12500000;
let income = 15000000;
let expense = 2500000;

function formatRupiah(n){
return "Rp" + n.toLocaleString("id-ID");
}

function parseInput(text){
let parts = text.split(" ");
let amountText = parts.pop().toLowerCase();

let number = parseFloat(amountText.replace(/[^\d]/g,''));

if(amountText.includes("rb")) number *= 1000;
if(amountText.includes("jt")) number *= 1000000;

return { title: parts.join(" "), amount: number };
}

function addTransaksi(){

let type = document.getElementById("type").value;
let text = document.getElementById("inputText").value;

if(!text) return alert("Isi dulu");

let data = parseInput(text);

if(type === "in"){
saldo += data.amount;
income += data.amount;
}else{
saldo -= data.amount;
expense += data.amount;
}

document.getElementById("saldo").innerHTML = formatRupiah(saldo);
document.getElementById("income").innerHTML = formatRupiah(income);
document.getElementById("expense").innerHTML = formatRupiah(expense);

let div = document.createElement("div");
div.className = "transaction glass";

div.innerHTML = `
<div>${data.title}</div>
<div class="${type === "in" ? "amount-plus" : "amount-minus"}">
${type === "in" ? "+" : "-"} ${formatRupiah(data.amount)}
</div>
`;

document.getElementById("list").prepend(div);

document.getElementById("inputText").value = "";

}

function openMenu(){
sidebar.classList.add("active");
overlay.classList.add("active");
}

function closeMenu(){
sidebar.classList.remove("active");
overlay.classList.remove("active");
}
