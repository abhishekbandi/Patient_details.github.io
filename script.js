function createPDF() {

    //  if(document.getElementById("name").value == "" || document.getElementById("country").value == ""){
    //    alert("enter all filds");
    //}
    //else {
             
          var doc = new jsPDF(); 
  
           //Line at the top
           doc.setLineWidth(3);
           doc.line(0,1,220,1);
    
           //title
           doc.setFontSize(38);
           doc.text("Ganga Homeopathy",10,20);
            
           //Doctor Name
           doc.setFontType("bold");
           doc.setFontSize(14);
           doc.text("Dr.Ashok S Bandi",160,20);
    
           //Emailand phone adderess name
           doc.setFontSize(12);
           doc.text("email:",12,35);
           doc.text("Phone:",155,35);
    
           //email and phone 
           doc.setFontType("normal");
           doc.text("gangahomeopathy@gmail.com",25,35);
           doc.text("+919449479008",170,35);
    
           // adding horizantal line 
           doc.setLineWidth(1);
           doc.line(0,40,220,40);
    
           // adding horizantal line  after patient problem
           doc.setLineWidth(0.5);
           doc.line(10,55,200,55);
  
           // information of patient
           doc.setFontSize(14);
           doc.setFontType("bold");
           doc.text("Case No :",12,50);
           doc.text("Date:",155,50);
           doc.text("Patient Name :",12,65);
           doc.text("Patient Problem :",120,65);
           doc.text("Phone Number :",12,78);
           doc.text("Age :",100,78);
           doc.text("Sex :",149,78);
           doc.text("Blood group :",12,91);
           doc.text("Weight :",90,91);
           
           // input of the patient information
           doc.setFontType("normal");
           doc.setFontSize(14);

           // input for case number
           doc.text(document.getElementById("cnumber").value,38,50);
    
           // input for Date
           doc.text(document.getElementById("date_value").value,170,50);
    
           // input for Patient problem
           doc.text(document.getElementById("pname").value,50,65);
    
           //input for patient name
           doc.text(document.getElementById("problem").value,165,65);
           
           // input for patient number
           doc.text(document.getElementById("phone").value,53,78);
    
           // input for age
           doc.text(document.getElementById("age").value,115,78);
           
           // input for sex
           doc.text(document.getElementById("sex").value,165,78);
           
           // input for blood group
           doc.text(document.getElementById("bloodgroup").value,48,91);
    
           // input for weight
           doc.text(document.getElementById("weight").value,112,91);
    
           //Problem Statement
           doc.setFontSize(16)
           doc.text("Problem Statment :",12,110);
          
           //Medicines Provided            
           doc.text("Medicines",12,200);
        
           // bottom line
           doc.setLineWidth(1);
           doc.line(0,280,220,280);
            
           // var img = new Image()
           // img.src = 'asa.png' 
           // doc.addImage(img, 'png', 10, 78, 12, 15)
           // output as pdf
            doc.save(document.getElementById("cnumber").value,38,50);  
     }
    //}