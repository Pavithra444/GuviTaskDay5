//CODE

class Person{
    constructor(name,gender,dob,contactno,address,email,aadharno,panno,qualification,height,weight,skintone,maritalstatus)
    {
        this.name=name;
        this.gender=gender;
        this.dob=dob;
        this.contactno=contactno;
        this.address=address;
        this.email=email;
        this.aadharno=aadharno;
        this.panno=panno;
        this.qualification=qualification;
        this.height=height;
        this.weight=weight;
        this.skintone=skintone;
        this.maritalstatus=maritalstatus;
        
    }

    PrintOfficialDetails()
    {
        console.log("Official Details")
        console.log("****************")
        console.log("Name = "+this.name)
        console.log("Gender = "+this.gender)
        console.log("DOB = "+this.dob)
        console.log("Phone = "+this.contactno)
        console.log("Address = "+this.address)
        console.log("Email = "+this.email)
        console.log("AadharNo = "+this.aadharno)
        console.log("PAN No = "+this.panno)
        console.log("Qualification = "+this.qualification)
    }

    PrintPersonalDetails()
    {
        console.log("Personal Details")
        console.log("****************")
        console.log("Height = "+this.height)
        console.log("Weight = "+this.weight)
        console.log("SkinTone = "+this.skintone)
        console.log("MaritalStatus = "+this.maritalstatus)
            }

}

const Pavi=new Person("Pavithra Balakrishnan","Female","31-01-1994","9750954424","481,ChinnaThottam,PollachiRoad,Palladam-641664","b.pavithra444@gmail.com","649167544420","DMW1378B","M.Sc(CS)","160cm","49","MediumTone","Married");
Pavi.PrintOfficialDetails();
Pavi.PrintPersonalDetails();


//OUTPUT

//Official Details
//****************
//Name = Pavithra Balakrishnan
//Gender = Female
//DOB = 31-01-1994
//Phone = 9750954424
//Address = 481,ChinnaThottam,PollachiRoad,Palladam-641664
//Email = b.pavithra444@gmail.com
//AadharNo = 649167544420
//PAN No = DMW1378B
//Qualification = M.Sc(CS)
//Personal Details
//****************
//Height = 160cm
//Weight = 49
//SkinTone = MediumTone
//MaritalStatus = Married
