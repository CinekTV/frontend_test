import "./BodyMiddle.css"
import Name from "../../Name/Name";
import data from "../../../assets/data.json";

import React, { useState, useEffect } from 'react';

export let paraAdded = [] // tablica dodanych paragrafów

function BodyMiddle() {

    const [olddata, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
          // This can be an API call
          const result = await new Promise((resolve) =>
            setTimeout(() => resolve({ key: 'value' }), 2000)
          );
          setData(result);
          setIsLoading(false);
        };
    
        fetchData();
      }, []);
    
      useEffect(() => {
        if (!isLoading && olddata) {
          // Your function that depends on the data
          localdata(olddata);
        }
      }, [isLoading, olddata]);


    //Logika zamiany tekstu
    const replace = () => {
        let radios = document.getElementsByName('pick');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                let text
                switch (i) {
                    case 0:
                        text = data.lorem[i];
                        break;
                    case 1:
                        text = data.lorem[i];
                        break;
                    case 2:
                        i = Math.floor(Math.random() * 6)
                        text = data.lorem[i];
                        break;
                    default:
                        console.error("Nieoczekiwany błąd dodawania tekstu!");
                        break;
                }
                while (paraAdded.length>0) {
                    paraAdded.pop()
                }
                paraAdded.push(i);
                document.getElementById("paragraph_block").innerHTML = `<p id="${i}">${text}</p>`;
            }
        }
        localStorage.para = document.getElementById("paragraph_block").innerHTML;
    }

    //Logika dodania tekstu
    const add = () => {
        let radios = document.getElementsByName('pick');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                switch (i) {
                    case 0:
                        if (!paraAdded.includes(i)) {
                            let text = data.lorem[i];
                            if (paraAdded !== 0) {
                                document.getElementById("paragraph_block").innerHTML = `<p id="${i}">${text}</p>` + document.getElementById("paragraph_block").innerHTML;
                            } else {
                                document.getElementById("paragraph_block").innerHTML += `<p id="${i}">${text}</p>`;
                            }
                            paraAdded.push(i);
                        }
                        break;
                    case 1:
                        if (!paraAdded.includes(i)) {
                            let text = data.lorem[i];
                            if (paraAdded.length === 1 && paraAdded.includes(0)) {
                                document.getElementById("paragraph_block").innerHTML += `<p id="${i}">${text}</p>`;
                            } else if (!paraAdded.includes(0)) {
                                document.getElementById("paragraph_block").innerHTML = `<p id="${i}">${text}</p>` + document.getElementById("paragraph_block").innerHTML;
                            } else {
                                let lastChild = document.getElementById("paragraph_block").lastChild;
                                let parent = document.getElementById("paragraph_block")
                                let lastChildID = lastChild.id;
                                let arr = [];
                                let isdone = false;
                                while (isdone == false) {
                                    if(lastChildID > 1){
                                        parent.removeChild(parent.lastChild);
                                        arr.push(lastChildID);
                                        lastChild = document.getElementById("paragraph_block").lastChild;
                                        lastChildID = lastChild.id;
                                    }else{
                                        document.getElementById("paragraph_block").innerHTML += `<p id="${i}">${text}</p>`;
                                        while(arr.length > 0){
                                            document.getElementById("paragraph_block").innerHTML += `<p id="${arr[arr.length-1]}">${data.lorem[arr[arr.length-1]]}</p>`;
                                            arr.pop();
                                        }
                                        isdone = true;
                                    }
                                }
                            }
                            paraAdded.push(i);
                        }
                        break;
                    case 2:
                        if(document.getElementById("paragraph_block").childElementCount >=6 || paraAdded.length > 5){
                            alert("Nie ma więcej paragrafów!")
                            break;
                        }
                        let number = Math.floor(Math.random() * 6)
                        let doneflag = false
                        while (doneflag == false) {
                            // if (paraAdded.length === 0) {
                            //     document.getElementById("paragraph_block").innerHTML += `<p id="${number}">${text}</p>`;
                            //     break;
                            // }else
                            if (!paraAdded.includes(number)) {

                                if (paraAdded.length === 0) {
                                    document.getElementById("paragraph_block").innerHTML += `<p id="${number}">${data.lorem[number]}</p>`;
                                    doneflag = true;
                                    break;
                                }

                                let lastChild = document.getElementById("paragraph_block").lastChild;
                                let parent = document.getElementById("paragraph_block")
                                let lastChildID = lastChild.id;
                                let arr = [];
                                let isdone = false;
                                let text = data.lorem[number];
                                let  j = 0;
                                while (isdone == false && j <10) {
                                    if(lastChildID > 0 && document.getElementById("paragraph_block").childElementCount > 0 && number < lastChildID){
                                        if(number < lastChildID){
                                            parent.removeChild(parent.lastChild);
                                            arr.push(lastChildID);
                                        }
                                        if (document.getElementById("paragraph_block").childElementCount > 0) {
                                            lastChild = document.getElementById("paragraph_block").lastChild;
                                            lastChildID = lastChild.id;   
                                        }else{
                                            lastChild = -1;
                                        }
                                    }else{
                                        console.log("Dodaje z ID: " + number)
                                        document.getElementById("paragraph_block").innerHTML += `<p id="${number}">${text}</p>`;
                                        while(arr.length > 0){
                                            console.log("Dodaje||||| z ID: " + number)
                                            document.getElementById("paragraph_block").innerHTML += `<p id="${arr[arr.length-1]}">${data.lorem[arr[[arr.length-1]]]}</p>`;
                                            arr.pop();
                                        }
                                        doneflag = true;
                                        isdone = true;
                                    }
                                    j++;
                                }
                                break;
                            }
                            if(number>=5){
                                number = 0;
                            }else{
                                number++;
                            }
                        }
                        paraAdded.push(number);
                        break;

                    default:
                        console.error("Nieoczekiwany błąd dodawania tekstu!");
                        break;
                }
            }
        }
        localStorage.para = document.getElementById("paragraph_block").innerHTML;
    }
    const localdata = () =>{
        if(localStorage.para){
            document.getElementById("paragraph_block").innerHTML += localStorage.para;
        }
    }
    if (isLoading) {
        return <div>Loading...</div>;
      }
    return (
        <>
            <div className="panelMiddle">
                <Name>Blok Drugi</Name>
                <div className="buttonsHolder">
                    <button type="button" onClick={replace}>Zastąp</button>
                    <button type="button" onClick={add}>Doklej</button>
                </div>
            </div>
        </>
    )
}

export default BodyMiddle;