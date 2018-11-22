// function updateText (formId, inviteId) {
//   let l1 = document.getElementById(formId);
//   document.getElementById(inviteId).innerHTML = l1.value
// }

  
//   function updateText (formId, inviteId) {
//   let l1 = document.getElementById(formId);
  
//   if (formId === "name1" || formId === "name2") {
//     document.getElementById(inviteId).innerHTML = l1.value[0]
//   } else {
//     document.getElementById(inviteId).innerHTML = l1.value
    
//   }
// }



// Outputs invitation text in realtime 
function init() {
  const fields =["location", "name1", "name2","lastname1","date"];
  fields.forEach(field => document.getElementById(field).addEventListener("input", e => {
      document.getElementById(field + "output").innerHTML = e.target.value;
      if (field === "name1") {
        document.getElementById("initial1").innerHTML = e.target.value[0].toUpperCase();
      } else if (field === "name2") {
          document.getElementById("initial2").innerHTML = e.target.value[0].toUpperCase()
      }
    }
  ));
}

// Change invitation design with button click 

function change () {
  const design = ["formal","spring","artdeco"];
  design.forEach(field => document.getElementById(field).addEventListener("click", e => {
    document.getElementById("invi").className= `${field}`;
    document.getElementById("text").className=`text${field}`
    
  }))
}


  


document.addEventListener("DOMContentLoaded", init)
document.addEventListener("DOMContentLoaded", change)


 