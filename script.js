function sendmail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
    const serviceID="service_asrhc5t";
    const templateID="template_0r9ejkd";
    emailjs.send(serviceID,templateID,params).then(
        res =>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("your message sent succeccfull")
        }
    )
    .catch((err)=> console.log(err))
}