import { Dbank} from "../../declarations/Dbank";

window.addEventListener("load",async ()=>{
  // console.log("Successful");
  update();
})

document.querySelector("form").addEventListener("submit",async (event)=>{
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");


  const inputamount = parseFloat(document.getElementById("input-amount").value);
  const outputamount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled",true);

  if(document.getElementById("input-amount").value.length != 0)
    await Dbank.toUp(inputamount);

  if(document.getElementById("withdrawal-amount").value.length != 0)
    await Dbank.withdraw(outputamount);

  await Dbank.compound();

  update();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled");
})

async function update(){
  const currentAmount = await Dbank.checkbalance();
  document.getElementById("value").innerText = Math.round(currentAmount*100)/100;
}