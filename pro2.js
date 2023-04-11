const switches = document.querySelectorAll("label > input");

const fast = document.querySelector("#fast");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");

switches.forEach((s) => {
    s.addEventListener("change", (e) => {
        if (cheap.checked && fast.checked && e.target.id !== "good") 
        {
            good.checked = false;
        }
        if (cheap.checked && fast.checked && e.target.id == "good")
         {
            cheap.checked = false;
        }
        if (cheap.checked && good.checked && e.target.id == "good") 
        {
            fast.checked = false;
        }
        if (cheap.checked && good.checked && e.target.id == "fast") 
        {
            good.checked = false;
        }
    });
});
