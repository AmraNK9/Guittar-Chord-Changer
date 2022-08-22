let diplayBox1 = document.querySelectorAll(".displayBox")[0];
let displayBox2 = document.querySelectorAll(".displayBox")[1];
let input1 = document.querySelectorAll("input")[0];
let input2 = document.querySelectorAll("input")[1];
let input3 = document.querySelectorAll("input")[2];
let ans = document.querySelectorAll("#ans")[0];
let button = document.querySelectorAll("button")[0];

let changedKey = []

const inputFunction =()=>{
    switch (input1.value)
    {
        case "0" : {
            diplayBox1.textContent = "C"
        }
        break;
        case "1" : {
            diplayBox1.textContent = "D"
        }
        break;
        case "2" : {
            diplayBox1.textContent = "E"
        }
        break;
        case "3" : {
            diplayBox1.textContent = "F"
        }
        break;
        case "4" : {
            diplayBox1.textContent = "G"
        }
        break;
        case "5" : {
            diplayBox1.textContent = "A"
        }
        break;
        case "6": {
            diplayBox1.textContent = "B"
        }
    }
}

const inputFunction2 =()=>{
    switch (input2.value)
    {
        case "0" : {
            displayBox2.textContent = "C"
        }
        break;
        case "1" : {
            displayBox2.textContent = "D"
        }
        break;
        case "2" : {
            displayBox2.textContent = "E"
        }
        break;
        case "3" : {
            displayBox2.textContent = "F"
        }
        break;
        case "4" : {
            displayBox2.textContent = "G"
        }
        break;
        case "5" : {
            displayBox2.textContent = "A"
        }
        break;
        case "6": {
            diplayBox1.textContent = "B"
        }
    }
}

const Run = ()=>{
   
if (diplayBox1.textContent =="C"){
    if(displayBox2.textContent == "D"){
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Gbm");
        }
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Em");
        }
    }
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "C"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "G"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "AM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "EM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "F"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "DM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Am");
        }
      
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "C"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "AM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "F"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "DM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "C"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "AM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "F"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "DM"){
        changedKey.push("Dbm");
    }
}
}
if (diplayBox1.textContent =="D"){
    if(displayBox2.textContent == "C"){
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Am");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("EM");
        }
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("F");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Dm");
        }
    }
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "D"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "A"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "BM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "G"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "EM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "BM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "BM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Dbm");
    }
}
}
if (diplayBox1.textContent =="E"){
    if(displayBox2.textContent == "C"){
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Am");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("EM");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("F");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Dm");
        }
    }
    if(displayBox2.textContent == "D"){
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Gbm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Em");
        }
    }
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "E"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "B"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "DBM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "ABM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "A"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Dbm");
    }
}
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "E"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "B"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "DBM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "ABM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "A"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Dbm");
    }
}
}
if (diplayBox1.textContent =="F"){
    if(displayBox2.textContent == "C"){
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Am");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("EM");
        }
        if(input3.value.toLocaleUpperCase() == "BB"){
            changedKey.push("F");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Dm");
        }
    }
    if(displayBox2.textContent == "D"){
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Gbm");
        }
        if(input3.value.toLocaleUpperCase() == "BB"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Em");
        }
    }
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "BB"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "F"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "C"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "DM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "AM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "BB"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "GM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "BB"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "F"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "C"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "DM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "AM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "BB"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "F"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "C"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "DM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "AM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "BB"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Dbm");
    }
}
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "BB"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "F"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "C"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "DM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "AM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "BB"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "GM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "F"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "C"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "DM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "AM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "BB"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "F"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "C"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "DM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "AM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "BB"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "F"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "C"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "DM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "AM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "BB"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Dbm");
    }
}
}
if (diplayBox1.textContent =="G"){
    if(displayBox2.textContent == "C"){
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Am");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("EM");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("F");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Dm");
        }
    }
    if(displayBox2.textContent == "D"){
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Gbm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Em");
        }
    }
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "G"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "D"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "EM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "ABM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "A"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Dbm");
    }
}
if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Gbm");
        }
}
if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "G"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "D"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "EM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "ABM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "A"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("Gm");
            }
}
if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "G"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "EM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "ABM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "G"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "EM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "ABM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Dbm");
    }
    }
    }
if (diplayBox1.textContent =="A"){
    if(displayBox2.textContent == "C"){
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Am");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("EM");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("F");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Dm");
        }
    }
    if(displayBox2.textContent == "D"){
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Gbm");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Em");
        }
    }
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "A"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "E"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "DBM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "D"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "BM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "BM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "BM"){
        changedKey.push("Dbm");
    }
}
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "A"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "E"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "DBM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "D"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "BM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "A"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "D"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "BM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "BM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "A"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "D"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "BM"){
        changedKey.push("Dbm");
    }
}
}
if (diplayBox1.textContent =="B"){
    if(displayBox2.textContent == "C"){
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Am");
        }
        if(input3.value.toLocaleUpperCase() == "EBM"){
            changedKey.push("EM");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("F");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Dm");
        }
    }
    if(displayBox2.textContent == "D"){
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "EBM"){
            changedKey.push("Gbm");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Em");
        }
    }
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "EBM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "B"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "GM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "EBM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "E"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "DBM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "EBM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "EBM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "EBM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Dbm");
    }
}
    if(displayBox2.textContent == "E"){
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("E");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("B");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Dbm");
        }
        if(input3.value.toLocaleUpperCase() == "EBM"){
            changedKey.push("Abm");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("A");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Gbm");
        }
    }
        if(displayBox2.textContent == "F"){
            if(input3.value.toLocaleUpperCase() == "B"){
                changedKey.push("F");
            }
            if(input3.value.toLocaleUpperCase() == "GBM"){
                changedKey.push("C");
            }
            if(input3.value.toLocaleUpperCase() == "GM"){
                changedKey.push("Dm");
            }
            if(input3.value.toLocaleUpperCase() == "EBM"){
                changedKey.push("Am");
            }
            if(input3.value.toLocaleUpperCase() == "E"){
                changedKey.push("Bb");
            }
            if(input3.value.toLocaleUpperCase() == "DBM"){
                changedKey.push("Gm");
            }
    }
    if(displayBox2.textContent == "G"){
        if(input3.value.toLocaleUpperCase() == "B"){
            changedKey.push("G");
        }
        if(input3.value.toLocaleUpperCase() == "GBM"){
            changedKey.push("D");
        }
        if(input3.value.toLocaleUpperCase() == "GM"){
            changedKey.push("Em");
        }
        if(input3.value.toLocaleUpperCase() == "EBM"){
            changedKey.push("Bm");
        }
        if(input3.value.toLocaleUpperCase() == "E"){
            changedKey.push("C");
        }
        if(input3.value.toLocaleUpperCase() == "DBM"){
            changedKey.push("Am");
        }
       
}
if(displayBox2.textContent == "A"){
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("A");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "EBM"){
        changedKey.push("Dbm");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("D");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Bm");
    }
}
if(displayBox2.textContent == "B"){
    if(input3.value.toLocaleUpperCase() == "B"){
        changedKey.push("B");
    }
    if(input3.value.toLocaleUpperCase() == "GBM"){
        changedKey.push("Gbm");
    }
    if(input3.value.toLocaleUpperCase() == "GM"){
        changedKey.push("Gm");
    }
    if(input3.value.toLocaleUpperCase() == "EBM"){
        changedKey.push("Ebm");
    }
    if(input3.value.toLocaleUpperCase() == "E"){
        changedKey.push("E");
    }
    if(input3.value.toLocaleUpperCase() == "DBM"){
        changedKey.push("Dbm");
    }
}
}
    }


input1.onchange = inputFunction;
input2.onchange = inputFunction2;
input3.onchange = Run;
button.onclick =()=>{
    ans.textContent = changedKey.toString();
    input3.value = ""}



