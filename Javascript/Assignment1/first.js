function Assign1(){
    temp1 = document.getElementById('temp1').value
    if(temp1 % 1 != 0 || temp1 == '' || temp1 == ' ')
        document.getElementById('temp2').innerHTML = "please enter a number"
    else
    {
        temp2 = (temp1 - 32) * (5/9)
        document.getElementById('temp2').innerHTML = temp2 + " degree Celsius"
    }
}