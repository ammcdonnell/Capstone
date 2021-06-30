function checkForTranslation()
{
  var input = document.getElementById("inputTextField").value;
  var outputDiv = document.getElementById("translationOutputDiv");
  var selectedMyth = document.getElementById("mythSelector").value;
  input = input.toLowerCase();
  if (selectedMyth == "Greek") //all greek gods
  {
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
  if (selectedMyth == "Japanese") //all Japanese gods
  {
    if (input == "fox")
    {
      outputDiv.innerHTML = "Inari";
    }
    //For synonyms or other translations:
    else if (input == "thunder")
    {
      outputDiv.innerHTML = "Fujin";
    }
    //At the end of each translation, to avoid wrong output if random input is added
    else
    {
      outputDiv.innerHTML = "";
    }
  }

}
