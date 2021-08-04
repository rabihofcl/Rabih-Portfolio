$(document).ready(function(){
    $("#submitbutton").mouseenter(function(){
        $(this).css({"background":"#94bde0"})
    })
    $("#submitbutton").mouseleave(function(){
        $(this).css({"background":"#0275d8"})
    })
    
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4,
            },
            email:{
                required:true,
                email:true
            },
            message:{
                required:true,
                minlength:10
            }
        },
        // submitHandler(){
        //     alert("Message sent successfully")
        // }
    })

    $('#img1').hover(() => {
        document.getElementById('img1-pop').style.display = 'block'
        document.getElementById('img1-pop').style.position = 'absolute'
    })
    $('#img1').mouseleave(() => {
        document.getElementById('img1-pop').style.display = 'none'
    })
    $('#img2').hover(() => {
        document.getElementById('img2-pop').style.display = 'block'
        document.getElementById('img2-pop').style.position = 'absolute'
    })
    $('#img2').mouseleave(() => {
        document.getElementById('img2-pop').style.display = 'none'
    })
    $('#img3').hover(() => {
        document.getElementById('img3-pop').style.display = 'block'
        document.getElementById('img3-pop').style.position = 'absolute'
    })
    $('#img3').mouseleave(() => {
        document.getElementById('img3-pop').style.display = 'none'
    })
    $('#img4').hover(() => {
        document.getElementById('img4-pop').style.display = 'block'
        document.getElementById('img4-pop').style.position = 'absolute'
    })
    $('#img4').mouseleave(() => {
        document.getElementById('img4-pop').style.display = 'none'
    })
    $('#img5').hover(() => {
        document.getElementById('img5-pop').style.display = 'block'
        document.getElementById('img5-pop').style.position = 'absolute'
    })
    $('#img5').mouseleave(() => {
        document.getElementById('img5-pop').style.display = 'none'
    })
    $('#img6').hover(() => {
        document.getElementById('img6-pop').style.display = 'block'
        document.getElementById('img6-pop').style.position = 'absolute'
    })
    $('#img6').mouseleave(() => {
        document.getElementById('img6-pop').style.display = 'none'
    })
    $('#img7').hover(() => {
        document.getElementById('img7-pop').style.display = 'block'
        document.getElementById('img7-pop').style.position = 'absolute'
    })
    $('#img7').mouseleave(() => {
        document.getElementById('img7-pop').style.display = 'none'
    })
    $('#img8').hover(() => {
        document.getElementById('img8-pop').style.display = 'block'
        document.getElementById('img8-pop').style.position = 'absolute'
    })
    $('#img8').mouseleave(() => {
        document.getElementById('img8-pop').style.display = 'none'
    })
    $('#img9').hover(() => {
        document.getElementById('img9-pop').style.display = 'block'
        document.getElementById('img9-pop').style.position = 'absolute'
    })
    $('#img9').mouseleave(() => {
        document.getElementById('img9-pop').style.display = 'none'
    })
})
