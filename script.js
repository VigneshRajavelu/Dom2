function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content
    return ele;
}

function break_content(){
    var ele = document.createElement("br");
    return ele;
}

function input_create(tagname,attr1name,attrvalue1,attr2name,attrvalue2){
    var element = document.createElement(tagname)
    element.setAttribute(attr1name,attrvalue1);
    element.setAttribute(attr2name,attrvalue2);
    return element;

}



var fname = label_create("label","for","fname","Firstname");
var fname_break = break_content();
var fname_input = input_create("input","type","fname","id","fname");

var input1_break = break_content();

var mname = label_create("label","for","mname","Middlename");
var mname_break = break_content();
var mname_input = input_create("input","type","mname","id","mname");

var input2_break = break_content();

var lname = label_create("label","for","lname","Lastname");
var lname_break = break_content();
var lname_input = input_create("input","type","lname","id","lname");

var input3_break = break_content();

var email = label_create("label","for","email","Email");
var email_break = break_content();
var email_input = input_create("input","type","email","id","email");

var input4_break = break_content();

var pswd = label_create("label","for","pswd","Password");
var pswd_break = break_content();
var pswd_input = input_create("input","type","pswd","id","pswd");

var input5_break = break_content();

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML= "ClickMe";


document.body.append(fname,fname_break,fname_input,input1_break,mname,mname_break,mname_input,input2_break,lname,lname_break,lname_input,input3_break,email,email_break,email_input,input4_break,pswd,pswd_break,pswd_input,input5_break,button)