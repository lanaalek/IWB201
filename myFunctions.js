function hideshow() {
    var div = document.getElementById("all");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}

function hideshow2() {
    var div = document.getElementById("all2");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow3() {
    var div = document.getElementById("all3");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow4() {
    var div = document.getElementById("all4");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow5() {
    var div = document.getElementById("all5");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow6() {
    var div = document.getElementById("all6");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow7() {
    var div = document.getElementById("all7");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow8() {
    var div = document.getElementById("all8");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow9() {
    var div = document.getElementById("all9");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
function hideshow10() {
    var div = document.getElementById("all10");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none"
    }
}
// function validateForm() {
//     // الحصول على قيم المدخلات
//     var name = document.getElementById("name").value;
//     var id = document.getElementById("id").value;
//     var date = document.getElementById("date").value;
//     var phone = document.getElementById("number").value;
//     var email = document.getElementById("email").value;
//     var captcha = document.getElementById("captcha").value;
//     // الحصول على قيمة الرمز captcha الحقيقية
//     var captchaValue = document.getElementById("captcha-image").alt;
//     // انشاء متغير للتحقق من الصحة
//     var valid = true;
//     // التحقق من الاسم اذا كان يحتوي على احرف هجائية فقط باللغة العربية
//     var namePattern = /^[أ-ي\s]+$/;
//     if (!namePattern.test(name)) {
//         alert("الاسم يجب أن يحتوي على أحرف هجائية فقط باللغة العربية");
//         valid = false;
//     }
//     // التحقق من الرقم الوطني اذا كان يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة
//     var idPattern = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;
//     if (!idPattern.test(id)) {
//         alert("الرقم الوطني يجب أن يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة");
//         valid = false;
//     }
//     // التحقق من تاريخ الولادة اذا كان يأخذ الشكل dd-mm-yyyy
//     var datePattern = /^\d{2}-\d{2}-\d{4}$/;
//     if (!datePattern.test(date)) {
//         alert("تاريخ الولادة يجب أن يأخذ الشكل dd-mm-yyyy");
//         valid = false;
//     }
//     // التحقق من رقم الموبايل اذا كان يطابق أرقام شبكتي Syriatel و MTN
//     var numberPattern = /^(09|094|095)\d{7}$/;
//     if (!numberPattern.test(number)) {
//         alert("رقم الموبايل يجب أن يطابق أرقام شبكتي Syriatel و MTN");
//         valid = false;
//     }
//     // التحقق من الايميل اذا كان يحتوي على @ و .
//     var emailPattern = /@.*\./;
//     if (!emailPattern.test(email)) {
//         alert("الايميل يجب أن يحتوي على @ و .");
//         valid = false;
//     }
//     // التحقق من الرمز captcha اذا كان يطابق الرمز الحقيقي
//     if (captcha != captchaValue) {
//         alert("الرمز captcha غير صحيح");
//         valid = false;
//     }

//     function showForm() {
//         document.getElementById("purchaseForm").style.display = "block";
//         generateCaptcha();
//     }

//     function validateForm() {
//         var captchaInput = document.getElementById("captcha").value;
//         // قم بتنفيذ الكود الخاص بالتحقق من صحة رمز Captcha هنا

//         // إظهار نافذة تأكيد
//         var confirmation = confirm("تأكيد عملية الشراء؟");

//         if (confirmation) {
//             alert("تمت عملية الشراء بنجاح!");
//             return true;
//         } else {
//             alert("تم إلغاء عملية الشراء.");
//             return false;
//         }
//     }

    function generateCaptcha() {
        var captchaText = generateRandomString(6);
        document.getElementById("captcha").value = "";
        document.getElementById("captcha").placeholder = captchaText;
        document.getElementById("captchaImage").src = "https://dummyimage.com/150x50/000/fff&text=" + captchaText;
    }

    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function changeCaptcha() {
        generateCaptcha();
    }
// }
function togglePurchaseForm() {
    var purchaseForm = document.getElementById("purchaseForm");
    purchaseForm.classList.toggle("active");
}
//////////////////////////////////////////////////

function showForm() {
    document.getElementById("purchaseForm").style.display = "block";
    generateCaptcha();
}

function validateForm() {
    var captchaInput = document.getElementById("captcha").value;




}

function erd(e) {
    nextbtn.disabled = false;
    for (let index = 2, index1 = 0; index < 5; index++, index1++) {
        arrdetalis[index1] = (this.parentElement.parentElement.children[index].innerText);

    }
}


function generateCaptcha() {
    var captchaText = generateRandomString(6);
    document.getElementById("captcha").value = "";
    document.getElementById("captcha").placeholder = captchaText;
    document.getElementById("captchaImage") + captchaText;
}

function generateRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var u = 0; u < length; u++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function changeCaptcha() {
    generateCaptcha();
}


/* */


// --
let arrdetalis = [];


let nextbtn = document.getElementById("btnsub");
nextbtn.disabled = true;

let myform = document.querySelector(".form");

nextbtn.onclick = function () {
    myform.style.display = 'flex'
    Captcha();
};
let cancel = document.getElementById("cancelbtn");
cancel.onclick = function () {
    myform.style.display = "none"
}
// Define the characters that can be used in the captcha code

function Captcha() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Generate a random string of 6 characters
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += chars[Math.floor(Math.random() * chars.length)];
    }
    let refr = document.getElementById("refrlpl");
    refr.innerText = captchaCode;
}
//----------

let supbtn = document.getElementById("done");
supbtn.onclick = function () {
    var username = document.getElementById("name");
    var ID = document.getElementById("IDC");
    var phone = document.getElementById("phone");
    var date_Form=document.getElementById("date")
    var email = document.getElementById("email");
    var captcha = document.getElementById("txtCaptcha");
    var refrlpl = document.getElementById("refrlpl").innerText;

    username.classList.remove("worong")
    ID.classList.remove("worong")
    phone.classList.remove("worong")
    email.classList.remove("worong")
    captcha.classList.remove("worong")


    if (username.value == "") {
        username.classList.add("worong")

        alert("يرجى ملء جميع الحقول الإلزامية");
        return false;
    }
    

    var Arabic = /^[\u0600-\u06FF\s]+$/;
    
        if (!Arabic.test(username.value)&& username.value!="" ) {
            username.classList.add("worong");
            alert('يرجى إدخال اسم كامل صالح يحتوي على أحرف عربية فقط.');
            return false;
        }
        var datePattern = /^\d{2}-\d{2}-\d{4}$/;
        if (!datePattern.test(date)&& date_Form.value!="" ) {
            alert("تاريخ الولادة يجب أن يأخذ الشكل dd-mm-yyyy");
            valid = false;
        }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value) && email.value != "") {
        email.classList.add("worong")

        alert("يرجى إدخال عنوان بريد إلكتروني صالح");
        return false;
    }

    var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
    if (!numberPattern.test(ID.value)) {
        ID.classList.add("worong")
        alert("يرجى إدخال رقم وطني صالح بين 01 و 15");
        return false;
    }


    var phonePattern = /((0)(93|94|95|96|98|99)([0-9]{7}))|((0)(92|95|96|97)([0-9]{7}))/;
    if (!phonePattern.test(phone.value) && phone.value != "") {
        phone.classList.add("worong")
        alert("يرجى إدخال رقم هاتف صالح  (مثال: 0931234567)");
        return false;
    }

    if (captcha.value == "") {
        captcha.classList.add("worong")
        alert("يرجى إدخال رمز التحقق من الكابتشا");
        return false;
    }

    if (captcha.value != refrlpl) {
        alert("رمز التحقق من الكابتشا غير صحيح");
        captcha.classList.add("worong")
        return false;
    }
    alert(" لقد تم حجز شقة بنجاح \n"
        + "مدينة " + arrdetalis[2] + "\n"
        + " " + arrdetalis[1] + "\n"
        + "بسعر " + arrdetalis[0] + "\n"


    )
}


