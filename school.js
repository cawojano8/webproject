let students = [];

document.getElementById("btn").addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let result = document.getElementById("result");

    //  input Validation
    if (name === "" || s1 <= 0 || s2 <= 0 || s3 <= 0) {
        result.innerHTML = "Please enter valid data!";
    setTimeout(() => { 500
        
    }, timeout);
        result.style.color = "red";
        return;
    }

    let average = (s1 + s2 + s3) / 3;
    let grade;

    if (average >= 80) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else grade = "Fail";

    

    // Store in array
    students.push({ name, average, grade });

    // DOM Update
    result.innerHTML = `
        Name: ${name} <br>
        Average: ${average.toFixed(2)} <br>
        Grade: ${grade}
    `;
    result.style.color = "green";
});


