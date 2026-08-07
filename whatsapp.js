function sendToWhatsApp(){
    let number = "+254733774577"

    let fullName = document.getElementById('full_name').value;
    let companyName = document.getElementById('company_name').value;
    let emailAddress = document.getElementById('email').value;
    let productOfInterest = document.getElementById('product-of-interest').value;
    let tellUs = document.getElementById('tell-us').value;
    const sendBtn = document.getElementById("send-enquiry")


    var url = "https://wa.me/" + number + "?text="
    + "Full Names : " +fullName+"%0a"
    + "Company Names : " +companyName+"%0a"
    + "Email Address : " +emailAddress+"%0a"
    + "Products Of Interest : " +productOfInterest+"%0a"
    + "The Product(s) you are looking for : " +productOfInterest+"%0a";
    
    
    if(fullName=="" || companyName=="" || 
        emailAddress=="" || productOfInterest=="" || tellUs==""
    ){
        alert("Please fill in all the input fields, thank you!")
        return
    }   

    alert("Successfully filld all input fields!")
    window.open(url, '_blank').focus();
}