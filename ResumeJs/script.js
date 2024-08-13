let resume={
    'name':{
        'first name':'Abhay',
        'last name ':'Giri'
    },
    'phone number':"234093",
    'adress':"Mathura",
    "Dob":"18/06/2004",
    "About":"A highly skilled software engineer with 5+ years of experience in developing web applications and managing sothearo projects Proficient in various programming languages and frameworks, with a strong ability to solve complex problertes and deliver high-quality software solutions",
    "skill":["java","c","JAvascipt"],
    "Education":{"College":"Gla",
        "School":"sarawati vidya mandir"
    },
    "Senior Software Engineer":["Worked on various projects using Angular and Express js","Collaborated with designers to create user-friendly web interfaces"], 
    
}
let data=document.getElementById("resume")
data.innerText=JSON.stringify(resume,null,2)
console.log(resume);
console.log(resume.Education.College);