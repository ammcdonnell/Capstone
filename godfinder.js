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
    else if (input == "death")
    {
      outputDiv.innerHTML = "Hades";
    }
    else if (input == "dead")
    {
      outputDiv.innerHTML = "Hades";
    }
    else if (input == "underworld")
    {
      outputDiv.innerHTML = "Hades";
    }
    else if (input == "afterlife")
    {
      outputDiv.innerHTML = "Hades";
    }
    else if (input == "procreation")
    {
      outputDiv.innerHTML = "Aphrodite";
    }
    else if (input == "desire")
    {
      outputDiv.innerHTML = "Aphrodite";
    }
    else if (input == "fertility")
    {
      outputDiv.innerHTML = "Aphrodite";
    }
    else if (input == "wine")
    {
      outputDiv.innerHTML = "Dionysus";
    }
    else if (input == "festivity")
    {
      outputDiv.innerHTML = "Dionysus";
    }
    else if (input == "madness")
    {
      outputDiv.innerHTML = "Dionysus";
    }
    else if (input == "travel")
    {
      outputDiv.innerHTML = "Hermes";
    }
    else if (input == "communication")
    {
      outputDiv.innerHTML = "Hermes";
    }
    else if (input == "crafts")
    {
      outputDiv.innerHTML = "Hephaestus";
    }
    else if (input == "craftmanship")
    {
      outputDiv.innerHTML = "Hephaestus";
    }
    else if (input == "innovation")
    {
      outputDiv.innerHTML = "Hephaestus";
    }
    else if (input == "invention")
    {
      outputDiv.innerHTML = "Hephaestus";
    }
    else if (input == "fire")
    {
      outputDiv.innerHTML = "Hephaestus";
    }
    else if (input == "war")
    {
      outputDiv.innerHTML = "Ares";
    }
    else if (input == "violence")
    {
      outputDiv.innerHTML = "Ares";
    }
    else if (input == "conflict")
    {
      outputDiv.innerHTML = "Ares";
    }
    else if (input == "bloodshed")
    {
      outputDiv.innerHTML = "Ares";
    }
    else if (input == "manly virtues")
    {
      outputDiv.innerHTML = "Ares";
    }
    else if (input == "hunt")
    {
      outputDiv.innerHTML = "Artemis";
    }
    else if (input == "virginity")
    {
      outputDiv.innerHTML = "Artemis";
    }
    else if (input == "virginity")
    {
      outputDiv.innerHTML = "Artemis";
    }
    else if (input == "wilderness")
    {
      outputDiv.innerHTML = "Artemis";
    }
    else if (input == "moon")
    {
      outputDiv.innerHTML = "Artemis";
    }
    else if (input == "sun")
    {
      outputDiv.innerHTML = "Apollo";
    }
    else if (input == "prophecy")
    {
      outputDiv.innerHTML = "Apollo";
    }
    else if (input == "art")
    {
      outputDiv.innerHTML = "Apollo";
    }
    else if (input == "medicine")
    {
      outputDiv.innerHTML = "Apollo";
    }
    else if (input == "wisdom")
    {
      outputDiv.innerHTML = "Athena";
    }
    else if (input == "intelligence")
    {
      outputDiv.innerHTML = "Athena";
    }
    else if (input == "knowledge")
    {
      outputDiv.innerHTML = "Athena";
    }
    else if (input == "warfare")
    {
      outputDiv.innerHTML = "Athena";
    }
    else if (input == "handicraft")
    {
      outputDiv.innerHTML = "Athena";
    }
    else if (input == "harvest")
    {
      outputDiv.innerHTML = "Demeter";
    }
    else if (input == "earth")
    {
      outputDiv.innerHTML = "Demeter";
    }
    else if (input == "soil")
    {
      outputDiv.innerHTML = "Demeter";
    }
    else if (input == "agriculture")
    {
      outputDiv.innerHTML = "Demeter";
    }
    else if (input == "nature")
    {
      outputDiv.innerHTML = "Demeter";
    }
    else if (input == "seasons")
    {
      outputDiv.innerHTML = "Demeter";
    }
    else if (input == "storm")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "seas")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "sea")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "ocean")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "water")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "hurrican")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "earthquake")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "horse")
    {
      outputDiv.innerHTML = "Poseidon";
    }
    else if (input == "marriage")
    {
      outputDiv.innerHTML = "Hera";
    }
    else if (input == "women")
    {
      outputDiv.innerHTML = "Hera";
    }
    else if (input == "childbirth")
    {
      outputDiv.innerHTML = "Hera";
    }
    else if (input == "family")
    {
      outputDiv.innerHTML = "Hera";
    }
    else if (input == "sky")
    {
      outputDiv.innerHTML = "Zeus";
    }
    else if (input == "thunder")
    {
      outputDiv.innerHTML = "Zeus";
    }
    else if (input == "lightning")
    {
      outputDiv.innerHTML = "Zeus";
    }
    else if (input == "light")
    {
      outputDiv.innerHTML = "Zeus";
    }
    else if (input == "order")
    {
      outputDiv.innerHTML = "Zeus";
    }
    else if (input == "justice")
    {
      outputDiv.innerHTML = "Zeus";
    }
    else if (input == "law")
    {
      outputDiv.innerHTML = "Zeus";
    }
    else if (input == "")
    {
      outputDiv.innerHTML = "";
    }
    //At the end of each translation, to avoid wrong output if random input is added
    else
    {
      outputDiv.innerHTML = "not found in this mythology";
    }
  }
  if (selectedMyth == "Japanese") //all Japanese gods
  {
    if (input == "fox")
    {
      outputDiv.innerHTML = "Inari";
    }
    else if (input == "thunder")
    {
      outputDiv.innerHTML = "Raijin";
    }
    else if (input == "emperors")
    {
      outputDiv.innerHTML = "Ninigi";
    }
    else if (input == "dawn")
    {
      outputDiv.innerHTML = "Ame-no-Uzume";
    }
    else if (input == "wind")
    {
      outputDiv.innerHTML = "Fujin";
    }
    else if (input == "fisherman")
    {
      outputDiv.innerHTML = "Ebisu";
    }
    else if (input == "storm")
    {
      outputDiv.innerHTML = "Susanoo";
    }
    else if (input == "mischief")
    {
      outputDiv.innerHTML = "Susanoo";
    }
    else if (input == "badness")
    {
      outputDiv.innerHTML = "Susanoo";
    }
    else if (input == "moon")
    {
      outputDiv.innerHTML = "Tsukuyomi";
    }
    else if (input == "sun")
    {
      outputDiv.innerHTML = "Amaterasu";
    }
    else if (input == "universe")
    {
      outputDiv.innerHTML = "Amaterasu";
    }
    else if (input == "creation")
    {
      outputDiv.innerHTML = "Izanagi and Izanami";
    }
    else if (input == "")
    {
      outputDiv.innerHTML = "";
    }
    else
    {
      outputDiv.innerHTML = "not found in this mythology";
    }
  }
  if (selectedMyth == "Rapa Nui") //all Rapa Nui gods
  {
    if (input == "creation")
    {
      outputDiv.innerHTML = "Make-Make";
    }
    else if (input == "king")
    {
      outputDiv.innerHTML = "Hota Matu'a";
    }

    else if (input == "")
    {
      outputDiv.innerHTML = "";
    }
    else
    {
      outputDiv.innerHTML = "not found in this mythology";
    }
  }
  if (selectedMyth == "Yoruba") //all Yoruba gods
  {
    if (input == "creation")
    {
      outputDiv.innerHTML = "Olodumare and Obatala";
    }
    else if (input == "universe")
    {
      outputDiv.innerHTML = "Olodumare";
    }
    else if (input == "chance")
    {
      outputDiv.innerHTML = "Eshu";
    }
    else if (input == "accident")
    {
      outputDiv.innerHTML = "Eshu";
    }
    else if (input == "unpredictability")
    {
      outputDiv.innerHTML = "Eshu";
    }
    else if (input == "travel")
    {
      outputDiv.innerHTML = "Eshu";
    }
    else if (input == "war")
    {
      outputDiv.innerHTML = "Ogoun";
    }
    else if (input == "hunt")
    {
      outputDiv.innerHTML = "Ogoun";
    }
    else if (input == "craft")
    {
      outputDiv.innerHTML = "Ogoun";
    }
    else if (input == "craftmanship")
    {
      outputDiv.innerHTML = "Ogoun";
    }
    else if (input == "metalworking")
    {
      outputDiv.innerHTML = "Ogoun";
    }
    else if (input == "manly virtues")
    {
      outputDiv.innerHTML = "Ogoun";
    }
    else if (input == "water")
    {
      outputDiv.innerHTML = "Yemoja";
    }
    else if (input == "")
    {
      outputDiv.innerHTML = "";
    }
    else
    {
      outputDiv.innerHTML = "not found in this mythology";
    }
  }
  if (selectedMyth == "Egyptian") //all Egyptian gods
  {
    if (input == "earth")
    {
      outputDiv.innerHTML = "Geb";
    }
    else if (input == "sky")
    {
      outputDiv.innerHTML = "Nut";
    }
    else if (input == "death")
    {
      outputDiv.innerHTML = "Anubis";
    }
    else if (input == "dead")
    {
      outputDiv.innerHTML = "Anubis";
    }
    else if (input == "funeral")
    {
      outputDiv.innerHTML = "Anubis";
    }
    else if (input == "underworld")
    {
      outputDiv.innerHTML = "Osiris";
    }
    else if (input == "afterlife")
    {
      outputDiv.innerHTML = "Osiris";
    }
    else if (input == "vegetation")
    {
      outputDiv.innerHTML = "Osiris";
    }
    else if (input == "motherhood")
    {
      outputDiv.innerHTML = "Isis";
    }
    else if (input == "magic")
    {
      outputDiv.innerHTML = "Isis";
    }
    else if (input == "healing")
    {
      outputDiv.innerHTML = "Isis";
    }
    else if (input == "sky")
    {
      outputDiv.innerHTML = "Horus";
    }
    else if (input == "war")
    {
      outputDiv.innerHTML = "Horus";
    }
    else if (input == "vegeance")
    {
      outputDiv.innerHTML = "Horus";
    }
    else if (input == "chaos")
    {
      outputDiv.innerHTML = "Seth";
    }
    else if (input == "conflict")
    {
      outputDiv.innerHTML = "Seth";
    }
    else if (input == "violence")
    {
      outputDiv.innerHTML = "Seth";
    }
    else if (input == "desert")
    {
      outputDiv.innerHTML = "Seth";
    }
    else if (input == "storm")
    {
      outputDiv.innerHTML = "Seth";
    }
    else if (input == "sun")
    {
      outputDiv.innerHTML = "Ra";
    }
    else if (input == "cats")
    {
      outputDiv.innerHTML = "Bastet";
    }
    else if (input == "wisdom")
    {
      outputDiv.innerHTML = "Thoth";
    }
    else if (input == "intelligence")
    {
      outputDiv.innerHTML = "Thoth";
    }
    else if (input == "knowledge")
    {
      outputDiv.innerHTML = "Thoth";
    }
    else if (input == "writing")
    {
      outputDiv.innerHTML = "Thoth";
    }
    else if (input == "")
    {
      outputDiv.innerHTML = "";
    }
    else
    {
      outputDiv.innerHTML = "not found in this mythology";
    }
  }
  if (selectedMyth == "Norse") //all Nordic gods
  {
    if (input == "war")
    {
      outputDiv.innerHTML = "Odin";
    }
    else if (input == "poetry")
    {
      outputDiv.innerHTML = "Odin";
    }
    else if (input == "magic")
    {
      outputDiv.innerHTML = "Odin";
    }
    else if (input == "love")
    {
      outputDiv.innerHTML = "Frigg";
    }
    else if (input == "beauty")
    {
      outputDiv.innerHTML = "Frigg";
    }
    else if (input == "procreation")
    {
      outputDiv.innerHTML = "Frigg";
    }
    else if (input == "desire")
    {
      outputDiv.innerHTML = "Freya";
    }
    else if (input == "passion")
    {
      outputDiv.innerHTML = "Freya";
    }
    else if (input == "fertility")
    {
      outputDiv.innerHTML = "Freyr";
    }
    else if (input == "agriculture")
    {
      outputDiv.innerHTML = "Freyr";
    }
    else if (input == "prosperity")
    {
      outputDiv.innerHTML = "Freyr";
    }
    else if (input == "radiance")
    {
      outputDiv.innerHTML = "Balder";
    }
    else if (input == "fairness")
    {
      outputDiv.innerHTML = "Balder";
    }
    else if (input == "kindness")
    {
      outputDiv.innerHTML = "Balder";
    }
    else if (input == "thunder")
    {
      outputDiv.innerHTML = "Thor";
    }
    else if (input == "mischief")
    {
      outputDiv.innerHTML = "Loki";
    }
    else if (input == "")
    {
      outputDiv.innerHTML = "";
    }
    else
    {
      outputDiv.innerHTML = "not found in this mythology";
    }
  }
  if (selectedMyth == "Inca") //all Inca gods
  {
    if (input == "mountain")
    {
      outputDiv.innerHTML = "Apu";
    }
    else if (input == "wealth")
    {
      outputDiv.innerHTML = "Eleko";
    }
    else if (input == "sun")
    {
      outputDiv.innerHTML = "Inti";
    }
    else if (input == "ligth")
    {
      outputDiv.innerHTML = "Inti";
    }
    else if (input == "warmth")
    {
      outputDiv.innerHTML = "Inti";
    }
    else if (input == "moon")
    {
      outputDiv.innerHTML = "Mama Quilla";
    }
    else if (input == "women")
    {
      outputDiv.innerHTML = "Mama Quilla";
    }
    else if (input == "rain")
    {
      outputDiv.innerHTML = "Kon";
    }
    else if (input == "wind")
    {
      outputDiv.innerHTML = "Kon";
    }
    else if (input == "earth")
    {
      outputDiv.innerHTML = "Pachamama";
    }
    else if (input == "")
    {
      outputDiv.innerHTML = "";
    }
    else
    {
      outputDiv.innerHTML = "not found in this mythology";
    }
  }
}
