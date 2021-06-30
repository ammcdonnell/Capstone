function checkForTranslation()
{
  var input = document.getElementById("inputTextField").value;
  var outputDiv = document.getElementById("translationOutputDiv");
  input = input.toLowerCase();
  if (input == "love")
  {
    outputDiv.innerHTML = "Aphrodite";
  }
  //For synonyms or other translations:
  else if (input == "beauty")
  {
    outputDiv.innerHTML = "Aphrodite";
  }
  //At the end of each translation, to avoid wrong output if random input is added
  else
  {
    outputDiv.innerHTML = "";
  }

}
